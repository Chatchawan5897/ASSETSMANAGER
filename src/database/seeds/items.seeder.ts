import { AppDataSource } from '../data-source';

export async function seedItems() {

  await AppDataSource.transaction(async manager => {

    /* =======================
     * ITEMS
     * ======================= */
    const itemResult = await manager.query(
      `
      INSERT INTO items (
        item_type_id,
        item_subtype_id,
        assets_type_id,
        assets_status_id,
        brand_id,
        vendor_id,
        name_th,
        name_en,
        model,
        serial_no,
        is_group,
        can_borrow,
        is_active
      )
      VALUES (
        1, 1, 1, 1, 1, 1,
        'โน้ตบุ๊กสำนักงาน',
        'Office Laptop',
        'DELL-LATITUDE-5440',
        'SN-LAP-0001',
        false,
        true,
        true
      )
      RETURNING id
      `
    );

    const itemId = itemResult[0].id;

    /* =======================
     * ITEM CODES
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_codes (item_id, code_type, code_value)
      VALUES
        ($1, 'MAIN', 'LAP-0001'),
        ($1, 'SAP', 'SAP-LAP-0001')
      `,
      [itemId],
    );

    /* =======================
     * FINANCE
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_finance (
        item_id,
        price_before_vat,
        book_value,
        invoice_no,
        posting_date,
        asset_date
      )
      VALUES (
        $1,
        32000,
        28000,
        'INV-LAP-001',
        CURRENT_DATE,
        CURRENT_DATE
      )
      `,
      [itemId],
    );

    /* =======================
     * PROPERTIES
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_properties (
        item_id,
        color,
        size,
        weight,
        property_detail
      )
      VALUES (
        $1,
        'สีดำ',
        '14 inch',
        '1.6kg',
        'Intel i5 / RAM 16GB / SSD 512GB'
      )
      `,
      [itemId],
    );

    /* =======================
     * DESCRIPTIONS
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_descriptions (item_id, description, seq)
      VALUES
        ($1, 'ใช้งานสำหรับพนักงานสำนักงาน', 1),
        ($1, 'ติดตั้ง Windows 11 Pro', 2)
      `,
      [itemId],
    );

    /* =======================
     * IMAGES
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_images (item_id, image_type, image_path, seq)
      VALUES
        ($1, 'THUMBNAIL', '/images/laptop_thumb.jpg', 1),
        ($1, 'GALLERY', '/images/laptop_1.jpg', 2)
      `,
      [itemId],
    );

    /* =======================
     * WARRANTY
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_warranties (
        item_id,
        warranty_type_id,
        is_warranty_lifetime,
        month_of_warranty,
        warranty_start_date,
        warranty_end_date
      )
      VALUES (
        $1,
        1,
        false,
        36,
        CURRENT_DATE,
        CURRENT_DATE + INTERVAL '36 months'
      )
      `,
      [itemId],
    );

    /* =======================
     * PROJECT
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_projects (
        item_id,
        project_id,
        project_branch_id,
        is_general_project,
        project_year,
        work_period,
        is_used_in_project
      )
      VALUES (
        $1,
        100,
        1,
        false,
        2025,
        12,
        true
      )
      `,
      [itemId],
    );

    /* =======================
     * LOCATION
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_locations (
        item_id,
        location_zone_id,
        building_branch_id,
        floor_area_room_id,
        location_id
      )
      VALUES (
        $1,
        1,
        1,
        402,
        9001
      )
      `,
      [itemId],
    );

    /* =======================
     * DOCUMENT
     * ======================= */
    await manager.query(
      `
      INSERT INTO item_documents (
        item_id,
        document_no,
        document_type,
        document_date,
        status_upload,
        return_note
      )
      VALUES (
        $1,
        'DOC-LAP-001',
        'PURCHASE',
        CURRENT_DATE,
        'SUCCESS',
        NULL
      )
      `,
      [itemId],
    );
  });


  console.log('✅ seedItem completed');
}
