/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(7);
const app_controller_1 = __webpack_require__(8);
const app_service_1 = __webpack_require__(9);
const database_config_1 = __webpack_require__(10);
const users_module_1 = __webpack_require__(11);
const users_departments_module_1 = __webpack_require__(23);
const departments_module_1 = __webpack_require__(29);
const items_module_1 = __webpack_require__(34);
const auth_module_1 = __webpack_require__(42);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            users_module_1.UsersModule, users_departments_module_1.UsersDepartmentsModule, departments_module_1.DepartmentsModule, items_module_1.ItemsModule, auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(9);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Health check endpoint' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'API is healthy' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)('api'),
    (0, swagger_1.ApiTags)('Health Check'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseConfig = void 0;
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    //   port: parseInt(process.env.DB_PORT, 10) || 5432,
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USERNAME || 'chatchawan',
    password: process.env.DB_PASSWORD || 'Abc12345++',
    database: process.env.DB_DATABASE || 'ditto_assets_db',
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === 'development', // true ใน dev / false ใน prod
    logging: process.env.NODE_ENV === 'development',
    dropSchema: false,
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const users_service_1 = __webpack_require__(12);
const users_controller_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(7);
const user_entity_1 = __webpack_require__(14);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(14);
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(createUserDto) {
        console.log("Users.Service", createUserDto);
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }
    findAll() {
        return this.usersRepository.find();
    }
    findByEmployeecode(employee_code) {
        return this.usersRepository.findOneBy({ employee_code });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const users_department_entity_1 = __webpack_require__(15);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "employee_code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "profile_image", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => users_department_entity_1.UsersDepartment, (ud) => ud.user_id),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "userDepartments", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.Index)('IDX_users_email', ['email'], { unique: true }),
    (0, typeorm_1.Index)('IDX_users_employee_code', ['employee_code'], { unique: true })
], User);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDepartment = void 0;
const tslib_1 = __webpack_require__(6);
__webpack_require__(16);
const typeorm_1 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(14);
const department_entity_1 = __webpack_require__(17);
let UsersDepartment = class UsersDepartment {
};
exports.UsersDepartment = UsersDepartment;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], UsersDepartment.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    tslib_1.__metadata("design:type", String)
], UsersDepartment.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    tslib_1.__metadata("design:type", String)
], UsersDepartment.prototype, "department_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UsersDepartment.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UsersDepartment.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userDepartments, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UsersDepartment.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.userDepartments, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    tslib_1.__metadata("design:type", typeof (_d = typeof department_entity_1.Department !== "undefined" && department_entity_1.Department) === "function" ? _d : Object)
], UsersDepartment.prototype, "department", void 0);
exports.UsersDepartment = UsersDepartment = tslib_1.__decorate([
    (0, typeorm_1.Entity)('md_users_departments')
], UsersDepartment);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Department = void 0;
const tslib_1 = __webpack_require__(6);
__webpack_require__(16);
const typeorm_1 = __webpack_require__(13);
const users_department_entity_1 = __webpack_require__(15);
let Department = class Department {
};
exports.Department = Department;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "code", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name_th", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name_en", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Department.prototype, "is_active", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "created_by", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "updated_by", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "deleted_by", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Department.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Department.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true,
    }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Department.prototype, "deleted_at", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => users_department_entity_1.UsersDepartment, (ud) => ud.department_id),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "userDepartments", void 0);
exports.Department = Department = tslib_1.__decorate([
    (0, typeorm_1.Entity)('md_departments'),
    (0, typeorm_1.Index)('IDX_departments_code', ['code'], { unique: true })
], Department);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const users_service_1 = __webpack_require__(12);
const create_user_dto_1 = __webpack_require__(19);
const jwt_auth_guard_1 = __webpack_require__(21);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    getProfile(req) {
        return req.user;
    }
    findAll() {
        return this.usersService.findAll();
    }
};
exports.UsersController = UsersController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponseDto = exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(6);
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(20);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EMP001', description: 'Employee code' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "employee_code", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name' }),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '+66812345678', description: 'Phone number', required: false }),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/image.jpg', description: 'Profile image URL', required: false }),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "profile_image", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com', description: 'Email address' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Password (at least 6 characters)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
class UserResponseDto {
}
exports.UserResponseDto = UserResponseDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'User ID' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EMP001', description: 'Employee code' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "employee_code", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '+66812345678', description: 'Phone number' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/image.jpg', description: 'Profile image URL' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "profile_image", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com', description: 'Email address' }),
    tslib_1.__metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-13T10:30:00Z', description: 'Created at' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserResponseDto.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-13T10:30:00Z', description: 'Updated at' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserResponseDto.prototype, "updated_at", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(22);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDepartmentsModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const users_departments_service_1 = __webpack_require__(24);
