module.exports = {

"[project]/.next-internal/server/app/api/transaction-history/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/transaction-history/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
async function GET() {
    const transactionHistory = [
        {
            date: "24 Aug 2023",
            referenceId: "#8343434342",
            to: "Bloom Enterprise Sdn Bhd\nRecipient references will go here...",
            transactionType: "DuitNow payment",
            amount: "RM 1,200.00"
        },
        {
            date: "14 Jul 2023",
            referenceId: "#8343434342",
            to: "Muhammad Andy Asmawi\nRecipient references will go here...",
            transactionType: "DuitNow payment",
            amount: "RM 54,810.16"
        },
        {
            date: "12 Jul 2023",
            referenceId: "#8343434342",
            to: "Utilities Company Sdn Bhd\nRecipient references will go here...",
            transactionType: "DuitNow payment",
            amount: "RM 100.00"
        },
        {
            date: "01 Jul 2023",
            referenceId: "#8343434343",
            to: "Super Mart Retail\nGroceries payment",
            transactionType: "Card payment",
            amount: "RM 250.50"
        },
        {
            date: "28 Jun 2023",
            referenceId: "#8343434344",
            to: "Online Subscription Service\nMonthly Fee",
            transactionType: "Auto Debit",
            amount: "RM 50.00"
        },
        {
            date: "15 Jun 2023",
            referenceId: "#8343434345",
            to: "Local Cafe\nCoffee & Snacks",
            transactionType: "QR Pay",
            amount: "RM 25.00"
        }
    ];
    return new Response(JSON.stringify(transactionHistory), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__10804858._.js.map