import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatedMdItems1768895975809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    /* =========================
     * items (core)
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE items (
        id BIGSERIAL PRIMARY KEY,
        parent_id BIGINT,
        item_type_id BIGINT NOT NULL,
        item_subtype_id BIGINT NOT NULL,
        assets_type_id BIGINT NOT NULL,
        assets_status_id BIGINT NOT NULL,
        brand_id BIGINT NOT NULL,
        vendor_id BIGINT NOT NULL,
        name_th VARCHAR NOT NULL,
        name_en VARCHAR,
        model VARCHAR NOT NULL,
        serial_no VARCHAR NOT NULL,
        is_group BOOLEAN NOT NULL DEFAULT false,
        can_borrow BOOLEAN NOT NULL DEFAULT false,
        is_active BOOLEAN NOT NULL DEFAULT true,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        deleted_at TIMESTAMP
      );
    `);

    /* =========================
     * item_codes
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_codes (
        id BIGSERIAL PRIMARY KEY,
        item_id BIGINT NOT NULL,
        code_type VARCHAR(30) NOT NULL,
        code_value VARCHAR NOT NULL,
        CONSTRAINT uq_item_code UNIQUE (item_id, code_type),
        CONSTRAINT fk_item_codes_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_finance
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_finance (
        item_id BIGINT PRIMARY KEY,
        price_before_vat DOUBLE PRECISION NOT NULL,
        book_value BIGINT,
        invoice_no VARCHAR,
        posting_date DATE,
        asset_date DATE,
        CONSTRAINT fk_item_finance_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_properties
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_properties (
        item_id BIGINT PRIMARY KEY,
        color VARCHAR,
        size VARCHAR,
        weight VARCHAR,
        property_detail VARCHAR,
        CONSTRAINT fk_item_properties_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_descriptions
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_descriptions (
        id BIGSERIAL PRIMARY KEY,
        item_id BIGINT NOT NULL,
        description TEXT NOT NULL,
        seq INT NOT NULL,
        CONSTRAINT fk_item_descriptions_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_images
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_images (
        id BIGSERIAL PRIMARY KEY,
        item_id BIGINT NOT NULL,
        image_type VARCHAR(30) NOT NULL,
        image_path VARCHAR NOT NULL,
        seq INT,
        CONSTRAINT fk_item_images_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_warranties
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_warranties (
        item_id BIGINT PRIMARY KEY,
        warranty_type_id BIGINT NOT NULL,
        is_warranty_lifetime BOOLEAN DEFAULT false,
        month_of_warranty BIGINT,
        warranty_start_date DATE,
        warranty_end_date DATE,
        warranty_detail TEXT,
        CONSTRAINT fk_item_warranties_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_projects
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_projects (
        item_id BIGINT PRIMARY KEY,
        project_id BIGINT,
        project_branch_id BIGINT,
        is_general_project BOOLEAN DEFAULT false,
        general_project_name VARCHAR,
        project_year BIGINT,
        work_period BIGINT,
        is_used_in_project BOOLEAN DEFAULT false,
        CONSTRAINT fk_item_projects_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_locations
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_locations (
        item_id BIGINT PRIMARY KEY,
        location_zone_id INT,
        building_branch_id INT,
        floor_area_room_id INT,
        location_id INT,
        CONSTRAINT fk_item_locations_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * item_documents
     * ========================= */
    await queryRunner.query(`
      CREATE TABLE item_documents (
        id BIGSERIAL PRIMARY KEY,
        item_id BIGINT NOT NULL,
        document_no VARCHAR,
        document_type VARCHAR,
        document_date DATE,
        excel_id BIGINT,
        excel_path VARCHAR,
        excel_date DATE,
        status_upload VARCHAR,
        return_note TEXT,
        CONSTRAINT fk_item_documents_item
          FOREIGN KEY (item_id) REFERENCES items(id)
          ON DELETE CASCADE
      );
    `);

    /* =========================
     * Index (สำคัญ)
     * ========================= */
    await queryRunner.query(`CREATE INDEX idx_item_codes_item_id ON item_codes(item_id);`);
    await queryRunner.query(`CREATE INDEX idx_item_images_item_id ON item_images(item_id);`);
    await queryRunner.query(`CREATE INDEX idx_item_documents_item_id ON item_documents(item_id);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`DROP TABLE IF EXISTS item_documents;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_locations;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_projects;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_warranties;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_images;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_descriptions;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_properties;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_finance;`);
    await queryRunner.query(`DROP TABLE IF EXISTS item_codes;`);
    await queryRunner.query(`DROP TABLE IF EXISTS items;`);
  }
}
