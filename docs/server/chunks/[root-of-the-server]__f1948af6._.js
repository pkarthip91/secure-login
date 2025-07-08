module.exports = {

"[project]/.next-internal/server/app/api/verifyMfa/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/verifyMfa/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
let mfaStore = new Map();
const generateOTP = ()=>Math.floor(100000 + Math.random() * 900000).toString();
async function POST(req) {
    try {
        const { username, code, action } = await req.json();
        const key = username?.toLowerCase();
        const record = mfaStore.get(key);
        if (action === "generate") {
            const otp = generateOTP();
            mfaStore.set(key, {
                otp,
                attempts: 0,
                issuedAt: Date.now()
            });
            console.log(`OTP for ${key}: ${otp}`);
            return Response.json({
                status: "OTP generated",
                otp
            }) // Return OTP
            ;
        }
        if (!record) return Response.json({
            message: "OTP not issued"
        }, {
            status: 403
        });
        if (!code) return Response.json({
            message: "Missing code"
        }, {
            status: 400
        });
        if (Date.now() - record.issuedAt > 2 * 60 * 1000) return Response.json({
            message: "OTP expired"
        }, {
            status: 403
        });
        if (record.attempts >= 3) return Response.json({
            message: "Too many attempts"
        }, {
            status: 403
        });
        if (record.otp !== code) {
            mfaStore.set(key, {
                ...record,
                attempts: record.attempts + 1
            });
            return Response.json({
                message: "Invalid code"
            }, {
                status: 401
            });
        }
        mfaStore.delete(key);
        return Response.json({
            success: true
        });
    } catch  {
        return Response.json({
            message: "Internal server error"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f1948af6._.js.map