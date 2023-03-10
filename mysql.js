"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// Importing our mySQL connection library
var mysql = require("mysql2/promise");
// Establishing a connection to our SQL database
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Bluelockmugen2020!',
    database: 'classicmodels'
});
function databaseConnect() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, _a, rows, fields, customers, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, pool.getConnection()];
                case 1:
                    connection = _b.sent();
                    console.log("Connection established!");
                    return [4 /*yield*/, connection.query("SELECT 1")];
                case 2:
                    _a = _b.sent(), rows = _a[0], fields = _a[1];
                    console.log("Connection is up and running.");
                    // Create Operation
                    return [4 /*yield*/, connection.query("INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (706, 'Doflamugen', 'Trout', 'Logan', '704-632-5299', '1402 Wessonhunt Ct.', 'Concord', 'US')")];
                case 3:
                    // Create Operation
                    _b.sent();
                    console.log("New customer account created.");
                    return [4 /*yield*/, connection.query("SELECT * FROM customers")];
                case 4:
                    customers = _b.sent();
                    console.log("Customer information has been logged.");
                    // Update Operation
                    return [4 /*yield*/, connection.query("UPDATE customers SET customerName = 'Fake Mingo' WHERE customerNumber = 706")];
                case 5:
                    // Update Operation
                    _b.sent();
                    console.log("Customer name has been updated.");
                    // Delete Operation
                    return [4 /*yield*/, connection.query("DELETE FROM customers WHERE customerNumber = 223")];
                case 6:
                    // Delete Operation
                    _b.sent();
                    console.log("Customer information has been deleted.");
                    connection.release();
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.error("Error connecting to the database: ", error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
// callback of our function databaseConnect
databaseConnect();