const users_departments_controller_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(7);
const users_department_entity_1 = __webpack_require__(15);
const department_entity_1 = __webpack_require__(17);
let UsersDepartmentsModule = class UsersDepartmentsModule {
};
exports.UsersDepartmentsModule = UsersDepartmentsModule;
exports.UsersDepartmentsModule = UsersDepartmentsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_department_entity_1.UsersDepartment, department_entity_1.Department])],
        controllers: [users_departments_controller_1.UsersDepartmentsController],
        providers: [users_departments_service_1.UsersDepartmentsService],
    })
], UsersDepartmentsModule);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDepartmentsService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
let UsersDepartmentsService = class UsersDepartmentsService {
    create(createUsersDepartmentDto) {
        return 'This action adds a new usersDepartment';
    }
    findAll() {
        return `This action returns all usersDepartments`;
    }
    findOne(id) {
        return `This action returns a #${id} usersDepartment`;
    }
    update(id, updateUsersDepartmentDto) {
        return `This action updates a #${id} usersDepartment`;
    }
    remove(id) {
        return `This action removes a #${id} usersDepartment`;
    }
};
exports.UsersDepartmentsService = UsersDepartmentsService;
exports.UsersDepartmentsService = UsersDepartmentsService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UsersDepartmentsService);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersDepartmentsController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const users_departments_service_1 = __webpack_require__(24);
const create_users_department_dto_1 = __webpack_require__(26);
const update_users_department_dto_1 = __webpack_require__(27);
let UsersDepartmentsController = class UsersDepartmentsController {
    constructor(usersDepartmentsService) {
        this.usersDepartmentsService = usersDepartmentsService;
    }
    create(createUsersDepartmentDto) {
        return this.usersDepartmentsService.create(createUsersDepartmentDto);
    }
    findAll() {
        return this.usersDepartmentsService.findAll();
    }
    findOne(id) {
        return this.usersDepartmentsService.findOne(+id);
    }
    update(id, updateUsersDepartmentDto) {
        return this.usersDepartmentsService.update(+id, updateUsersDepartmentDto);
    }
    remove(id) {
        return this.usersDepartmentsService.remove(+id);
    }
};
exports.UsersDepartmentsController = UsersDepartmentsController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_users_department_dto_1.CreateUsersDepartmentDto !== "undefined" && create_users_department_dto_1.CreateUsersDepartmentDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersDepartmentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UsersDepartmentsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersDepartmentsController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof update_users_department_dto_1.UpdateUsersDepartmentDto !== "undefined" && update_users_department_dto_1.UpdateUsersDepartmentDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersDepartmentsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersDepartmentsController.prototype, "remove", null);
exports.UsersDepartmentsController = UsersDepartmentsController = tslib_1.__decorate([
    (0, common_1.Controller)('users-departments'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_departments_service_1.UsersDepartmentsService !== "undefined" && users_departments_service_1.UsersDepartmentsService) === "function" ? _a : Object])
], UsersDepartmentsController);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsersDepartmentDto = void 0;
class CreateUsersDepartmentDto {
}
exports.CreateUsersDepartmentDto = CreateUsersDepartmentDto;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsersDepartmentDto = void 0;
const mapped_types_1 = __webpack_require__(28);
const create_users_department_dto_1 = __webpack_require__(26);
class UpdateUsersDepartmentDto extends (0, mapped_types_1.PartialType)(create_users_department_dto_1.CreateUsersDepartmentDto) {
}
exports.UpdateUsersDepartmentDto = UpdateUsersDepartmentDto;


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentsModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const departments_service_1 = __webpack_require__(30);
const departments_controller_1 = __webpack_require__(31);
let DepartmentsModule = class DepartmentsModule {
};
exports.DepartmentsModule = DepartmentsModule;
exports.DepartmentsModule = DepartmentsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [departments_controller_1.DepartmentsController],
        providers: [departments_service_1.DepartmentsService],
    })
], DepartmentsModule);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentsService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
let DepartmentsService = class DepartmentsService {
    create(createDepartmentDto) {
        return 'This action adds a new department';
    }
    findAll() {
        return `This action returns all departments`;
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DepartmentsService);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DepartmentsController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const departments_service_1 = __webpack_require__(30);
const create_department_dto_1 = __webpack_require__(32);
const update_department_dto_1 = __webpack_require__(33);
let DepartmentsController = class DepartmentsController {
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    create(createDepartmentDto) {
        return this.departmentsService.create(createDepartmentDto);
    }
    findAll() {
        return this.departmentsService.findAll();
    }
    findOne(id) {
        return this.departmentsService.findOne(+id);
    }
    update(id, updateDepartmentDto) {
        return this.departmentsService.update(+id, updateDepartmentDto);
    }
    remove(id) {
        return this.departmentsService.remove(+id);
    }
};
exports.DepartmentsController = DepartmentsController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_department_dto_1.CreateDepartmentDto !== "undefined" && create_department_dto_1.CreateDepartmentDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DepartmentsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], DepartmentsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DepartmentsController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof update_department_dto_1.UpdateDepartmentDto !== "undefined" && update_department_dto_1.UpdateDepartmentDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DepartmentsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], DepartmentsController.prototype, "remove", null);
exports.DepartmentsController = DepartmentsController = tslib_1.__decorate([
    (0, common_1.Controller)('departments'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" ? _a : Object])
], DepartmentsController);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDepartmentDto = void 0;
class CreateDepartmentDto {
}
exports.CreateDepartmentDto = CreateDepartmentDto;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDepartmentDto = void 0;
const mapped_types_1 = __webpack_require__(28);
const create_department_dto_1 = __webpack_require__(32);
class UpdateDepartmentDto extends (0, mapped_types_1.PartialType)(create_department_dto_1.CreateDepartmentDto) {
}
exports.UpdateDepartmentDto = UpdateDepartmentDto;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(7);
const items_service_1 = __webpack_require__(35);
const items_controller_1 = __webpack_require__(41);
const item_entity_1 = __webpack_require__(36);
const item_code_entity_1 = __webpack_require__(37);
const item_image_entity_1 = __webpack_require__(38);
const item_description_entity_1 = __webpack_require__(39);
const item_document_entity_1 = __webpack_require__(40);
let ItemsModule = class ItemsModule {
};
exports.ItemsModule = ItemsModule;
exports.ItemsModule = ItemsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                item_entity_1.Item,
                item_code_entity_1.ItemCode,
                item_image_entity_1.ItemImage,
                item_description_entity_1.ItemDescription,
                item_document_entity_1.ItemDocument,
            ]),
        ],
        controllers: [items_controller_1.ItemsController],
        providers: [items_service_1.ItemsService],
        exports: [items_service_1.ItemsService],
    })
], ItemsModule);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(13);
const item_entity_1 = __webpack_require__(36);
let ItemsService = class ItemsService {
    constructor(itemRepo) {
        this.itemRepo = itemRepo;
    }
    async create(data) {
        const item = this.itemRepo.create(data);
        return this.itemRepo.save(item);
    }
    async findAll() {
        return this.itemRepo.find({
            relations: ['codes', 'images'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const item = await this.itemRepo.findOne({
            where: { id },
            relations: ['codes', 'images', 'descriptions', 'documents'],
        });
        if (!item) {
            throw new common_1.NotFoundException('Item not found');
        }
        return item;
    }
    /* =====================
     * UPDATE
     * ===================== */
    async update(id, data) {
        const item = await this.findOne(id);
        Object.assign(item, data);
        return this.itemRepo.save(item);
    }
    /* =====================
     * DELETE (soft idea)
     * ===================== */
    async remove(id) {
        const item = await this.findOne(id);
        item.isActive = false;
        await this.itemRepo.save(item);
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ItemsService);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const item_code_entity_1 = __webpack_require__(37);
const item_image_entity_1 = __webpack_require__(38);
const item_description_entity_1 = __webpack_require__(39);
const item_document_entity_1 = __webpack_require__(40);
let Item = class Item {
};
exports.Item = Item;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint' }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'item_type_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "itemTypeId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'item_subtype_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "itemSubtypeId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'assets_type_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "assetsTypeId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'assets_status_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "assetsStatusId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'brand_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "brandId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'vendor_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "vendorId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'name_th',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "nameTh", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'name_en',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "nameEn", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "model", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'serial_no',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "serialNo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'price_before_vat',
        type: 'double precision',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "priceBeforeVat", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'book_value',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "bookValue", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "invoiceNo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Item.prototype, "postingDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Item.prototype, "assetDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "size", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "weight", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "propertyDetail", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'warranty_type_id',
        type: 'bigint',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "warrantyTypeId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Item.prototype, "isWarrantyLifetime", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "monthOfWarranty", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Item.prototype, "warrantyStartDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Item.prototype, "warrantyEndDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Item.prototype, "isGroup", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Item.prototype, "canBorrow", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    tslib_1.__metadata("design:type", Boolean)
], Item.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_code_entity_1.ItemCode, (code) => code.item),
    tslib_1.__metadata("design:type", Array)
], Item.prototype, "codes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_image_entity_1.ItemImage, (image) => image.item),
    tslib_1.__metadata("design:type", Array)
], Item.prototype, "images", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_description_entity_1.ItemDescription, (desc) => desc.item),
    tslib_1.__metadata("design:type", Array)
], Item.prototype, "descriptions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_document_entity_1.ItemDocument, (doc) => doc.item),
    tslib_1.__metadata("design:type", Array)
], Item.prototype, "documents", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Item.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Item.prototype, "updatedAt", void 0);
exports.Item = Item = tslib_1.__decorate([
    (0, typeorm_1.Entity)('items')
], Item);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemCode = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const item_entity_1 = __webpack_require__(36);
let ItemCode = class ItemCode {
};
exports.ItemCode = ItemCode;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ItemCode.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, (item) => item.codes, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof item_entity_1.Item !== "undefined" && item_entity_1.Item) === "function" ? _a : Object)
], ItemCode.prototype, "item", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'code_type',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemCode.prototype, "codeType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'code_value',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemCode.prototype, "codeValue", void 0);
exports.ItemCode = ItemCode = tslib_1.__decorate([
    (0, typeorm_1.Entity)('item_codes')
], ItemCode);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemImage = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const item_entity_1 = __webpack_require__(36);
let ItemImage = class ItemImage {
};
exports.ItemImage = ItemImage;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ItemImage.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, item => item.images, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof item_entity_1.Item !== "undefined" && item_entity_1.Item) === "function" ? _a : Object)
], ItemImage.prototype, "item", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'image_type',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemImage.prototype, "imageType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'image_path',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemImage.prototype, "imagePath", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    tslib_1.__metadata("design:type", Number)
], ItemImage.prototype, "seq", void 0);
exports.ItemImage = ItemImage = tslib_1.__decorate([
    (0, typeorm_1.Entity)('item_images')
], ItemImage);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemDescription = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const item_entity_1 = __webpack_require__(36);
let ItemDescription = class ItemDescription {
};
exports.ItemDescription = ItemDescription;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ItemDescription.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, item => item.descriptions, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof item_entity_1.Item !== "undefined" && item_entity_1.Item) === "function" ? _a : Object)
], ItemDescription.prototype, "item", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ItemDescription.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], ItemDescription.prototype, "seq", void 0);
exports.ItemDescription = ItemDescription = tslib_1.__decorate([
    (0, typeorm_1.Entity)('item_descriptions')
], ItemDescription);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemDocument = void 0;
const tslib_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const item_entity_1 = __webpack_require__(36);
let ItemDocument = class ItemDocument {
};
exports.ItemDocument = ItemDocument;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ItemDocument.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => item_entity_1.Item, (item) => item.documents, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof item_entity_1.Item !== "undefined" && item_entity_1.Item) === "function" ? _a : Object)
], ItemDocument.prototype, "item", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'document_no',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemDocument.prototype, "documentNo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        name: 'document_tpye',
        type: 'varchar',
        nullable: true, // ✅ สำคัญ
    }),
    tslib_1.__metadata("design:type", String)
], ItemDocument.prototype, "documentType", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ItemDocument.prototype, "documentDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", String)
], ItemDocument.prototype, "statusUpload", void 0);
exports.ItemDocument = ItemDocument = tslib_1.__decorate([
    (0, typeorm_1.Entity)('item_documents')
], ItemDocument);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemsController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const items_service_1 = __webpack_require__(35);
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    /* =====================
     * CREATE
     * POST /items
     * ===================== */
    async create(body) {
        return this.itemsService.create(body);
    }
    /* =====================
     * FIND ALL
     * GET /items
     * ===================== */
    async findAll() {
        return this.itemsService.findAll();
    }
    /* =====================
     * FIND ONE
     * GET /items/:id
     * ===================== */
    async findOne(id) {
        return this.itemsService.findOne(id);
    }
    /* =====================
     * UPDATE
     * PUT /items/:id
     * ===================== */
    async update(id, body) {
        return this.itemsService.update(id, body);
    }
    /* =====================
     * DELETE (soft delete)
     * DELETE /items/:id
     * ===================== */
    async remove(id) {
        await this.itemsService.remove(id);
        return { message: 'Item removed successfully' };
    }
};
exports.ItemsController = ItemsController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ItemsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ItemsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ItemsController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ItemsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ItemsController.prototype, "remove", null);
exports.ItemsController = ItemsController = tslib_1.__decorate([
    (0, common_1.Controller)('items'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof items_service_1.ItemsService !== "undefined" && items_service_1.ItemsService) === "function" ? _a : Object])
], ItemsController);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(43);
const auth_controller_1 = __webpack_require__(46);
const jwt_1 = __webpack_require__(44);
const passport_1 = __webpack_require__(22);
const jwt_strategy_1 = __webpack_require__(48);
const users_module_1 = __webpack_require__(11);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }), // 👈 สำคัญ
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'dev-secret-key',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(44);
const bcrypt = tslib_1.__importStar(__webpack_require__(45));
const users_service_1 = __webpack_require__(12);
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async login(employee_code, password) {
        const user = await this.usersService.findByEmployeecode(employee_code);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid employee code or password');
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException('Invalid employee code or password');
        }
        const payload = {
            sub: user.id,
            employee_code: user.employee_code,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(43);
const login_dto_1 = __webpack_require__(47);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(dto) {
        return this.authService.login(dto.employee_code, dto.password);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200) // login ปกติใช้ 200
    ,
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const tslib_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(20);
class LoginDto {
}
exports.LoginDto = LoginDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "employee_code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(6);
// เอาไว้ตรวจสอบ token
// modules/auth/strategies/jwt.strategy.ts
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(22);
const passport_jwt_1 = __webpack_require__(49);
const users_service_1 = __webpack_require__(12);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET ?? 'dev-secret-key',
        });
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.findByEmployeecode(payload.employee_code);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid token: user does not exist');
        }
        return {
            id: user.id,
            userId: payload.sub,
            employee_code: payload.employee_code,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1); // ⬅️ (1) เพิ่ม ValidationPipe
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const dotenv_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
// โหลด .env ก่อน
(0, dotenv_1.config)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*', // ปรับเป็น URL ของ frontend ใน production
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true, // ลบ field ที่ไม่มีใน DTO
        forbidNonWhitelisted: true, // ส่ง field แปลกมา → error
        transform: true, // แปลง type อัตโนมัติ
    }));
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    // Swagger Setup
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Assets Manager API')
        .setDescription('Assets Management System API Documentation')
        .setVersion('1.0.0')
        .addTag('Assets', 'Asset management endpoints')
        .addTag('Users', 'User management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    common_1.Logger.log(`📚 Swagger documentation available at: http://localhost:${port}/api/docs`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map