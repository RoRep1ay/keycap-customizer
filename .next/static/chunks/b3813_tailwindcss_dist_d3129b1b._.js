(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var yi = Object.defineProperty;
var xi = (t, r)=>{
    for(var i in r)yi(t, i, {
        get: r[i],
        enumerable: !0
    });
};
var wt = {};
xi(wt, {
    Features: ()=>Se,
    Polyfills: ()=>tt,
    __unstable__loadDesignSystem: ()=>co,
    compile: ()=>uo,
    compileAst: ()=>bi,
    default: ()=>We
});
var Wt = "4.1.8";
var Pe = 92, Be = 47, qe = 42, Ci = 34, $i = 39, Ni = 58, He = 59, ne = 10, Ge = 13, Oe = 32, Ye = 9, Bt = 123, bt = 125, At = 40, qt = 41, Vi = 91, Si = 93, Ht = 45, yt = 64, Ti = 33;
function ve(t, r) {
    let i = r?.from ? {
        file: r.from,
        code: t
    } : null;
    t[0] === "\uFEFF" && (t = " " + t.slice(1));
    let e = [], n = [], s = [], a = null, c = null, u = "", f = "", g = 0, d;
    for(let m = 0; m < t.length; m++){
        let w = t.charCodeAt(m);
        if (!(w === Ge && (d = t.charCodeAt(m + 1), d === ne))) if (w === Pe) u === "" && (g = m), u += t.slice(m, m + 2), m += 1;
        else if (w === Be && t.charCodeAt(m + 1) === qe) {
            let v = m;
            for(let y1 = m + 2; y1 < t.length; y1++)if (d = t.charCodeAt(y1), d === Pe) y1 += 1;
            else if (d === qe && t.charCodeAt(y1 + 1) === Be) {
                m = y1 + 1;
                break;
            }
            let x = t.slice(v, m + 1);
            if (x.charCodeAt(2) === Ti) {
                let y1 = Je(x.slice(2, -2));
                n.push(y1), i && (y1.src = [
                    i,
                    v,
                    m + 1
                ], y1.dst = [
                    i,
                    v,
                    m + 1
                ]);
            }
        } else if (w === $i || w === Ci) {
            let v = m;
            for(let x = m + 1; x < t.length; x++)if (d = t.charCodeAt(x), d === Pe) x += 1;
            else if (d === w) {
                m = x;
                break;
            } else {
                if (d === He && (t.charCodeAt(x + 1) === ne || t.charCodeAt(x + 1) === Ge && t.charCodeAt(x + 2) === ne)) throw new Error(`Unterminated string: ${t.slice(v, x + 1) + String.fromCharCode(w)}`);
                if (d === ne || d === Ge && t.charCodeAt(x + 1) === ne) throw new Error(`Unterminated string: ${t.slice(v, x) + String.fromCharCode(w)}`);
            }
            u += t.slice(v, m + 1);
        } else {
            if ((w === Oe || w === ne || w === Ye) && (d = t.charCodeAt(m + 1)) && (d === Oe || d === ne || d === Ye || d === Ge && (d = t.charCodeAt(m + 2)) && d == ne)) continue;
            if (w === ne) {
                if (u.length === 0) continue;
                d = u.charCodeAt(u.length - 1), d !== Oe && d !== ne && d !== Ye && (u += " ");
            } else if (w === Ht && t.charCodeAt(m + 1) === Ht && u.length === 0) {
                let v = "", x = m, y1 = -1;
                for(let b = m + 2; b < t.length; b++)if (d = t.charCodeAt(b), d === Pe) b += 1;
                else if (d === Be && t.charCodeAt(b + 1) === qe) {
                    for(let S = b + 2; S < t.length; S++)if (d = t.charCodeAt(S), d === Pe) S += 1;
                    else if (d === qe && t.charCodeAt(S + 1) === Be) {
                        b = S + 1;
                        break;
                    }
                } else if (y1 === -1 && d === Ni) y1 = u.length + b - x;
                else if (d === He && v.length === 0) {
                    u += t.slice(x, b), m = b;
                    break;
                } else if (d === At) v += ")";
                else if (d === Vi) v += "]";
                else if (d === Bt) v += "}";
                else if ((d === bt || t.length - 1 === b) && v.length === 0) {
                    m = b - 1, u += t.slice(x, b);
                    break;
                } else (d === qt || d === Si || d === bt) && v.length > 0 && t[b] === v[v.length - 1] && (v = v.slice(0, -1));
                let V = xt(u, y1);
                if (!V) throw new Error("Invalid custom property, expected a value");
                i && (V.src = [
                    i,
                    x,
                    m
                ], V.dst = [
                    i,
                    x,
                    m
                ]), a ? a.nodes.push(V) : e.push(V), u = "";
            } else if (w === He && u.charCodeAt(0) === yt) c = _e(u), i && (c.src = [
                i,
                g,
                m
            ], c.dst = [
                i,
                g,
                m
            ]), a ? a.nodes.push(c) : e.push(c), u = "", c = null;
            else if (w === He && f[f.length - 1] !== ")") {
                let v = xt(u);
                if (!v) throw u.length === 0 ? new Error("Unexpected semicolon") : new Error(`Invalid declaration: \`${u.trim()}\``);
                i && (v.src = [
                    i,
                    g,
                    m
                ], v.dst = [
                    i,
                    g,
                    m
                ]), a ? a.nodes.push(v) : e.push(v), u = "";
            } else if (w === Bt && f[f.length - 1] !== ")") f += "}", c = G(u.trim()), i && (c.src = [
                i,
                g,
                m
            ], c.dst = [
                i,
                g,
                m
            ]), a && a.nodes.push(c), s.push(a), a = c, u = "", c = null;
            else if (w === bt && f[f.length - 1] !== ")") {
                if (f === "") throw new Error("Missing opening {");
                if (f = f.slice(0, -1), u.length > 0) if (u.charCodeAt(0) === yt) c = _e(u), i && (c.src = [
                    i,
                    g,
                    m
                ], c.dst = [
                    i,
                    g,
                    m
                ]), a ? a.nodes.push(c) : e.push(c), u = "", c = null;
                else {
                    let x = u.indexOf(":");
                    if (a) {
                        let y1 = xt(u, x);
                        if (!y1) throw new Error(`Invalid declaration: \`${u.trim()}\``);
                        i && (y1.src = [
                            i,
                            g,
                            m
                        ], y1.dst = [
                            i,
                            g,
                            m
                        ]), a.nodes.push(y1);
                    }
                }
                let v = s.pop() ?? null;
                v === null && a && e.push(a), a = v, u = "", c = null;
            } else if (w === At) f += ")", u += "(";
            else if (w === qt) {
                if (f[f.length - 1] !== ")") throw new Error("Missing opening (");
                f = f.slice(0, -1), u += ")";
            } else {
                if (u.length === 0 && (w === Oe || w === ne || w === Ye)) continue;
                u === "" && (g = m), u += String.fromCharCode(w);
            }
        }
    }
    if (u.charCodeAt(0) === yt) {
        let m = _e(u);
        i && (m.src = [
            i,
            g,
            t.length
        ], m.dst = [
            i,
            g,
            t.length
        ]), e.push(m);
    }
    if (f.length > 0 && a) {
        if (a.kind === "rule") throw new Error(`Missing closing } at ${a.selector}`);
        if (a.kind === "at-rule") throw new Error(`Missing closing } at ${a.name} ${a.params}`);
    }
    return n.length > 0 ? n.concat(e) : e;
}
function _e(t, r = []) {
    let i = t, e = "";
    for(let n = 5; n < t.length; n++){
        let s = t.charCodeAt(n);
        if (s === Oe || s === At) {
            i = t.slice(0, n), e = t.slice(n);
            break;
        }
    }
    return F(i.trim(), e.trim(), r);
}
function xt(t, r = t.indexOf(":")) {
    if (r === -1) return null;
    let i = t.indexOf("!important", r + 1);
    return l(t.slice(0, r).trim(), t.slice(r + 1, i === -1 ? t.length : i).trim(), i !== -1);
}
function de(t) {
    if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
    let r = String(t), i = r.length, e = -1, n, s = "", a = r.charCodeAt(0);
    if (i === 1 && a === 45) return "\\" + r;
    for(; ++e < i;){
        if (n = r.charCodeAt(e), n === 0) {
            s += "\uFFFD";
            continue;
        }
        if (n >= 1 && n <= 31 || n === 127 || e === 0 && n >= 48 && n <= 57 || e === 1 && n >= 48 && n <= 57 && a === 45) {
            s += "\\" + n.toString(16) + " ";
            continue;
        }
        if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            s += r.charAt(e);
            continue;
        }
        s += "\\" + r.charAt(e);
    }
    return s;
}
function we(t) {
    return t.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (r)=>r.length > 2 ? String.fromCodePoint(Number.parseInt(r.slice(1).trim(), 16)) : r[1]);
}
var Yt = new Map([
    [
        "--font",
        [
            "--font-weight",
            "--font-size"
        ]
    ],
    [
        "--inset",
        [
            "--inset-shadow",
            "--inset-ring"
        ]
    ],
    [
        "--text",
        [
            "--text-color",
            "--text-decoration-color",
            "--text-decoration-thickness",
            "--text-indent",
            "--text-shadow",
            "--text-underline-offset"
        ]
    ]
]);
function Gt(t, r) {
    return (Yt.get(r) ?? []).some((i)=>t === i || t.startsWith(`${i}-`));
}
var Qe = class {
    constructor(r = new Map, i = new Set([])){
        this.values = r;
        this.keyframes = i;
    }
    prefix = null;
    get size() {
        return this.values.size;
    }
    add(r, i, e = 0, n) {
        if (r.endsWith("-*")) {
            if (i !== "initial") throw new Error(`Invalid theme value \`${i}\` for namespace \`${r}\``);
            r === "--*" ? this.values.clear() : this.clearNamespace(r.slice(0, -2), 0);
        }
        if (e & 4) {
            let s = this.values.get(r);
            if (s && !(s.options & 4)) return;
        }
        i === "initial" ? this.values.delete(r) : this.values.set(r, {
            value: i,
            options: e,
            src: n
        });
    }
    keysInNamespaces(r) {
        let i = [];
        for (let e of r){
            let n = `${e}-`;
            for (let s of this.values.keys())s.startsWith(n) && s.indexOf("--", 2) === -1 && (Gt(s, e) || i.push(s.slice(n.length)));
        }
        return i;
    }
    get(r) {
        for (let i of r){
            let e = this.values.get(i);
            if (e) return e.value;
        }
        return null;
    }
    hasDefault(r) {
        return (this.getOptions(r) & 4) === 4;
    }
    getOptions(r) {
        return r = we(this.#r(r)), this.values.get(r)?.options ?? 0;
    }
    entries() {
        return this.prefix ? Array.from(this.values, (r)=>(r[0] = this.prefixKey(r[0]), r)) : this.values.entries();
    }
    prefixKey(r) {
        return this.prefix ? `--${this.prefix}-${r.slice(2)}` : r;
    }
    #r(r) {
        return this.prefix ? `--${r.slice(3 + this.prefix.length)}` : r;
    }
    clearNamespace(r, i) {
        let e = Yt.get(r) ?? [];
        e: for (let n of this.values.keys())if (n.startsWith(r)) {
            if (i !== 0 && (this.getOptions(n) & i) !== i) continue;
            for (let s of e)if (n.startsWith(s)) continue e;
            this.values.delete(n);
        }
    }
    #e(r, i) {
        for (let e of i){
            let n = r !== null ? `${e}-${r}` : e;
            if (!this.values.has(n)) if (r !== null && r.includes(".")) {
                if (n = `${e}-${r.replaceAll(".", "_")}`, !this.values.has(n)) continue;
            } else continue;
            if (!Gt(n, e)) return n;
        }
        return null;
    }
    #t(r) {
        let i = this.values.get(r);
        if (!i) return null;
        let e = null;
        return i.options & 2 && (e = i.value), `var(${de(this.prefixKey(r))}${e ? `, ${e}` : ""})`;
    }
    markUsedVariable(r) {
        let i = we(this.#r(r)), e = this.values.get(i);
        if (!e) return !1;
        let n = e.options & 16;
        return e.options |= 16, !n;
    }
    resolve(r, i, e = 0) {
        let n = this.#e(r, i);
        if (!n) return null;
        let s = this.values.get(n);
        return (e | s.options) & 1 ? s.value : this.#t(n);
    }
    resolveValue(r, i) {
        let e = this.#e(r, i);
        return e ? this.values.get(e).value : null;
    }
    resolveWith(r, i, e = []) {
        let n = this.#e(r, i);
        if (!n) return null;
        let s = {};
        for (let c of e){
            let u = `${n}${c}`, f = this.values.get(u);
            f && (f.options & 1 ? s[c] = f.value : s[c] = this.#t(u));
        }
        let a = this.values.get(n);
        return a.options & 1 ? [
            a.value,
            s
        ] : [
            this.#t(n),
            s
        ];
    }
    namespace(r) {
        let i = new Map, e = `${r}-`;
        for (let [n, s] of this.values)n === r ? i.set(null, s.value) : n.startsWith(`${e}-`) ? i.set(n.slice(r.length), s.value) : n.startsWith(e) && i.set(n.slice(e.length), s.value);
        return i;
    }
    addKeyframes(r) {
        this.keyframes.add(r);
    }
    getKeyframes() {
        return Array.from(this.keyframes);
    }
};
var B = class extends Map {
    constructor(i){
        super();
        this.factory = i;
    }
    get(i) {
        let e = super.get(i);
        return e === void 0 && (e = this.factory(i, this), this.set(i, e)), e;
    }
};
function $t(t) {
    return {
        kind: "word",
        value: t
    };
}
function Ei(t, r) {
    return {
        kind: "function",
        value: t,
        nodes: r
    };
}
function Ri(t) {
    return {
        kind: "separator",
        value: t
    };
}
function ee(t, r, i = null) {
    for(let e = 0; e < t.length; e++){
        let n = t[e], s = !1, a = 0, c = r(n, {
            parent: i,
            replaceWith (u) {
                s || (s = !0, Array.isArray(u) ? u.length === 0 ? (t.splice(e, 1), a = 0) : u.length === 1 ? (t[e] = u[0], a = 1) : (t.splice(e, 1, ...u), a = u.length) : t[e] = u);
            }
        }) ?? 0;
        if (s) {
            c === 0 ? e-- : e += a - 1;
            continue;
        }
        if (c === 2) return 2;
        if (c !== 1 && n.kind === "function" && ee(n.nodes, r, n) === 2) return 2;
    }
}
function J(t) {
    let r = "";
    for (let i of t)switch(i.kind){
        case "word":
        case "separator":
            {
                r += i.value;
                break;
            }
        case "function":
            r += i.value + "(" + J(i.nodes) + ")";
    }
    return r;
}
var Jt = 92, Pi = 41, Qt = 58, Zt = 44, Oi = 34, Xt = 61, er = 62, tr = 60, rr = 10, _i = 40, Ki = 39, ir = 47, nr = 32, or = 9;
function q(t) {
    t = t.replaceAll(`\r
`, `
`);
    let r = [], i = [], e = null, n = "", s;
    for(let a = 0; a < t.length; a++){
        let c = t.charCodeAt(a);
        switch(c){
            case Jt:
                {
                    n += t[a] + t[a + 1], a++;
                    break;
                }
            case Qt:
            case Zt:
            case Xt:
            case er:
            case tr:
            case rr:
            case ir:
            case nr:
            case or:
                {
                    if (n.length > 0) {
                        let d = $t(n);
                        e ? e.nodes.push(d) : r.push(d), n = "";
                    }
                    let u = a, f = a + 1;
                    for(; f < t.length && (s = t.charCodeAt(f), !(s !== Qt && s !== Zt && s !== Xt && s !== er && s !== tr && s !== rr && s !== ir && s !== nr && s !== or)); f++);
                    a = f - 1;
                    let g = Ri(t.slice(u, f));
                    e ? e.nodes.push(g) : r.push(g);
                    break;
                }
            case Ki:
            case Oi:
                {
                    let u = a;
                    for(let f = a + 1; f < t.length; f++)if (s = t.charCodeAt(f), s === Jt) f += 1;
                    else if (s === c) {
                        a = f;
                        break;
                    }
                    n += t.slice(u, a + 1);
                    break;
                }
            case _i:
                {
                    let u = Ei(n, []);
                    n = "", e ? e.nodes.push(u) : r.push(u), i.push(u), e = u;
                    break;
                }
            case Pi:
                {
                    let u = i.pop();
                    if (n.length > 0) {
                        let f = $t(n);
                        u?.nodes.push(f), n = "";
                    }
                    i.length > 0 ? e = i[i.length - 1] : e = null;
                    break;
                }
            default:
                n += String.fromCharCode(c);
        }
    }
    return n.length > 0 && r.push($t(n)), r;
}
function Ze(t) {
    let r = [];
    return ee(q(t), (i)=>{
        if (!(i.kind !== "function" || i.value !== "var")) return ee(i.nodes, (e)=>{
            e.kind !== "word" || e.value[0] !== "-" || e.value[1] !== "-" || r.push(e.value);
        }), 1;
    }), r;
}
var Ui = 64;
function M(t, r = []) {
    return {
        kind: "rule",
        selector: t,
        nodes: r
    };
}
function F(t, r = "", i = []) {
    return {
        kind: "at-rule",
        name: t,
        params: r,
        nodes: i
    };
}
function G(t, r = []) {
    return t.charCodeAt(0) === Ui ? _e(t, r) : M(t, r);
}
function l(t, r, i = !1) {
    return {
        kind: "declaration",
        property: t,
        value: r,
        important: i
    };
}
function Je(t) {
    return {
        kind: "comment",
        value: t
    };
}
function se(t, r) {
    return {
        kind: "context",
        context: t,
        nodes: r
    };
}
function I(t) {
    return {
        kind: "at-root",
        nodes: t
    };
}
function z(t, r, i = [], e = {}) {
    for(let n = 0; n < t.length; n++){
        let s = t[n], a = i[i.length - 1] ?? null;
        if (s.kind === "context") {
            if (z(s.nodes, r, i, {
                ...e,
                ...s.context
            }) === 2) return 2;
            continue;
        }
        i.push(s);
        let c = !1, u = 0, f = r(s, {
            parent: a,
            context: e,
            path: i,
            replaceWith (g) {
                c || (c = !0, Array.isArray(g) ? g.length === 0 ? (t.splice(n, 1), u = 0) : g.length === 1 ? (t[n] = g[0], u = 1) : (t.splice(n, 1, ...g), u = g.length) : (t[n] = g, u = 1));
            }
        }) ?? 0;
        if (i.pop(), c) {
            f === 0 ? n-- : n += u - 1;
            continue;
        }
        if (f === 2) return 2;
        if (f !== 1 && "nodes" in s) {
            i.push(s);
            let g = z(s.nodes, r, i, e);
            if (i.pop(), g === 2) return 2;
        }
    }
}
function Xe(t, r, i = [], e = {}) {
    for(let n = 0; n < t.length; n++){
        let s = t[n], a = i[i.length - 1] ?? null;
        if (s.kind === "rule" || s.kind === "at-rule") i.push(s), Xe(s.nodes, r, i, e), i.pop();
        else if (s.kind === "context") {
            Xe(s.nodes, r, i, {
                ...e,
                ...s.context
            });
            continue;
        }
        i.push(s), r(s, {
            parent: a,
            context: e,
            path: i,
            replaceWith (c) {
                Array.isArray(c) ? c.length === 0 ? t.splice(n, 1) : c.length === 1 ? t[n] = c[0] : t.splice(n, 1, ...c) : t[n] = c, n += c.length - 1;
            }
        }), i.pop();
    }
}
function be(t, r, i = 3) {
    let e = [], n = new Set, s = new B(()=>new Set), a = new B(()=>new Set), c = new Set, u = new Set, f = [], g = [], d = new B(()=>new Set);
    function m(v, x, y1 = {}, V = 0) {
        if (v.kind === "declaration") {
            if (v.property === "--tw-sort" || v.value === void 0 || v.value === null) return;
            if (y1.theme && v.property[0] === "-" && v.property[1] === "-") {
                if (v.value === "initial") {
                    v.value = void 0;
                    return;
                }
                y1.keyframes || s.get(x).add(v);
            }
            if (v.value.includes("var(")) if (y1.theme && v.property[0] === "-" && v.property[1] === "-") for (let b of Ze(v.value))d.get(b).add(v.property);
            else r.trackUsedVariables(v.value);
            if (v.property === "animation") for (let b of lr(v.value))u.add(b);
            i & 2 && v.value.includes("color-mix(") && a.get(x).add(v), x.push(v);
        } else if (v.kind === "rule") if (v.selector === "&") for (let b of v.nodes){
            let S = [];
            m(b, S, y1, V + 1), S.length > 0 && x.push(...S);
        }
        else {
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, y1, V + 1);
            b.nodes.length > 0 && x.push(b);
        }
        else if (v.kind === "at-rule" && v.name === "@property" && V === 0) {
            if (n.has(v.params)) return;
            if (i & 1) {
                let S = v.params, R = null, j = !1;
                for (let D of v.nodes)D.kind === "declaration" && (D.property === "initial-value" ? R = D.value : D.property === "inherits" && (j = D.value === "true"));
                let P = l(S, R ?? "initial");
                P.src = v.src, j ? f.push(P) : g.push(P);
            }
            n.add(v.params);
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, y1, V + 1);
            x.push(b);
        } else if (v.kind === "at-rule") {
            v.name === "@keyframes" && (y1 = {
                ...y1,
                keyframes: !0
            });
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, y1, V + 1);
            v.name === "@keyframes" && y1.theme && c.add(b), (b.nodes.length > 0 || b.name === "@layer" || b.name === "@charset" || b.name === "@custom-media" || b.name === "@namespace" || b.name === "@import") && x.push(b);
        } else if (v.kind === "at-root") for (let b of v.nodes){
            let S = [];
            m(b, S, y1, 0);
            for (let R of S)e.push(R);
        }
        else if (v.kind === "context") {
            if (v.context.reference) return;
            for (let b of v.nodes)m(b, x, {
                ...y1,
                ...v.context
            }, V);
        } else v.kind === "comment" && x.push(v);
    }
    let w = [];
    for (let v of t)m(v, w, {}, 0);
    e: for (let [v, x] of s)for (let y1 of x){
        if (ar(y1.property, r.theme, d)) {
            if (y1.property.startsWith(r.theme.prefixKey("--animate-"))) for (let S of lr(y1.value))u.add(S);
            continue;
        }
        let b = v.indexOf(y1);
        if (v.splice(b, 1), v.length === 0) {
            let S = ji(w, (R)=>R.kind === "rule" && R.nodes === v);
            if (!S || S.length === 0) continue e;
            S.unshift({
                kind: "at-root",
                nodes: w
            });
            do {
                let R = S.pop();
                if (!R) break;
                let j = S[S.length - 1];
                if (!j || j.kind !== "at-root" && j.kind !== "at-rule") break;
                let P = j.nodes.indexOf(R);
                if (P === -1) break;
                j.nodes.splice(P, 1);
            }while (!0)
            continue e;
        }
    }
    for (let v of c)if (!u.has(v.params)) {
        let x = e.indexOf(v);
        e.splice(x, 1);
    }
    if (w = w.concat(e), i & 2) for (let [v, x] of a)for (let y1 of x){
        let V = v.indexOf(y1);
        if (V === -1 || y1.value == null) continue;
        let b = q(y1.value), S = !1;
        if (ee(b, (P, { replaceWith: D })=>{
            if (P.kind !== "function" || P.value !== "color-mix") return;
            let _ = !1, H = !1;
            if (ee(P.nodes, (L, { replaceWith: W })=>{
                if (L.kind == "word" && L.value.toLowerCase() === "currentcolor") {
                    H = !0, S = !0;
                    return;
                }
                let Q = L, ie = null, o = new Set;
                do {
                    if (Q.kind !== "function" || Q.value !== "var") return;
                    let p = Q.nodes[0];
                    if (!p || p.kind !== "word") return;
                    let h = p.value;
                    if (o.has(h)) {
                        _ = !0;
                        return;
                    }
                    if (o.add(h), S = !0, ie = r.theme.resolveValue(null, [
                        p.value
                    ]), !ie) {
                        _ = !0;
                        return;
                    }
                    if (ie.toLowerCase() === "currentcolor") {
                        H = !0;
                        return;
                    }
                    ie.startsWith("var(") ? Q = q(ie)[0] : Q = null;
                }while (Q)
                W({
                    kind: "word",
                    value: ie
                });
            }), _ || H) {
                let L = P.nodes.findIndex((Q)=>Q.kind === "separator" && Q.value.trim().includes(","));
                if (L === -1) return;
                let W = P.nodes.length > L ? P.nodes[L + 1] : null;
                if (!W) return;
                D(W);
            } else if (S) {
                let L = P.nodes[2];
                L.kind === "word" && (L.value === "oklab" || L.value === "oklch" || L.value === "lab" || L.value === "lch") && (L.value = "srgb");
            }
        }), !S) continue;
        let R = {
            ...y1,
            value: J(b)
        }, j = G("@supports (color: color-mix(in lab, red, red))", [
            y1
        ]);
        j.src = y1.src, v.splice(V, 1, R, j);
    }
    if (i & 1) {
        let v = [];
        if (f.length > 0) {
            let x = G(":root, :host", f);
            x.src = f[0].src, v.push(x);
        }
        if (g.length > 0) {
            let x = G("*, ::before, ::after, ::backdrop", g);
            x.src = g[0].src, v.push(x);
        }
        if (v.length > 0) {
            let x = w.findIndex((b)=>!(b.kind === "comment" || b.kind === "at-rule" && (b.name === "@charset" || b.name === "@import"))), y1 = F("@layer", "properties", []);
            y1.src = v[0].src, w.splice(x < 0 ? w.length : x, 0, y1);
            let V = G("@layer properties", [
                F("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", v)
            ]);
            V.src = v[0].src, V.nodes[0].src = v[0].src, w.push(V);
        }
    }
    return w;
}
function oe(t, r) {
    let i = 0, e = {
        file: null,
        code: ""
    };
    function n(a, c = 0) {
        let u = "", f = "  ".repeat(c);
        if (a.kind === "declaration") {
            if (u += `${f}${a.property}: ${a.value}${a.important ? " !important" : ""};
`, r) {
                i += f.length;
                let g = i;
                i += a.property.length, i += 2, i += a.value?.length ?? 0, a.important && (i += 11);
                let d = i;
                i += 2, a.dst = [
                    e,
                    g,
                    d
                ];
            }
        } else if (a.kind === "rule") {
            if (u += `${f}${a.selector} {
`, r) {
                i += f.length;
                let g = i;
                i += a.selector.length, i += 1;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 2;
            }
            for (let g of a.nodes)u += n(g, c + 1);
            u += `${f}}
`, r && (i += f.length, i += 2);
        } else if (a.kind === "at-rule") {
            if (a.nodes.length === 0) {
                let g = `${f}${a.name} ${a.params};
`;
                if (r) {
                    i += f.length;
                    let d = i;
                    i += a.name.length, i += 1, i += a.params.length;
                    let m = i;
                    i += 2, a.dst = [
                        e,
                        d,
                        m
                    ];
                }
                return g;
            }
            if (u += `${f}${a.name}${a.params ? ` ${a.params} ` : " "}{
`, r) {
                i += f.length;
                let g = i;
                i += a.name.length, a.params && (i += 1, i += a.params.length), i += 1;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 2;
            }
            for (let g of a.nodes)u += n(g, c + 1);
            u += `${f}}
`, r && (i += f.length, i += 2);
        } else if (a.kind === "comment") {
            if (u += `${f}/*${a.value}*/
`, r) {
                i += f.length;
                let g = i;
                i += 2 + a.value.length + 2;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 1;
            }
        } else if (a.kind === "context" || a.kind === "at-root") return "";
        return u;
    }
    let s = "";
    for (let a of t)s += n(a, 0);
    return e.code = s, s;
}
function ji(t, r) {
    let i = [];
    return z(t, (e, { path: n })=>{
        if (r(e)) return i = [
            ...n
        ], 2;
    }), i;
}
function ar(t, r, i, e = new Set) {
    if (e.has(t) || (e.add(t), r.getOptions(t) & 24)) return !0;
    {
        let s = i.get(t) ?? [];
        for (let a of s)if (ar(a, r, i, e)) return !0;
    }
    return !1;
}
function lr(t) {
    return t.split(/[\s,]+/);
}
var Nt = [
    "calc",
    "min",
    "max",
    "clamp",
    "mod",
    "rem",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "atan2",
    "pow",
    "sqrt",
    "hypot",
    "log",
    "exp",
    "round"
], rt = [
    "anchor-size"
], sr = new RegExp(`(${rt.join("|")})\\(`, "g");
function Ke(t) {
    return t.indexOf("(") !== -1 && Nt.some((r)=>t.includes(`${r}(`));
}
function ur(t) {
    if (!Nt.some((n)=>t.includes(n))) return t;
    let r = !1;
    rt.some((n)=>t.includes(n)) && (sr.lastIndex = 0, t = t.replace(sr, (n, s)=>(r = !0, `$${rt.indexOf(s)}$(`)));
    let i = "", e = [];
    for(let n = 0; n < t.length; n++){
        let s = t[n];
        if (s === "(") {
            i += s;
            let a = n;
            for(let u = n - 1; u >= 0; u--){
                let f = t.charCodeAt(u);
                if (f >= 48 && f <= 57) a = u;
                else if (f >= 97 && f <= 122) a = u;
                else break;
            }
            let c = t.slice(a, n);
            if (Nt.includes(c)) {
                e.unshift(!0);
                continue;
            } else if (e[0] && c === "") {
                e.unshift(!0);
                continue;
            }
            e.unshift(!1);
            continue;
        } else if (s === ")") i += s, e.shift();
        else if (s === "," && e[0]) {
            i += ", ";
            continue;
        } else {
            if (s === " " && e[0] && i[i.length - 1] === " ") continue;
            if ((s === "+" || s === "*" || s === "/" || s === "-") && e[0]) {
                let a = i.trimEnd(), c = a[a.length - 1];
                if (c === "+" || c === "*" || c === "/" || c === "-") {
                    i += s;
                    continue;
                } else if (c === "(" || c === ",") {
                    i += s;
                    continue;
                } else t[n - 1] === " " ? i += `${s} ` : i += ` ${s} `;
            } else if (e[0] && t.startsWith("to-zero", n)) {
                let a = n;
                n += 7, i += t.slice(a, n + 1);
            } else i += s;
        }
    }
    return r ? i.replace(/\$(\d+)\$/g, (n, s)=>rt[s] ?? n) : i;
}
function me(t) {
    if (t.indexOf("(") === -1) return $e(t);
    let r = q(t);
    return Vt(r), t = J(r), t = ur(t), t;
}
function $e(t, r = !1) {
    let i = "";
    for(let e = 0; e < t.length; e++){
        let n = t[e];
        n === "\\" && t[e + 1] === "_" ? (i += "_", e += 1) : n === "_" && !r ? i += " " : i += n;
    }
    return i;
}
function Vt(t) {
    for (let r of t)switch(r.kind){
        case "function":
            {
                if (r.value === "url" || r.value.endsWith("_url")) {
                    r.value = $e(r.value);
                    break;
                }
                if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                    r.value = $e(r.value);
                    for(let i = 0; i < r.nodes.length; i++){
                        if (i == 0 && r.nodes[i].kind === "word") {
                            r.nodes[i].value = $e(r.nodes[i].value, !0);
                            continue;
                        }
                        Vt([
                            r.nodes[i]
                        ]);
                    }
                    break;
                }
                r.value = $e(r.value), Vt(r.nodes);
                break;
            }
        case "separator":
        case "word":
            {
                r.value = $e(r.value);
                break;
            }
        default:
            Li(r);
    }
}
function Li(t) {
    throw new Error(`Unexpected value: ${t}`);
}
var St = new Uint8Array(256);
function ce(t) {
    let r = 0, i = t.length;
    for(let e = 0; e < i; e++){
        let n = t.charCodeAt(e);
        switch(n){
            case 92:
                e += 1;
                break;
            case 39:
            case 34:
                for(; ++e < i;){
                    let s = t.charCodeAt(e);
                    if (s === 92) {
                        e += 1;
                        continue;
                    }
                    if (s === n) break;
                }
                break;
            case 40:
                St[r] = 41, r++;
                break;
            case 91:
                St[r] = 93, r++;
                break;
            case 123:
                break;
            case 93:
            case 125:
            case 41:
                if (r === 0) return !1;
                r > 0 && n === St[r - 1] && r--;
                break;
            case 59:
                if (r === 0) return !1;
                break;
        }
    }
    return !0;
}
var it = new Uint8Array(256);
function K(t, r) {
    let i = 0, e = [], n = 0, s = t.length, a = r.charCodeAt(0);
    for(let c = 0; c < s; c++){
        let u = t.charCodeAt(c);
        if (i === 0 && u === a) {
            e.push(t.slice(n, c)), n = c + 1;
            continue;
        }
        switch(u){
            case 92:
                c += 1;
                break;
            case 39:
            case 34:
                for(; ++c < s;){
                    let f = t.charCodeAt(c);
                    if (f === 92) {
                        c += 1;
                        continue;
                    }
                    if (f === u) break;
                }
                break;
            case 40:
                it[i] = 41, i++;
                break;
            case 91:
                it[i] = 93, i++;
                break;
            case 123:
                it[i] = 125, i++;
                break;
            case 93:
            case 125:
            case 41:
                i > 0 && u === it[i - 1] && i--;
                break;
        }
    }
    return e.push(t.slice(n)), e;
}
var zi = 58, cr = 45, fr = 97, pr = 122;
function* dr(t, r) {
    let i = K(t, ":");
    if (r.theme.prefix) {
        if (i.length === 1 || i[0] !== r.theme.prefix) return null;
        i.shift();
    }
    let e = i.pop(), n = [];
    for(let d = i.length - 1; d >= 0; --d){
        let m = r.parseVariant(i[d]);
        if (m === null) return;
        n.push(m);
    }
    let s = !1;
    e[e.length - 1] === "!" ? (s = !0, e = e.slice(0, -1)) : e[0] === "!" && (s = !0, e = e.slice(1)), r.utilities.has(e, "static") && !e.includes("[") && (yield {
        kind: "static",
        root: e,
        variants: n,
        important: s,
        raw: t
    });
    let [a, c = null, u] = K(e, "/");
    if (u) return;
    let f = c === null ? null : Tt(c);
    if (c !== null && f === null) return;
    if (a[0] === "[") {
        if (a[a.length - 1] !== "]") return;
        let d = a.charCodeAt(1);
        if (d !== cr && !(d >= fr && d <= pr)) return;
        a = a.slice(1, -1);
        let m = a.indexOf(":");
        if (m === -1 || m === 0 || m === a.length - 1) return;
        let w = a.slice(0, m), v = me(a.slice(m + 1));
        if (!ce(v)) return;
        yield {
            kind: "arbitrary",
            property: w,
            value: v,
            modifier: f,
            variants: n,
            important: s,
            raw: t
        };
        return;
    }
    let g;
    if (a[a.length - 1] === "]") {
        let d = a.indexOf("-[");
        if (d === -1) return;
        let m = a.slice(0, d);
        if (!r.utilities.has(m, "functional")) return;
        let w = a.slice(d + 1);
        g = [
            [
                m,
                w
            ]
        ];
    } else if (a[a.length - 1] === ")") {
        let d = a.indexOf("-(");
        if (d === -1) return;
        let m = a.slice(0, d);
        if (!r.utilities.has(m, "functional")) return;
        let w = a.slice(d + 2, -1), v = K(w, ":"), x = null;
        if (v.length === 2 && (x = v[0], w = v[1]), w[0] !== "-" || w[1] !== "-" || !ce(w)) return;
        g = [
            [
                m,
                x === null ? `[var(${w})]` : `[${x}:var(${w})]`
            ]
        ];
    } else g = gr(a, (d)=>r.utilities.has(d, "functional"));
    for (let [d, m] of g){
        let w = {
            kind: "functional",
            root: d,
            modifier: f,
            value: null,
            variants: n,
            important: s,
            raw: t
        };
        if (m === null) {
            yield w;
            continue;
        }
        {
            let v = m.indexOf("[");
            if (v !== -1) {
                if (m[m.length - 1] !== "]") return;
                let y1 = me(m.slice(v + 1, -1));
                if (!ce(y1)) continue;
                let V = "";
                for(let b = 0; b < y1.length; b++){
                    let S = y1.charCodeAt(b);
                    if (S === zi) {
                        V = y1.slice(0, b), y1 = y1.slice(b + 1);
                        break;
                    }
                    if (!(S === cr || S >= fr && S <= pr)) break;
                }
                if (y1.length === 0 || y1.trim().length === 0) continue;
                w.value = {
                    kind: "arbitrary",
                    dataType: V || null,
                    value: y1
                };
            } else {
                let y1 = c === null || w.modifier?.kind === "arbitrary" ? null : `${m}/${c}`;
                w.value = {
                    kind: "named",
                    value: m,
                    fraction: y1
                };
            }
        }
        yield w;
    }
}
function Tt(t) {
    if (t[0] === "[" && t[t.length - 1] === "]") {
        let r = me(t.slice(1, -1));
        return !ce(r) || r.length === 0 || r.trim().length === 0 ? null : {
            kind: "arbitrary",
            value: r
        };
    }
    return t[0] === "(" && t[t.length - 1] === ")" ? (t = t.slice(1, -1), t[0] !== "-" || t[1] !== "-" || !ce(t) ? null : (t = `var(${t})`, {
        kind: "arbitrary",
        value: me(t)
    })) : {
        kind: "named",
        value: t
    };
}
function mr(t, r) {
    if (t[0] === "[" && t[t.length - 1] === "]") {
        if (t[1] === "@" && t.includes("&")) return null;
        let i = me(t.slice(1, -1));
        if (!ce(i) || i.length === 0 || i.trim().length === 0) return null;
        let e = i[0] === ">" || i[0] === "+" || i[0] === "~";
        return !e && i[0] !== "@" && !i.includes("&") && (i = `&:is(${i})`), {
            kind: "arbitrary",
            selector: i,
            relative: e
        };
    }
    {
        let [i, e = null, n] = K(t, "/");
        if (n) return null;
        let s = gr(i, (a)=>r.variants.has(a));
        for (let [a, c] of s)switch(r.variants.kind(a)){
            case "static":
                return c !== null || e !== null ? null : {
                    kind: "static",
                    root: a
                };
            case "functional":
                {
                    let u = e === null ? null : Tt(e);
                    if (e !== null && u === null) return null;
                    if (c === null) return {
                        kind: "functional",
                        root: a,
                        modifier: u,
                        value: null
                    };
                    if (c[c.length - 1] === "]") {
                        if (c[0] !== "[") continue;
                        let f = me(c.slice(1, -1));
                        return !ce(f) || f.length === 0 || f.trim().length === 0 ? null : {
                            kind: "functional",
                            root: a,
                            modifier: u,
                            value: {
                                kind: "arbitrary",
                                value: f
                            }
                        };
                    }
                    if (c[c.length - 1] === ")") {
                        if (c[0] !== "(") continue;
                        let f = me(c.slice(1, -1));
                        return !ce(f) || f.length === 0 || f.trim().length === 0 || f[0] !== "-" || f[1] !== "-" ? null : {
                            kind: "functional",
                            root: a,
                            modifier: u,
                            value: {
                                kind: "arbitrary",
                                value: `var(${f})`
                            }
                        };
                    }
                    return {
                        kind: "functional",
                        root: a,
                        modifier: u,
                        value: {
                            kind: "named",
                            value: c
                        }
                    };
                }
            case "compound":
                {
                    if (c === null) return null;
                    let u = r.parseVariant(c);
                    if (u === null || !r.variants.compoundsWith(a, u)) return null;
                    let f = e === null ? null : Tt(e);
                    return e !== null && f === null ? null : {
                        kind: "compound",
                        root: a,
                        modifier: f,
                        variant: u
                    };
                }
        }
    }
    return null;
}
function* gr(t, r) {
    r(t) && (yield [
        t,
        null
    ]);
    let i = t.lastIndexOf("-");
    for(; i > 0;){
        let e = t.slice(0, i);
        if (r(e)) {
            let n = [
                e,
                t.slice(i + 1)
            ];
            if (n[1] === "") break;
            yield n;
        }
        i = t.lastIndexOf("-", i - 1);
    }
    t[0] === "@" && r("@") && (yield [
        "@",
        t.slice(1)
    ]);
}
function hr(t, r) {
    let i = [];
    for (let n of r.variants)i.unshift(nt(n));
    t.theme.prefix && i.unshift(t.theme.prefix);
    let e = "";
    if (r.kind === "static" && (e += r.root), r.kind === "functional" && (e += r.root, r.value)) if (r.value.kind === "arbitrary") {
        if (r.value !== null) {
            let n = Rt(r.value.value), s = n ? r.value.value.slice(4, -1) : r.value.value, [a, c] = n ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ];
            r.value.dataType ? e += `-${a}${r.value.dataType}:${Ne(s)}${c}` : e += `-${a}${Ne(s)}${c}`;
        }
    } else r.value.kind === "named" && (e += `-${r.value.value}`);
    return r.kind === "arbitrary" && (e += `[${r.property}:${Ne(r.value)}]`), (r.kind === "arbitrary" || r.kind === "functional") && (e += vr(r.modifier)), r.important && (e += "!"), i.push(e), i.join(":");
}
function vr(t) {
    if (t === null) return "";
    let r = Rt(t.value), i = r ? t.value.slice(4, -1) : t.value, [e, n] = r ? [
        "(",
        ")"
    ] : [
        "[",
        "]"
    ];
    return t.kind === "arbitrary" ? `/${e}${Ne(i)}${n}` : t.kind === "named" ? `/${t.value}` : "";
}
function nt(t) {
    if (t.kind === "static") return t.root;
    if (t.kind === "arbitrary") return `[${Ne(Mi(t.selector))}]`;
    let r = "";
    if (t.kind === "functional") {
        r += t.root;
        let i = t.root !== "@";
        if (t.value) if (t.value.kind === "arbitrary") {
            let e = Rt(t.value.value), n = e ? t.value.value.slice(4, -1) : t.value.value, [s, a] = e ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ];
            r += `${i ? "-" : ""}${s}${Ne(n)}${a}`;
        } else t.value.kind === "named" && (r += `${i ? "-" : ""}${t.value.value}`);
    }
    return t.kind === "compound" && (r += t.root, r += "-", r += nt(t.variant)), (t.kind === "functional" || t.kind === "compound") && (r += vr(t.modifier)), r;
}
var Ii = new B((t)=>{
    let r = q(t), i = new Set;
    return ee(r, (e, { parent: n })=>{
        let s = n === null ? r : n.nodes ?? [];
        if (e.kind === "word" && (e.value === "+" || e.value === "-" || e.value === "*" || e.value === "/")) {
            let a = s.indexOf(e) ?? -1;
            if (a === -1) return;
            let c = s[a - 1];
            if (c?.kind !== "separator" || c.value !== " ") return;
            let u = s[a + 1];
            if (u?.kind !== "separator" || u.value !== " ") return;
            i.add(c), i.add(u);
        } else e.kind === "separator" && e.value.trim() === "/" ? e.value = "/" : e.kind === "separator" && e.value.length > 0 && e.value.trim() === "" ? (s[0] === e || s[s.length - 1] === e) && i.add(e) : e.kind === "separator" && e.value.trim() === "," && (e.value = ",");
    }), i.size > 0 && ee(r, (e, { replaceWith: n })=>{
        i.has(e) && (i.delete(e), n([]));
    }), Et(r), J(r);
});
function Ne(t) {
    return Ii.get(t);
}
var Fi = new B((t)=>{
    let r = q(t);
    return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? J(r[2].nodes) : t;
});
function Mi(t) {
    return Fi.get(t);
}
function Et(t) {
    for (let r of t)switch(r.kind){
        case "function":
            {
                if (r.value === "url" || r.value.endsWith("_url")) {
                    r.value = De(r.value);
                    break;
                }
                if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
                    r.value = De(r.value);
                    for(let i = 0; i < r.nodes.length; i++)Et([
                        r.nodes[i]
                    ]);
                    break;
                }
                r.value = De(r.value), Et(r.nodes);
                break;
            }
        case "separator":
            r.value = De(r.value);
            break;
        case "word":
            {
                (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = De(r.value));
                break;
            }
        default:
            Bi(r);
    }
}
var Wi = new B((t)=>{
    let r = q(t);
    return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
});
function Rt(t) {
    return Wi.get(t);
}
function Bi(t) {
    throw new Error(`Unexpected value: ${t}`);
}
function De(t) {
    return t.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
}
function ye(t, r, i) {
    if (t === r) return 0;
    let e = t.indexOf("("), n = r.indexOf("("), s = e === -1 ? t.replace(/[\d.]+/g, "") : t.slice(0, e), a = n === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, n), c = (s === a ? 0 : s < a ? -1 : 1) || (i === "asc" ? parseInt(t) - parseInt(r) : parseInt(r) - parseInt(t));
    return Number.isNaN(c) ? t < r ? -1 : 1 : c;
}
var qi = new Set([
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
    "transparent",
    "currentcolor",
    "canvas",
    "canvastext",
    "linktext",
    "visitedtext",
    "activetext",
    "buttonface",
    "buttontext",
    "buttonborder",
    "field",
    "fieldtext",
    "highlight",
    "highlighttext",
    "selecteditem",
    "selecteditemtext",
    "mark",
    "marktext",
    "graytext",
    "accentcolor",
    "accentcolortext"
]), Hi = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
function wr(t) {
    return t.charCodeAt(0) === 35 || Hi.test(t) || qi.has(t.toLowerCase());
}
var Gi = {
    color: wr,
    length: ot,
    percentage: Pt,
    ratio: sn,
    number: br,
    integer: E,
    url: kr,
    position: fn,
    "bg-size": pn,
    "line-width": Ji,
    image: Xi,
    "family-name": tn,
    "generic-name": en,
    "absolute-size": rn,
    "relative-size": nn,
    angle: gn,
    vector: vn
};
function Y(t, r) {
    if (t.startsWith("var(")) return null;
    for (let i of r)if (Gi[i]?.(t)) return i;
    return null;
}
var Yi = /^url\(.*\)$/;
function kr(t) {
    return Yi.test(t);
}
function Ji(t) {
    return K(t, " ").every((r)=>ot(r) || br(r) || r === "thin" || r === "medium" || r === "thick");
}
var Qi = /^(?:element|image|cross-fade|image-set)\(/, Zi = /^(repeating-)?(conic|linear|radial)-gradient\(/;
function Xi(t) {
    let r = 0;
    for (let i of K(t, ","))if (!i.startsWith("var(")) {
        if (kr(i)) {
            r += 1;
            continue;
        }
        if (Zi.test(i)) {
            r += 1;
            continue;
        }
        if (Qi.test(i)) {
            r += 1;
            continue;
        }
        return !1;
    }
    return r > 0;
}
function en(t) {
    return t === "serif" || t === "sans-serif" || t === "monospace" || t === "cursive" || t === "fantasy" || t === "system-ui" || t === "ui-serif" || t === "ui-sans-serif" || t === "ui-monospace" || t === "ui-rounded" || t === "math" || t === "emoji" || t === "fangsong";
}
function tn(t) {
    let r = 0;
    for (let i of K(t, ",")){
        let e = i.charCodeAt(0);
        if (e >= 48 && e <= 57) return !1;
        i.startsWith("var(") || (r += 1);
    }
    return r > 0;
}
function rn(t) {
    return t === "xx-small" || t === "x-small" || t === "small" || t === "medium" || t === "large" || t === "x-large" || t === "xx-large" || t === "xxx-large";
}
function nn(t) {
    return t === "larger" || t === "smaller";
}
var fe = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, on = new RegExp(`^${fe.source}$`);
function br(t) {
    return on.test(t) || Ke(t);
}
var ln = new RegExp(`^${fe.source}%$`);
function Pt(t) {
    return ln.test(t) || Ke(t);
}
var an = new RegExp(`^${fe.source}s*/s*${fe.source}$`);
function sn(t) {
    return an.test(t) || Ke(t);
}
var un = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
], cn = new RegExp(`^${fe.source}(${un.join("|")})$`);
function ot(t) {
    return cn.test(t) || Ke(t);
}
function fn(t) {
    let r = 0;
    for (let i of K(t, " ")){
        if (i === "center" || i === "top" || i === "right" || i === "bottom" || i === "left") {
            r += 1;
            continue;
        }
        if (!i.startsWith("var(")) {
            if (ot(i) || Pt(i)) {
                r += 1;
                continue;
            }
            return !1;
        }
    }
    return r > 0;
}
function pn(t) {
    let r = 0;
    for (let i of K(t, ",")){
        if (i === "cover" || i === "contain") {
            r += 1;
            continue;
        }
        let e = K(i, " ");
        if (e.length !== 1 && e.length !== 2) return !1;
        if (e.every((n)=>n === "auto" || ot(n) || Pt(n))) {
            r += 1;
            continue;
        }
    }
    return r > 0;
}
var dn = [
    "deg",
    "rad",
    "grad",
    "turn"
], mn = new RegExp(`^${fe.source}(${dn.join("|")})$`);
function gn(t) {
    return mn.test(t);
}
var hn = new RegExp(`^${fe.source} +${fe.source} +${fe.source}$`);
function vn(t) {
    return hn.test(t);
}
function E(t) {
    let r = Number(t);
    return Number.isInteger(r) && r >= 0 && String(r) === String(t);
}
function Ot(t) {
    let r = Number(t);
    return Number.isInteger(r) && r > 0 && String(r) === String(t);
}
function xe(t) {
    return yr(t, .25);
}
function lt(t) {
    return yr(t, .25);
}
function yr(t, r) {
    let i = Number(t);
    return i >= 0 && i % r === 0 && String(i) === String(t);
}
var wn = new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
]), xr = /^-?(\d+|\.\d+)(.*?)$/g;
function Ue(t, r) {
    return K(t, ",").map((e)=>{
        e = e.trim();
        let n = K(e, " ").filter((f)=>f.trim() !== ""), s = null, a = null, c = null;
        for (let f of n)wn.has(f) || (xr.test(f) ? (a === null ? a = f : c === null && (c = f), xr.lastIndex = 0) : s === null && (s = f));
        if (a === null || c === null) return e;
        let u = r(s ?? "currentcolor");
        return s !== null ? e.replace(s, u) : `${e} ${u}`;
    }).join(", ");
}
var kn = /^-?[a-z][a-zA-Z0-9/%._-]*$/, bn = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, st = [
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96"
], _t = class {
    utilities = new B(()=>[]);
    completions = new Map;
    static(r, i) {
        this.utilities.get(r).push({
            kind: "static",
            compileFn: i
        });
    }
    functional(r, i, e) {
        this.utilities.get(r).push({
            kind: "functional",
            compileFn: i,
            options: e
        });
    }
    has(r, i) {
        return this.utilities.has(r) && this.utilities.get(r).some((e)=>e.kind === i);
    }
    get(r) {
        return this.utilities.has(r) ? this.utilities.get(r) : [];
    }
    getCompletions(r) {
        return this.completions.get(r)?.() ?? [];
    }
    suggest(r, i) {
        this.completions.set(r, i);
    }
    keys(r) {
        let i = [];
        for (let [e, n] of this.utilities.entries())for (let s of n)if (s.kind === r) {
            i.push(e);
            break;
        }
        return i;
    }
};
function $(t, r, i) {
    return F("@property", t, [
        l("syntax", i ? `"${i}"` : '"*"'),
        l("inherits", "false"),
        ...r ? [
            l("initial-value", r)
        ] : []
    ]);
}
function Z(t, r) {
    if (r === null) return t;
    let i = Number(r);
    return Number.isNaN(i) || (r = `${i * 100}%`), r === "100%" ? t : `color-mix(in oklab, ${t} ${r}, transparent)`;
}
function Cr(t, r) {
    let i = Number(r);
    return Number.isNaN(i) || (r = `${i * 100}%`), `oklab(from ${t} l a b / ${r})`;
}
function X(t, r, i) {
    if (!r) return t;
    if (r.kind === "arbitrary") return Z(t, r.value);
    let e = i.resolve(r.value, [
        "--opacity"
    ]);
    return e ? Z(t, e) : lt(r.value) ? Z(t, `${r.value}%`) : null;
}
function te(t, r, i) {
    let e = null;
    switch(t.value.value){
        case "inherit":
            {
                e = "inherit";
                break;
            }
        case "transparent":
            {
                e = "transparent";
                break;
            }
        case "current":
            {
                e = "currentcolor";
                break;
            }
        default:
            {
                e = r.resolve(t.value.value, i);
                break;
            }
    }
    return e ? X(e, t.modifier, r) : null;
}
var $r = /(\d+)_(\d+)/g;
function Nr(t) {
    let r = new _t;
    function i(o, p) {
        function* h(k) {
            for (let C of t.keysInNamespaces(k))yield C.replace($r, (O, N, T)=>`${N}.${T}`);
        }
        let A = [
            "1/2",
            "1/3",
            "2/3",
            "1/4",
            "2/4",
            "3/4",
            "1/5",
            "2/5",
            "3/5",
            "4/5",
            "1/6",
            "2/6",
            "3/6",
            "4/6",
            "5/6",
            "1/12",
            "2/12",
            "3/12",
            "4/12",
            "5/12",
            "6/12",
            "7/12",
            "8/12",
            "9/12",
            "10/12",
            "11/12"
        ];
        r.suggest(o, ()=>{
            let k = [];
            for (let C of p()){
                if (typeof C == "string") {
                    k.push({
                        values: [
                            C
                        ],
                        modifiers: []
                    });
                    continue;
                }
                let O = [
                    ...C.values ?? [],
                    ...h(C.valueThemeKeys ?? [])
                ], N = [
                    ...C.modifiers ?? [],
                    ...h(C.modifierThemeKeys ?? [])
                ];
                C.supportsFractions && O.push(...A), C.hasDefaultValue && O.unshift(null), k.push({
                    supportsNegative: C.supportsNegative,
                    values: O,
                    modifiers: N
                });
            }
            return k;
        });
    }
    function e(o, p) {
        r.static(o, ()=>p.map((h)=>typeof h == "function" ? h() : l(h[0], h[1])));
    }
    function n(o, p) {
        function h({ negative: A }) {
            return (k)=>{
                let C = null, O = null;
                if (k.value) if (k.value.kind === "arbitrary") {
                    if (k.modifier) return;
                    C = k.value.value, O = k.value.dataType;
                } else {
                    if (C = t.resolve(k.value.fraction ?? k.value.value, p.themeKeys ?? []), C === null && p.supportsFractions && k.value.fraction) {
                        let [N, T] = K(k.value.fraction, "/");
                        if (!E(N) || !E(T)) return;
                        C = `calc(${k.value.fraction} * 100%)`;
                    }
                    if (C === null && A && p.handleNegativeBareValue) {
                        if (C = p.handleNegativeBareValue(k.value), !C?.includes("/") && k.modifier) return;
                        if (C !== null) return p.handle(C, null);
                    }
                    if (C === null && p.handleBareValue && (C = p.handleBareValue(k.value), !C?.includes("/") && k.modifier)) return;
                }
                else {
                    if (k.modifier) return;
                    C = p.defaultValue !== void 0 ? p.defaultValue : t.resolve(null, p.themeKeys ?? []);
                }
                if (C !== null) return p.handle(A ? `calc(${C} * -1)` : C, O);
            };
        }
        p.supportsNegative && r.functional(`-${o}`, h({
            negative: !0
        })), r.functional(o, h({
            negative: !1
        })), i(o, ()=>[
                {
                    supportsNegative: p.supportsNegative,
                    valueThemeKeys: p.themeKeys ?? [],
                    hasDefaultValue: p.defaultValue !== void 0 && p.defaultValue !== null,
                    supportsFractions: p.supportsFractions
                }
            ]);
    }
    function s(o, p) {
        r.functional(o, (h)=>{
            if (!h.value) return;
            let A = null;
            if (h.value.kind === "arbitrary" ? (A = h.value.value, A = X(A, h.modifier, t)) : A = te(h, t, p.themeKeys), A !== null) return p.handle(A);
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: p.themeKeys,
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                }
            ]);
    }
    function a(o, p, h, { supportsNegative: A = !1, supportsFractions: k = !1 } = {}) {
        A && r.static(`-${o}-px`, ()=>h("-1px")), r.static(`${o}-px`, ()=>h("1px")), n(o, {
            themeKeys: p,
            supportsFractions: k,
            supportsNegative: A,
            defaultValue: null,
            handleBareValue: ({ value: C })=>{
                let O = t.resolve(null, [
                    "--spacing"
                ]);
                return !O || !xe(C) ? null : `calc(${O} * ${C})`;
            },
            handleNegativeBareValue: ({ value: C })=>{
                let O = t.resolve(null, [
                    "--spacing"
                ]);
                return !O || !xe(C) ? null : `calc(${O} * -${C})`;
            },
            handle: h
        }), i(o, ()=>[
                {
                    values: t.get([
                        "--spacing"
                    ]) ? st : [],
                    supportsNegative: A,
                    supportsFractions: k,
                    valueThemeKeys: p
                }
            ]);
    }
    e("sr-only", [
        [
            "position",
            "absolute"
        ],
        [
            "width",
            "1px"
        ],
        [
            "height",
            "1px"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "-1px"
        ],
        [
            "overflow",
            "hidden"
        ],
        [
            "clip",
            "rect(0, 0, 0, 0)"
        ],
        [
            "white-space",
            "nowrap"
        ],
        [
            "border-width",
            "0"
        ]
    ]), e("not-sr-only", [
        [
            "position",
            "static"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "0"
        ],
        [
            "overflow",
            "visible"
        ],
        [
            "clip",
            "auto"
        ],
        [
            "white-space",
            "normal"
        ]
    ]), e("pointer-events-none", [
        [
            "pointer-events",
            "none"
        ]
    ]), e("pointer-events-auto", [
        [
            "pointer-events",
            "auto"
        ]
    ]), e("visible", [
        [
            "visibility",
            "visible"
        ]
    ]), e("invisible", [
        [
            "visibility",
            "hidden"
        ]
    ]), e("collapse", [
        [
            "visibility",
            "collapse"
        ]
    ]), e("static", [
        [
            "position",
            "static"
        ]
    ]), e("fixed", [
        [
            "position",
            "fixed"
        ]
    ]), e("absolute", [
        [
            "position",
            "absolute"
        ]
    ]), e("relative", [
        [
            "position",
            "relative"
        ]
    ]), e("sticky", [
        [
            "position",
            "sticky"
        ]
    ]);
    for (let [o, p] of [
        [
            "inset",
            "inset"
        ],
        [
            "inset-x",
            "inset-inline"
        ],
        [
            "inset-y",
            "inset-block"
        ],
        [
            "start",
            "inset-inline-start"
        ],
        [
            "end",
            "inset-inline-end"
        ],
        [
            "top",
            "top"
        ],
        [
            "right",
            "right"
        ],
        [
            "bottom",
            "bottom"
        ],
        [
            "left",
            "left"
        ]
    ])e(`${o}-auto`, [
        [
            p,
            "auto"
        ]
    ]), e(`${o}-full`, [
        [
            p,
            "100%"
        ]
    ]), e(`-${o}-full`, [
        [
            p,
            "-100%"
        ]
    ]), a(o, [
        "--inset",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    e("isolate", [
        [
            "isolation",
            "isolate"
        ]
    ]), e("isolation-auto", [
        [
            "isolation",
            "auto"
        ]
    ]), e("z-auto", [
        [
            "z-index",
            "auto"
        ]
    ]), n("z", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--z-index"
        ],
        handle: (o)=>[
                l("z-index", o)
            ]
    }), i("z", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50"
                ],
                valueThemeKeys: [
                    "--z-index"
                ]
            }
        ]), e("order-first", [
        [
            "order",
            "-9999"
        ]
    ]), e("order-last", [
        [
            "order",
            "9999"
        ]
    ]), n("order", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--order"
        ],
        handle: (o)=>[
                l("order", o)
            ]
    }), i("order", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--order"
                ]
            }
        ]), e("col-auto", [
        [
            "grid-column",
            "auto"
        ]
    ]), n("col", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-column"
        ],
        handle: (o)=>[
                l("grid-column", o)
            ]
    }), e("col-span-full", [
        [
            "grid-column",
            "1 / -1"
        ]
    ]), n("col-span", {
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("grid-column", `span ${o} / span ${o}`)
            ]
    }), e("col-start-auto", [
        [
            "grid-column-start",
            "auto"
        ]
    ]), n("col-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-column-start"
        ],
        handle: (o)=>[
                l("grid-column-start", o)
            ]
    }), e("col-end-auto", [
        [
            "grid-column-end",
            "auto"
        ]
    ]), n("col-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-column-end"
        ],
        handle: (o)=>[
                l("grid-column-end", o)
            ]
    }), i("col-span", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: []
            }
        ]), i("col-start", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-column-start"
                ]
            }
        ]), i("col-end", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-column-end"
                ]
            }
        ]), e("row-auto", [
        [
            "grid-row",
            "auto"
        ]
    ]), n("row", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-row"
        ],
        handle: (o)=>[
                l("grid-row", o)
            ]
    }), e("row-span-full", [
        [
            "grid-row",
            "1 / -1"
        ]
    ]), n("row-span", {
        themeKeys: [],
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("grid-row", `span ${o} / span ${o}`)
            ]
    }), e("row-start-auto", [
        [
            "grid-row-start",
            "auto"
        ]
    ]), n("row-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-row-start"
        ],
        handle: (o)=>[
                l("grid-row-start", o)
            ]
    }), e("row-end-auto", [
        [
            "grid-row-end",
            "auto"
        ]
    ]), n("row-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        themeKeys: [
            "--grid-row-end"
        ],
        handle: (o)=>[
                l("grid-row-end", o)
            ]
    }), i("row-span", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: []
            }
        ]), i("row-start", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-row-start"
                ]
            }
        ]), i("row-end", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-row-end"
                ]
            }
        ]), e("float-start", [
        [
            "float",
            "inline-start"
        ]
    ]), e("float-end", [
        [
            "float",
            "inline-end"
        ]
    ]), e("float-right", [
        [
            "float",
            "right"
        ]
    ]), e("float-left", [
        [
            "float",
            "left"
        ]
    ]), e("float-none", [
        [
            "float",
            "none"
        ]
    ]), e("clear-start", [
        [
            "clear",
            "inline-start"
        ]
    ]), e("clear-end", [
        [
            "clear",
            "inline-end"
        ]
    ]), e("clear-right", [
        [
            "clear",
            "right"
        ]
    ]), e("clear-left", [
        [
            "clear",
            "left"
        ]
    ]), e("clear-both", [
        [
            "clear",
            "both"
        ]
    ]), e("clear-none", [
        [
            "clear",
            "none"
        ]
    ]);
    for (let [o, p] of [
        [
            "m",
            "margin"
        ],
        [
            "mx",
            "margin-inline"
        ],
        [
            "my",
            "margin-block"
        ],
        [
            "ms",
            "margin-inline-start"
        ],
        [
            "me",
            "margin-inline-end"
        ],
        [
            "mt",
            "margin-top"
        ],
        [
            "mr",
            "margin-right"
        ],
        [
            "mb",
            "margin-bottom"
        ],
        [
            "ml",
            "margin-left"
        ]
    ])e(`${o}-auto`, [
        [
            p,
            "auto"
        ]
    ]), a(o, [
        "--margin",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0
    });
    e("box-border", [
        [
            "box-sizing",
            "border-box"
        ]
    ]), e("box-content", [
        [
            "box-sizing",
            "content-box"
        ]
    ]), e("line-clamp-none", [
        [
            "overflow",
            "visible"
        ],
        [
            "display",
            "block"
        ],
        [
            "-webkit-box-orient",
            "horizontal"
        ],
        [
            "-webkit-line-clamp",
            "unset"
        ]
    ]), n("line-clamp", {
        themeKeys: [
            "--line-clamp"
        ],
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("overflow", "hidden"),
                l("display", "-webkit-box"),
                l("-webkit-box-orient", "vertical"),
                l("-webkit-line-clamp", o)
            ]
    }), i("line-clamp", ()=>[
            {
                values: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                valueThemeKeys: [
                    "--line-clamp"
                ]
            }
        ]), e("block", [
        [
            "display",
            "block"
        ]
    ]), e("inline-block", [
        [
            "display",
            "inline-block"
        ]
    ]), e("inline", [
        [
            "display",
            "inline"
        ]
    ]), e("hidden", [
        [
            "display",
            "none"
        ]
    ]), e("inline-flex", [
        [
            "display",
            "inline-flex"
        ]
    ]), e("table", [
        [
            "display",
            "table"
        ]
    ]), e("inline-table", [
        [
            "display",
            "inline-table"
        ]
    ]), e("table-caption", [
        [
            "display",
            "table-caption"
        ]
    ]), e("table-cell", [
        [
            "display",
            "table-cell"
        ]
    ]), e("table-column", [
        [
            "display",
            "table-column"
        ]
    ]), e("table-column-group", [
        [
            "display",
            "table-column-group"
        ]
    ]), e("table-footer-group", [
        [
            "display",
            "table-footer-group"
        ]
    ]), e("table-header-group", [
        [
            "display",
            "table-header-group"
        ]
    ]), e("table-row-group", [
        [
            "display",
            "table-row-group"
        ]
    ]), e("table-row", [
        [
            "display",
            "table-row"
        ]
    ]), e("flow-root", [
        [
            "display",
            "flow-root"
        ]
    ]), e("flex", [
        [
            "display",
            "flex"
        ]
    ]), e("grid", [
        [
            "display",
            "grid"
        ]
    ]), e("inline-grid", [
        [
            "display",
            "inline-grid"
        ]
    ]), e("contents", [
        [
            "display",
            "contents"
        ]
    ]), e("list-item", [
        [
            "display",
            "list-item"
        ]
    ]), e("field-sizing-content", [
        [
            "field-sizing",
            "content"
        ]
    ]), e("field-sizing-fixed", [
        [
            "field-sizing",
            "fixed"
        ]
    ]), e("aspect-auto", [
        [
            "aspect-ratio",
            "auto"
        ]
    ]), e("aspect-square", [
        [
            "aspect-ratio",
            "1 / 1"
        ]
    ]), n("aspect", {
        themeKeys: [
            "--aspect"
        ],
        handleBareValue: ({ fraction: o })=>{
            if (o === null) return null;
            let [p, h] = K(o, "/");
            return !E(p) || !E(h) ? null : o;
        },
        handle: (o)=>[
                l("aspect-ratio", o)
            ]
    });
    for (let [o, p] of [
        [
            "full",
            "100%"
        ],
        [
            "svw",
            "100svw"
        ],
        [
            "lvw",
            "100lvw"
        ],
        [
            "dvw",
            "100dvw"
        ],
        [
            "svh",
            "100svh"
        ],
        [
            "lvh",
            "100lvh"
        ],
        [
            "dvh",
            "100dvh"
        ],
        [
            "min",
            "min-content"
        ],
        [
            "max",
            "max-content"
        ],
        [
            "fit",
            "fit-content"
        ]
    ])e(`size-${o}`, [
        [
            "--tw-sort",
            "size"
        ],
        [
            "width",
            p
        ],
        [
            "height",
            p
        ]
    ]), e(`w-${o}`, [
        [
            "width",
            p
        ]
    ]), e(`h-${o}`, [
        [
            "height",
            p
        ]
    ]), e(`min-w-${o}`, [
        [
            "min-width",
            p
        ]
    ]), e(`min-h-${o}`, [
        [
            "min-height",
            p
        ]
    ]), e(`max-w-${o}`, [
        [
            "max-width",
            p
        ]
    ]), e(`max-h-${o}`, [
        [
            "max-height",
            p
        ]
    ]);
    e("size-auto", [
        [
            "--tw-sort",
            "size"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ]
    ]), e("w-auto", [
        [
            "width",
            "auto"
        ]
    ]), e("h-auto", [
        [
            "height",
            "auto"
        ]
    ]), e("min-w-auto", [
        [
            "min-width",
            "auto"
        ]
    ]), e("min-h-auto", [
        [
            "min-height",
            "auto"
        ]
    ]), e("h-lh", [
        [
            "height",
            "1lh"
        ]
    ]), e("min-h-lh", [
        [
            "min-height",
            "1lh"
        ]
    ]), e("max-h-lh", [
        [
            "max-height",
            "1lh"
        ]
    ]), e("w-screen", [
        [
            "width",
            "100vw"
        ]
    ]), e("min-w-screen", [
        [
            "min-width",
            "100vw"
        ]
    ]), e("max-w-screen", [
        [
            "max-width",
            "100vw"
        ]
    ]), e("h-screen", [
        [
            "height",
            "100vh"
        ]
    ]), e("min-h-screen", [
        [
            "min-height",
            "100vh"
        ]
    ]), e("max-h-screen", [
        [
            "max-height",
            "100vh"
        ]
    ]), e("max-w-none", [
        [
            "max-width",
            "none"
        ]
    ]), e("max-h-none", [
        [
            "max-height",
            "none"
        ]
    ]), a("size", [
        "--size",
        "--spacing"
    ], (o)=>[
            l("--tw-sort", "size"),
            l("width", o),
            l("height", o)
        ], {
        supportsFractions: !0
    });
    for (let [o, p, h] of [
        [
            "w",
            [
                "--width",
                "--spacing",
                "--container"
            ],
            "width"
        ],
        [
            "min-w",
            [
                "--min-width",
                "--spacing",
                "--container"
            ],
            "min-width"
        ],
        [
            "max-w",
            [
                "--max-width",
                "--spacing",
                "--container"
            ],
            "max-width"
        ],
        [
            "h",
            [
                "--height",
                "--spacing"
            ],
            "height"
        ],
        [
            "min-h",
            [
                "--min-height",
                "--height",
                "--spacing"
            ],
            "min-height"
        ],
        [
            "max-h",
            [
                "--max-height",
                "--height",
                "--spacing"
            ],
            "max-height"
        ]
    ])a(o, p, (A)=>[
            l(h, A)
        ], {
        supportsFractions: !0
    });
    r.static("container", ()=>{
        let o = [
            ...t.namespace("--breakpoint").values()
        ];
        o.sort((h, A)=>ye(h, A, "asc"));
        let p = [
            l("--tw-sort", "--tw-container-component"),
            l("width", "100%")
        ];
        for (let h of o)p.push(F("@media", `(width >= ${h})`, [
            l("max-width", h)
        ]));
        return p;
    }), e("flex-auto", [
        [
            "flex",
            "auto"
        ]
    ]), e("flex-initial", [
        [
            "flex",
            "0 auto"
        ]
    ]), e("flex-none", [
        [
            "flex",
            "none"
        ]
    ]), r.functional("flex", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") return o.modifier ? void 0 : [
                l("flex", o.value.value)
            ];
            if (o.value.fraction) {
                let [p, h] = K(o.value.fraction, "/");
                return !E(p) || !E(h) ? void 0 : [
                    l("flex", `calc(${o.value.fraction} * 100%)`)
                ];
            }
            if (E(o.value.value)) return o.modifier ? void 0 : [
                l("flex", o.value.value)
            ];
        }
    }), i("flex", ()=>[
            {
                supportsFractions: !0
            }
        ]), n("shrink", {
        defaultValue: "1",
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("flex-shrink", o)
            ]
    }), n("grow", {
        defaultValue: "1",
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("flex-grow", o)
            ]
    }), i("shrink", ()=>[
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), i("grow", ()=>[
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), e("basis-auto", [
        [
            "flex-basis",
            "auto"
        ]
    ]), e("basis-full", [
        [
            "flex-basis",
            "100%"
        ]
    ]), a("basis", [
        "--flex-basis",
        "--spacing",
        "--container"
    ], (o)=>[
            l("flex-basis", o)
        ], {
        supportsFractions: !0
    }), e("table-auto", [
        [
            "table-layout",
            "auto"
        ]
    ]), e("table-fixed", [
        [
            "table-layout",
            "fixed"
        ]
    ]), e("caption-top", [
        [
            "caption-side",
            "top"
        ]
    ]), e("caption-bottom", [
        [
            "caption-side",
            "bottom"
        ]
    ]), e("border-collapse", [
        [
            "border-collapse",
            "collapse"
        ]
    ]), e("border-separate", [
        [
            "border-collapse",
            "separate"
        ]
    ]);
    let c = ()=>I([
            $("--tw-border-spacing-x", "0", "<length>"),
            $("--tw-border-spacing-y", "0", "<length>")
        ]);
    a("border-spacing", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-x", o),
            l("--tw-border-spacing-y", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), a("border-spacing-x", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-x", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), a("border-spacing-y", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-y", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), e("origin-center", [
        [
            "transform-origin",
            "center"
        ]
    ]), e("origin-top", [
        [
            "transform-origin",
            "top"
        ]
    ]), e("origin-top-right", [
        [
            "transform-origin",
            "top right"
        ]
    ]), e("origin-right", [
        [
            "transform-origin",
            "right"
        ]
    ]), e("origin-bottom-right", [
        [
            "transform-origin",
            "bottom right"
        ]
    ]), e("origin-bottom", [
        [
            "transform-origin",
            "bottom"
        ]
    ]), e("origin-bottom-left", [
        [
            "transform-origin",
            "bottom left"
        ]
    ]), e("origin-left", [
        [
            "transform-origin",
            "left"
        ]
    ]), e("origin-top-left", [
        [
            "transform-origin",
            "top left"
        ]
    ]), n("origin", {
        themeKeys: [
            "--transform-origin"
        ],
        handle: (o)=>[
                l("transform-origin", o)
            ]
    }), e("perspective-origin-center", [
        [
            "perspective-origin",
            "center"
        ]
    ]), e("perspective-origin-top", [
        [
            "perspective-origin",
            "top"
        ]
    ]), e("perspective-origin-top-right", [
        [
            "perspective-origin",
            "top right"
        ]
    ]), e("perspective-origin-right", [
        [
            "perspective-origin",
            "right"
        ]
    ]), e("perspective-origin-bottom-right", [
        [
            "perspective-origin",
            "bottom right"
        ]
    ]), e("perspective-origin-bottom", [
        [
            "perspective-origin",
            "bottom"
        ]
    ]), e("perspective-origin-bottom-left", [
        [
            "perspective-origin",
            "bottom left"
        ]
    ]), e("perspective-origin-left", [
        [
            "perspective-origin",
            "left"
        ]
    ]), e("perspective-origin-top-left", [
        [
            "perspective-origin",
            "top left"
        ]
    ]), n("perspective-origin", {
        themeKeys: [
            "--perspective-origin"
        ],
        handle: (o)=>[
                l("perspective-origin", o)
            ]
    }), e("perspective-none", [
        [
            "perspective",
            "none"
        ]
    ]), n("perspective", {
        themeKeys: [
            "--perspective"
        ],
        handle: (o)=>[
                l("perspective", o)
            ]
    });
    let u = ()=>I([
            $("--tw-translate-x", "0"),
            $("--tw-translate-y", "0"),
            $("--tw-translate-z", "0")
        ]);
    e("translate-none", [
        [
            "translate",
            "none"
        ]
    ]), e("-translate-full", [
        u,
        [
            "--tw-translate-x",
            "-100%"
        ],
        [
            "--tw-translate-y",
            "-100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), e("translate-full", [
        u,
        [
            "--tw-translate-x",
            "100%"
        ],
        [
            "--tw-translate-y",
            "100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), a("translate", [
        "--translate",
        "--spacing"
    ], (o)=>[
            u(),
            l("--tw-translate-x", o),
            l("--tw-translate-y", o),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y)")
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    for (let o of [
        "x",
        "y"
    ])e(`-translate-${o}-full`, [
        u,
        [
            `--tw-translate-${o}`,
            "-100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), e(`translate-${o}-full`, [
        u,
        [
            `--tw-translate-${o}`,
            "100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), a(`translate-${o}`, [
        "--translate",
        "--spacing"
    ], (p)=>[
            u(),
            l(`--tw-translate-${o}`, p),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y)")
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    a("translate-z", [
        "--translate",
        "--spacing"
    ], (o)=>[
            u(),
            l("--tw-translate-z", o),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")
        ], {
        supportsNegative: !0
    }), e("translate-3d", [
        u,
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"
        ]
    ]);
    let f = ()=>I([
            $("--tw-scale-x", "1"),
            $("--tw-scale-y", "1"),
            $("--tw-scale-z", "1")
        ]);
    e("scale-none", [
        [
            "scale",
            "none"
        ]
    ]);
    function g({ negative: o }) {
        return (p)=>{
            if (!p.value || p.modifier) return;
            let h;
            return p.value.kind === "arbitrary" ? (h = p.value.value, h = o ? `calc(${h} * -1)` : h, [
                l("scale", h)
            ]) : (h = t.resolve(p.value.value, [
                "--scale"
            ]), !h && E(p.value.value) && (h = `${p.value.value}%`), h ? (h = o ? `calc(${h} * -1)` : h, [
                f(),
                l("--tw-scale-x", h),
                l("--tw-scale-y", h),
                l("--tw-scale-z", h),
                l("scale", "var(--tw-scale-x) var(--tw-scale-y)")
            ]) : void 0);
        };
    }
    r.functional("-scale", g({
        negative: !0
    })), r.functional("scale", g({
        negative: !1
    })), i("scale", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "50",
                    "75",
                    "90",
                    "95",
                    "100",
                    "105",
                    "110",
                    "125",
                    "150",
                    "200"
                ],
                valueThemeKeys: [
                    "--scale"
                ]
            }
        ]);
    for (let o of [
        "x",
        "y",
        "z"
    ])n(`scale-${o}`, {
        supportsNegative: !0,
        themeKeys: [
            "--scale"
        ],
        handleBareValue: ({ value: p })=>E(p) ? `${p}%` : null,
        handle: (p)=>[
                f(),
                l(`--tw-scale-${o}`, p),
                l("scale", `var(--tw-scale-x) var(--tw-scale-y)${o === "z" ? " var(--tw-scale-z)" : ""}`)
            ]
    }), i(`scale-${o}`, ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "50",
                    "75",
                    "90",
                    "95",
                    "100",
                    "105",
                    "110",
                    "125",
                    "150",
                    "200"
                ],
                valueThemeKeys: [
                    "--scale"
                ]
            }
        ]);
    e("scale-3d", [
        f,
        [
            "scale",
            "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"
        ]
    ]), e("rotate-none", [
        [
            "rotate",
            "none"
        ]
    ]);
    function d({ negative: o }) {
        return (p)=>{
            if (!p.value || p.modifier) return;
            let h;
            if (p.value.kind === "arbitrary") {
                h = p.value.value;
                let A = p.value.dataType ?? Y(h, [
                    "angle",
                    "vector"
                ]);
                if (A === "vector") return [
                    l("rotate", `${h} var(--tw-rotate)`)
                ];
                if (A !== "angle") return [
                    l("rotate", o ? `calc(${h} * -1)` : h)
                ];
            } else if (h = t.resolve(p.value.value, [
                "--rotate"
            ]), !h && E(p.value.value) && (h = `${p.value.value}deg`), !h) return;
            return [
                l("rotate", o ? `calc(${h} * -1)` : h)
            ];
        };
    }
    r.functional("-rotate", d({
        negative: !0
    })), r.functional("rotate", d({
        negative: !1
    })), i("rotate", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ],
                valueThemeKeys: [
                    "--rotate"
                ]
            }
        ]);
    {
        let o = [
            "var(--tw-rotate-x,)",
            "var(--tw-rotate-y,)",
            "var(--tw-rotate-z,)",
            "var(--tw-skew-x,)",
            "var(--tw-skew-y,)"
        ].join(" "), p = ()=>I([
                $("--tw-rotate-x"),
                $("--tw-rotate-y"),
                $("--tw-rotate-z"),
                $("--tw-skew-x"),
                $("--tw-skew-y")
            ]);
        for (let h of [
            "x",
            "y",
            "z"
        ])n(`rotate-${h}`, {
            supportsNegative: !0,
            themeKeys: [
                "--rotate"
            ],
            handleBareValue: ({ value: A })=>E(A) ? `${A}deg` : null,
            handle: (A)=>[
                    p(),
                    l(`--tw-rotate-${h}`, `rotate${h.toUpperCase()}(${A})`),
                    l("transform", o)
                ]
        }), i(`rotate-${h}`, ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12",
                        "45",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--rotate"
                    ]
                }
            ]);
        n("skew", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>E(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-x", `skewX(${h})`),
                    l("--tw-skew-y", `skewY(${h})`),
                    l("transform", o)
                ]
        }), n("skew-x", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>E(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-x", `skewX(${h})`),
                    l("transform", o)
                ]
        }), n("skew-y", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>E(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-y", `skewY(${h})`),
                    l("transform", o)
                ]
        }), i("skew", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), i("skew-x", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), i("skew-y", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), r.functional("transform", (h)=>{
            if (h.modifier) return;
            let A = null;
            if (h.value ? h.value.kind === "arbitrary" && (A = h.value.value) : A = o, A !== null) return [
                p(),
                l("transform", A)
            ];
        }), i("transform", ()=>[
                {
                    hasDefaultValue: !0
                }
            ]), e("transform-cpu", [
            [
                "transform",
                o
            ]
        ]), e("transform-gpu", [
            [
                "transform",
                `translateZ(0) ${o}`
            ]
        ]), e("transform-none", [
            [
                "transform",
                "none"
            ]
        ]);
    }
    e("transform-flat", [
        [
            "transform-style",
            "flat"
        ]
    ]), e("transform-3d", [
        [
            "transform-style",
            "preserve-3d"
        ]
    ]), e("transform-content", [
        [
            "transform-box",
            "content-box"
        ]
    ]), e("transform-border", [
        [
            "transform-box",
            "border-box"
        ]
    ]), e("transform-fill", [
        [
            "transform-box",
            "fill-box"
        ]
    ]), e("transform-stroke", [
        [
            "transform-box",
            "stroke-box"
        ]
    ]), e("transform-view", [
        [
            "transform-box",
            "view-box"
        ]
    ]), e("backface-visible", [
        [
            "backface-visibility",
            "visible"
        ]
    ]), e("backface-hidden", [
        [
            "backface-visibility",
            "hidden"
        ]
    ]);
    for (let o of [
        "auto",
        "default",
        "pointer",
        "wait",
        "text",
        "move",
        "help",
        "not-allowed",
        "none",
        "context-menu",
        "progress",
        "cell",
        "crosshair",
        "vertical-text",
        "alias",
        "copy",
        "no-drop",
        "grab",
        "grabbing",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "zoom-in",
        "zoom-out"
    ])e(`cursor-${o}`, [
        [
            "cursor",
            o
        ]
    ]);
    n("cursor", {
        themeKeys: [
            "--cursor"
        ],
        handle: (o)=>[
                l("cursor", o)
            ]
    });
    for (let o of [
        "auto",
        "none",
        "manipulation"
    ])e(`touch-${o}`, [
        [
            "touch-action",
            o
        ]
    ]);
    let m = ()=>I([
            $("--tw-pan-x"),
            $("--tw-pan-y"),
            $("--tw-pinch-zoom")
        ]);
    for (let o of [
        "x",
        "left",
        "right"
    ])e(`touch-pan-${o}`, [
        m,
        [
            "--tw-pan-x",
            `pan-${o}`
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    for (let o of [
        "y",
        "up",
        "down"
    ])e(`touch-pan-${o}`, [
        m,
        [
            "--tw-pan-y",
            `pan-${o}`
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    e("touch-pinch-zoom", [
        m,
        [
            "--tw-pinch-zoom",
            "pinch-zoom"
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    for (let o of [
        "none",
        "text",
        "all",
        "auto"
    ])e(`select-${o}`, [
        [
            "-webkit-user-select",
            o
        ],
        [
            "user-select",
            o
        ]
    ]);
    e("resize-none", [
        [
            "resize",
            "none"
        ]
    ]), e("resize-x", [
        [
            "resize",
            "horizontal"
        ]
    ]), e("resize-y", [
        [
            "resize",
            "vertical"
        ]
    ]), e("resize", [
        [
            "resize",
            "both"
        ]
    ]), e("snap-none", [
        [
            "scroll-snap-type",
            "none"
        ]
    ]);
    let w = ()=>I([
            $("--tw-scroll-snap-strictness", "proximity", "*")
        ]);
    for (let o of [
        "x",
        "y",
        "both"
    ])e(`snap-${o}`, [
        w,
        [
            "scroll-snap-type",
            `${o} var(--tw-scroll-snap-strictness)`
        ]
    ]);
    e("snap-mandatory", [
        w,
        [
            "--tw-scroll-snap-strictness",
            "mandatory"
        ]
    ]), e("snap-proximity", [
        w,
        [
            "--tw-scroll-snap-strictness",
            "proximity"
        ]
    ]), e("snap-align-none", [
        [
            "scroll-snap-align",
            "none"
        ]
    ]), e("snap-start", [
        [
            "scroll-snap-align",
            "start"
        ]
    ]), e("snap-end", [
        [
            "scroll-snap-align",
            "end"
        ]
    ]), e("snap-center", [
        [
            "scroll-snap-align",
            "center"
        ]
    ]), e("snap-normal", [
        [
            "scroll-snap-stop",
            "normal"
        ]
    ]), e("snap-always", [
        [
            "scroll-snap-stop",
            "always"
        ]
    ]);
    for (let [o, p] of [
        [
            "scroll-m",
            "scroll-margin"
        ],
        [
            "scroll-mx",
            "scroll-margin-inline"
        ],
        [
            "scroll-my",
            "scroll-margin-block"
        ],
        [
            "scroll-ms",
            "scroll-margin-inline-start"
        ],
        [
            "scroll-me",
            "scroll-margin-inline-end"
        ],
        [
            "scroll-mt",
            "scroll-margin-top"
        ],
        [
            "scroll-mr",
            "scroll-margin-right"
        ],
        [
            "scroll-mb",
            "scroll-margin-bottom"
        ],
        [
            "scroll-ml",
            "scroll-margin-left"
        ]
    ])a(o, [
        "--scroll-margin",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0
    });
    for (let [o, p] of [
        [
            "scroll-p",
            "scroll-padding"
        ],
        [
            "scroll-px",
            "scroll-padding-inline"
        ],
        [
            "scroll-py",
            "scroll-padding-block"
        ],
        [
            "scroll-ps",
            "scroll-padding-inline-start"
        ],
        [
            "scroll-pe",
            "scroll-padding-inline-end"
        ],
        [
            "scroll-pt",
            "scroll-padding-top"
        ],
        [
            "scroll-pr",
            "scroll-padding-right"
        ],
        [
            "scroll-pb",
            "scroll-padding-bottom"
        ],
        [
            "scroll-pl",
            "scroll-padding-left"
        ]
    ])a(o, [
        "--scroll-padding",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ]);
    e("list-inside", [
        [
            "list-style-position",
            "inside"
        ]
    ]), e("list-outside", [
        [
            "list-style-position",
            "outside"
        ]
    ]), e("list-none", [
        [
            "list-style-type",
            "none"
        ]
    ]), e("list-disc", [
        [
            "list-style-type",
            "disc"
        ]
    ]), e("list-decimal", [
        [
            "list-style-type",
            "decimal"
        ]
    ]), n("list", {
        themeKeys: [
            "--list-style-type"
        ],
        handle: (o)=>[
                l("list-style-type", o)
            ]
    }), e("list-image-none", [
        [
            "list-style-image",
            "none"
        ]
    ]), n("list-image", {
        themeKeys: [
            "--list-style-image"
        ],
        handle: (o)=>[
                l("list-style-image", o)
            ]
    }), e("appearance-none", [
        [
            "appearance",
            "none"
        ]
    ]), e("appearance-auto", [
        [
            "appearance",
            "auto"
        ]
    ]), e("scheme-normal", [
        [
            "color-scheme",
            "normal"
        ]
    ]), e("scheme-dark", [
        [
            "color-scheme",
            "dark"
        ]
    ]), e("scheme-light", [
        [
            "color-scheme",
            "light"
        ]
    ]), e("scheme-light-dark", [
        [
            "color-scheme",
            "light dark"
        ]
    ]), e("scheme-only-dark", [
        [
            "color-scheme",
            "only dark"
        ]
    ]), e("scheme-only-light", [
        [
            "color-scheme",
            "only light"
        ]
    ]), e("columns-auto", [
        [
            "columns",
            "auto"
        ]
    ]), n("columns", {
        themeKeys: [
            "--columns",
            "--container"
        ],
        handleBareValue: ({ value: o })=>E(o) ? o : null,
        handle: (o)=>[
                l("columns", o)
            ]
    }), i("columns", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--columns",
                    "--container"
                ]
            }
        ]);
    for (let o of [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ])e(`break-before-${o}`, [
        [
            "break-before",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "avoid",
        "avoid-page",
        "avoid-column"
    ])e(`break-inside-${o}`, [
        [
            "break-inside",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ])e(`break-after-${o}`, [
        [
            "break-after",
            o
        ]
    ]);
    e("grid-flow-row", [
        [
            "grid-auto-flow",
            "row"
        ]
    ]), e("grid-flow-col", [
        [
            "grid-auto-flow",
            "column"
        ]
    ]), e("grid-flow-dense", [
        [
            "grid-auto-flow",
            "dense"
        ]
    ]), e("grid-flow-row-dense", [
        [
            "grid-auto-flow",
            "row dense"
        ]
    ]), e("grid-flow-col-dense", [
        [
            "grid-auto-flow",
            "column dense"
        ]
    ]), e("auto-cols-auto", [
        [
            "grid-auto-columns",
            "auto"
        ]
    ]), e("auto-cols-min", [
        [
            "grid-auto-columns",
            "min-content"
        ]
    ]), e("auto-cols-max", [
        [
            "grid-auto-columns",
            "max-content"
        ]
    ]), e("auto-cols-fr", [
        [
            "grid-auto-columns",
            "minmax(0, 1fr)"
        ]
    ]), n("auto-cols", {
        themeKeys: [
            "--grid-auto-columns"
        ],
        handle: (o)=>[
                l("grid-auto-columns", o)
            ]
    }), e("auto-rows-auto", [
        [
            "grid-auto-rows",
            "auto"
        ]
    ]), e("auto-rows-min", [
        [
            "grid-auto-rows",
            "min-content"
        ]
    ]), e("auto-rows-max", [
        [
            "grid-auto-rows",
            "max-content"
        ]
    ]), e("auto-rows-fr", [
        [
            "grid-auto-rows",
            "minmax(0, 1fr)"
        ]
    ]), n("auto-rows", {
        themeKeys: [
            "--grid-auto-rows"
        ],
        handle: (o)=>[
                l("grid-auto-rows", o)
            ]
    }), e("grid-cols-none", [
        [
            "grid-template-columns",
            "none"
        ]
    ]), e("grid-cols-subgrid", [
        [
            "grid-template-columns",
            "subgrid"
        ]
    ]), n("grid-cols", {
        themeKeys: [
            "--grid-template-columns"
        ],
        handleBareValue: ({ value: o })=>Ot(o) ? `repeat(${o}, minmax(0, 1fr))` : null,
        handle: (o)=>[
                l("grid-template-columns", o)
            ]
    }), e("grid-rows-none", [
        [
            "grid-template-rows",
            "none"
        ]
    ]), e("grid-rows-subgrid", [
        [
            "grid-template-rows",
            "subgrid"
        ]
    ]), n("grid-rows", {
        themeKeys: [
            "--grid-template-rows"
        ],
        handleBareValue: ({ value: o })=>Ot(o) ? `repeat(${o}, minmax(0, 1fr))` : null,
        handle: (o)=>[
                l("grid-template-rows", o)
            ]
    }), i("grid-cols", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-template-columns"
                ]
            }
        ]), i("grid-rows", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-template-rows"
                ]
            }
        ]), e("flex-row", [
        [
            "flex-direction",
            "row"
        ]
    ]), e("flex-row-reverse", [
        [
            "flex-direction",
            "row-reverse"
        ]
    ]), e("flex-col", [
        [
            "flex-direction",
            "column"
        ]
    ]), e("flex-col-reverse", [
        [
            "flex-direction",
            "column-reverse"
        ]
    ]), e("flex-wrap", [
        [
            "flex-wrap",
            "wrap"
        ]
    ]), e("flex-nowrap", [
        [
            "flex-wrap",
            "nowrap"
        ]
    ]), e("flex-wrap-reverse", [
        [
            "flex-wrap",
            "wrap-reverse"
        ]
    ]), e("place-content-center", [
        [
            "place-content",
            "center"
        ]
    ]), e("place-content-start", [
        [
            "place-content",
            "start"
        ]
    ]), e("place-content-end", [
        [
            "place-content",
            "end"
        ]
    ]), e("place-content-center-safe", [
        [
            "place-content",
            "safe center"
        ]
    ]), e("place-content-end-safe", [
        [
            "place-content",
            "safe end"
        ]
    ]), e("place-content-between", [
        [
            "place-content",
            "space-between"
        ]
    ]), e("place-content-around", [
        [
            "place-content",
            "space-around"
        ]
    ]), e("place-content-evenly", [
        [
            "place-content",
            "space-evenly"
        ]
    ]), e("place-content-baseline", [
        [
            "place-content",
            "baseline"
        ]
    ]), e("place-content-stretch", [
        [
            "place-content",
            "stretch"
        ]
    ]), e("place-items-center", [
        [
            "place-items",
            "center"
        ]
    ]), e("place-items-start", [
        [
            "place-items",
            "start"
        ]
    ]), e("place-items-end", [
        [
            "place-items",
            "end"
        ]
    ]), e("place-items-center-safe", [
        [
            "place-items",
            "safe center"
        ]
    ]), e("place-items-end-safe", [
        [
            "place-items",
            "safe end"
        ]
    ]), e("place-items-baseline", [
        [
            "place-items",
            "baseline"
        ]
    ]), e("place-items-stretch", [
        [
            "place-items",
            "stretch"
        ]
    ]), e("content-normal", [
        [
            "align-content",
            "normal"
        ]
    ]), e("content-center", [
        [
            "align-content",
            "center"
        ]
    ]), e("content-start", [
        [
            "align-content",
            "flex-start"
        ]
    ]), e("content-end", [
        [
            "align-content",
            "flex-end"
        ]
    ]), e("content-center-safe", [
        [
            "align-content",
            "safe center"
        ]
    ]), e("content-end-safe", [
        [
            "align-content",
            "safe flex-end"
        ]
    ]), e("content-between", [
        [
            "align-content",
            "space-between"
        ]
    ]), e("content-around", [
        [
            "align-content",
            "space-around"
        ]
    ]), e("content-evenly", [
        [
            "align-content",
            "space-evenly"
        ]
    ]), e("content-baseline", [
        [
            "align-content",
            "baseline"
        ]
    ]), e("content-stretch", [
        [
            "align-content",
            "stretch"
        ]
    ]), e("items-center", [
        [
            "align-items",
            "center"
        ]
    ]), e("items-start", [
        [
            "align-items",
            "flex-start"
        ]
    ]), e("items-end", [
        [
            "align-items",
            "flex-end"
        ]
    ]), e("items-center-safe", [
        [
            "align-items",
            "safe center"
        ]
    ]), e("items-end-safe", [
        [
            "align-items",
            "safe flex-end"
        ]
    ]), e("items-baseline", [
        [
            "align-items",
            "baseline"
        ]
    ]), e("items-baseline-last", [
        [
            "align-items",
            "last baseline"
        ]
    ]), e("items-stretch", [
        [
            "align-items",
            "stretch"
        ]
    ]), e("justify-normal", [
        [
            "justify-content",
            "normal"
        ]
    ]), e("justify-center", [
        [
            "justify-content",
            "center"
        ]
    ]), e("justify-start", [
        [
            "justify-content",
            "flex-start"
        ]
    ]), e("justify-end", [
        [
            "justify-content",
            "flex-end"
        ]
    ]), e("justify-center-safe", [
        [
            "justify-content",
            "safe center"
        ]
    ]), e("justify-end-safe", [
        [
            "justify-content",
            "safe flex-end"
        ]
    ]), e("justify-between", [
        [
            "justify-content",
            "space-between"
        ]
    ]), e("justify-around", [
        [
            "justify-content",
            "space-around"
        ]
    ]), e("justify-evenly", [
        [
            "justify-content",
            "space-evenly"
        ]
    ]), e("justify-baseline", [
        [
            "justify-content",
            "baseline"
        ]
    ]), e("justify-stretch", [
        [
            "justify-content",
            "stretch"
        ]
    ]), e("justify-items-normal", [
        [
            "justify-items",
            "normal"
        ]
    ]), e("justify-items-center", [
        [
            "justify-items",
            "center"
        ]
    ]), e("justify-items-start", [
        [
            "justify-items",
            "start"
        ]
    ]), e("justify-items-end", [
        [
            "justify-items",
            "end"
        ]
    ]), e("justify-items-center-safe", [
        [
            "justify-items",
            "safe center"
        ]
    ]), e("justify-items-end-safe", [
        [
            "justify-items",
            "safe end"
        ]
    ]), e("justify-items-stretch", [
        [
            "justify-items",
            "stretch"
        ]
    ]), a("gap", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("gap", o)
        ]), a("gap-x", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("column-gap", o)
        ]), a("gap-y", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("row-gap", o)
        ]), a("space-x", [
        "--space",
        "--spacing"
    ], (o)=>[
            I([
                $("--tw-space-x-reverse", "0")
            ]),
            M(":where(& > :not(:last-child))", [
                l("--tw-sort", "row-gap"),
                l("--tw-space-x-reverse", "0"),
                l("margin-inline-start", `calc(${o} * var(--tw-space-x-reverse))`),
                l("margin-inline-end", `calc(${o} * calc(1 - var(--tw-space-x-reverse)))`)
            ])
        ], {
        supportsNegative: !0
    }), a("space-y", [
        "--space",
        "--spacing"
    ], (o)=>[
            I([
                $("--tw-space-y-reverse", "0")
            ]),
            M(":where(& > :not(:last-child))", [
                l("--tw-sort", "column-gap"),
                l("--tw-space-y-reverse", "0"),
                l("margin-block-start", `calc(${o} * var(--tw-space-y-reverse))`),
                l("margin-block-end", `calc(${o} * calc(1 - var(--tw-space-y-reverse)))`)
            ])
        ], {
        supportsNegative: !0
    }), e("space-x-reverse", [
        ()=>I([
                $("--tw-space-x-reverse", "0")
            ]),
        ()=>M(":where(& > :not(:last-child))", [
                l("--tw-sort", "row-gap"),
                l("--tw-space-x-reverse", "1")
            ])
    ]), e("space-y-reverse", [
        ()=>I([
                $("--tw-space-y-reverse", "0")
            ]),
        ()=>M(":where(& > :not(:last-child))", [
                l("--tw-sort", "column-gap"),
                l("--tw-space-y-reverse", "1")
            ])
    ]), e("accent-auto", [
        [
            "accent-color",
            "auto"
        ]
    ]), s("accent", {
        themeKeys: [
            "--accent-color",
            "--color"
        ],
        handle: (o)=>[
                l("accent-color", o)
            ]
    }), s("caret", {
        themeKeys: [
            "--caret-color",
            "--color"
        ],
        handle: (o)=>[
                l("caret-color", o)
            ]
    }), s("divide", {
        themeKeys: [
            "--divide-color",
            "--color"
        ],
        handle: (o)=>[
                M(":where(& > :not(:last-child))", [
                    l("--tw-sort", "divide-color"),
                    l("border-color", o)
                ])
            ]
    }), e("place-self-auto", [
        [
            "place-self",
            "auto"
        ]
    ]), e("place-self-start", [
        [
            "place-self",
            "start"
        ]
    ]), e("place-self-end", [
        [
            "place-self",
            "end"
        ]
    ]), e("place-self-center", [
        [
            "place-self",
            "center"
        ]
    ]), e("place-self-end-safe", [
        [
            "place-self",
            "safe end"
        ]
    ]), e("place-self-center-safe", [
        [
            "place-self",
            "safe center"
        ]
    ]), e("place-self-stretch", [
        [
            "place-self",
            "stretch"
        ]
    ]), e("self-auto", [
        [
            "align-self",
            "auto"
        ]
    ]), e("self-start", [
        [
            "align-self",
            "flex-start"
        ]
    ]), e("self-end", [
        [
            "align-self",
            "flex-end"
        ]
    ]), e("self-center", [
        [
            "align-self",
            "center"
        ]
    ]), e("self-end-safe", [
        [
            "align-self",
            "safe flex-end"
        ]
    ]), e("self-center-safe", [
        [
            "align-self",
            "safe center"
        ]
    ]), e("self-stretch", [
        [
            "align-self",
            "stretch"
        ]
    ]), e("self-baseline", [
        [
            "align-self",
            "baseline"
        ]
    ]), e("self-baseline-last", [
        [
            "align-self",
            "last baseline"
        ]
    ]), e("justify-self-auto", [
        [
            "justify-self",
            "auto"
        ]
    ]), e("justify-self-start", [
        [
            "justify-self",
            "flex-start"
        ]
    ]), e("justify-self-end", [
        [
            "justify-self",
            "flex-end"
        ]
    ]), e("justify-self-center", [
        [
            "justify-self",
            "center"
        ]
    ]), e("justify-self-end-safe", [
        [
            "justify-self",
            "safe flex-end"
        ]
    ]), e("justify-self-center-safe", [
        [
            "justify-self",
            "safe center"
        ]
    ]), e("justify-self-stretch", [
        [
            "justify-self",
            "stretch"
        ]
    ]);
    for (let o of [
        "auto",
        "hidden",
        "clip",
        "visible",
        "scroll"
    ])e(`overflow-${o}`, [
        [
            "overflow",
            o
        ]
    ]), e(`overflow-x-${o}`, [
        [
            "overflow-x",
            o
        ]
    ]), e(`overflow-y-${o}`, [
        [
            "overflow-y",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "contain",
        "none"
    ])e(`overscroll-${o}`, [
        [
            "overscroll-behavior",
            o
        ]
    ]), e(`overscroll-x-${o}`, [
        [
            "overscroll-behavior-x",
            o
        ]
    ]), e(`overscroll-y-${o}`, [
        [
            "overscroll-behavior-y",
            o
        ]
    ]);
    e("scroll-auto", [
        [
            "scroll-behavior",
            "auto"
        ]
    ]), e("scroll-smooth", [
        [
            "scroll-behavior",
            "smooth"
        ]
    ]), e("truncate", [
        [
            "overflow",
            "hidden"
        ],
        [
            "text-overflow",
            "ellipsis"
        ],
        [
            "white-space",
            "nowrap"
        ]
    ]), e("text-ellipsis", [
        [
            "text-overflow",
            "ellipsis"
        ]
    ]), e("text-clip", [
        [
            "text-overflow",
            "clip"
        ]
    ]), e("hyphens-none", [
        [
            "-webkit-hyphens",
            "none"
        ],
        [
            "hyphens",
            "none"
        ]
    ]), e("hyphens-manual", [
        [
            "-webkit-hyphens",
            "manual"
        ],
        [
            "hyphens",
            "manual"
        ]
    ]), e("hyphens-auto", [
        [
            "-webkit-hyphens",
            "auto"
        ],
        [
            "hyphens",
            "auto"
        ]
    ]), e("whitespace-normal", [
        [
            "white-space",
            "normal"
        ]
    ]), e("whitespace-nowrap", [
        [
            "white-space",
            "nowrap"
        ]
    ]), e("whitespace-pre", [
        [
            "white-space",
            "pre"
        ]
    ]), e("whitespace-pre-line", [
        [
            "white-space",
            "pre-line"
        ]
    ]), e("whitespace-pre-wrap", [
        [
            "white-space",
            "pre-wrap"
        ]
    ]), e("whitespace-break-spaces", [
        [
            "white-space",
            "break-spaces"
        ]
    ]), e("text-wrap", [
        [
            "text-wrap",
            "wrap"
        ]
    ]), e("text-nowrap", [
        [
            "text-wrap",
            "nowrap"
        ]
    ]), e("text-balance", [
        [
            "text-wrap",
            "balance"
        ]
    ]), e("text-pretty", [
        [
            "text-wrap",
            "pretty"
        ]
    ]), e("break-normal", [
        [
            "overflow-wrap",
            "normal"
        ],
        [
            "word-break",
            "normal"
        ]
    ]), e("break-words", [
        [
            "overflow-wrap",
            "break-word"
        ]
    ]), e("break-all", [
        [
            "word-break",
            "break-all"
        ]
    ]), e("break-keep", [
        [
            "word-break",
            "keep-all"
        ]
    ]), e("wrap-anywhere", [
        [
            "overflow-wrap",
            "anywhere"
        ]
    ]), e("wrap-break-word", [
        [
            "overflow-wrap",
            "break-word"
        ]
    ]), e("wrap-normal", [
        [
            "overflow-wrap",
            "normal"
        ]
    ]);
    for (let [o, p] of [
        [
            "rounded",
            [
                "border-radius"
            ]
        ],
        [
            "rounded-s",
            [
                "border-start-start-radius",
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-e",
            [
                "border-start-end-radius",
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-t",
            [
                "border-top-left-radius",
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-r",
            [
                "border-top-right-radius",
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-b",
            [
                "border-bottom-right-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-l",
            [
                "border-top-left-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-ss",
            [
                "border-start-start-radius"
            ]
        ],
        [
            "rounded-se",
            [
                "border-start-end-radius"
            ]
        ],
        [
            "rounded-ee",
            [
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-es",
            [
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-tl",
            [
                "border-top-left-radius"
            ]
        ],
        [
            "rounded-tr",
            [
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-br",
            [
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-bl",
            [
                "border-bottom-left-radius"
            ]
        ]
    ])e(`${o}-none`, p.map((h)=>[
            h,
            "0"
        ])), e(`${o}-full`, p.map((h)=>[
            h,
            "calc(infinity * 1px)"
        ])), n(o, {
        themeKeys: [
            "--radius"
        ],
        handle: (h)=>p.map((A)=>l(A, h))
    });
    e("border-solid", [
        [
            "--tw-border-style",
            "solid"
        ],
        [
            "border-style",
            "solid"
        ]
    ]), e("border-dashed", [
        [
            "--tw-border-style",
            "dashed"
        ],
        [
            "border-style",
            "dashed"
        ]
    ]), e("border-dotted", [
        [
            "--tw-border-style",
            "dotted"
        ],
        [
            "border-style",
            "dotted"
        ]
    ]), e("border-double", [
        [
            "--tw-border-style",
            "double"
        ],
        [
            "border-style",
            "double"
        ]
    ]), e("border-hidden", [
        [
            "--tw-border-style",
            "hidden"
        ],
        [
            "border-style",
            "hidden"
        ]
    ]), e("border-none", [
        [
            "--tw-border-style",
            "none"
        ],
        [
            "border-style",
            "none"
        ]
    ]);
    {
        let p = function(h, A) {
            r.functional(h, (k)=>{
                if (!k.value) {
                    if (k.modifier) return;
                    let C = t.get([
                        "--default-border-width"
                    ]) ?? "1px", O = A.width(C);
                    return O ? [
                        o(),
                        ...O
                    ] : void 0;
                }
                if (k.value.kind === "arbitrary") {
                    let C = k.value.value;
                    switch(k.value.dataType ?? Y(C, [
                        "color",
                        "line-width",
                        "length"
                    ])){
                        case "line-width":
                        case "length":
                            {
                                if (k.modifier) return;
                                let N = A.width(C);
                                return N ? [
                                    o(),
                                    ...N
                                ] : void 0;
                            }
                        default:
                            return C = X(C, k.modifier, t), C === null ? void 0 : A.color(C);
                    }
                }
                {
                    let C = te(k, t, [
                        "--border-color",
                        "--color"
                    ]);
                    if (C) return A.color(C);
                }
                {
                    if (k.modifier) return;
                    let C = t.resolve(k.value.value, [
                        "--border-width"
                    ]);
                    if (C) {
                        let O = A.width(C);
                        return O ? [
                            o(),
                            ...O
                        ] : void 0;
                    }
                    if (E(k.value.value)) {
                        let O = A.width(`${k.value.value}px`);
                        return O ? [
                            o(),
                            ...O
                        ] : void 0;
                    }
                }
            }), i(h, ()=>[
                    {
                        values: [
                            "current",
                            "inherit",
                            "transparent"
                        ],
                        valueThemeKeys: [
                            "--border-color",
                            "--color"
                        ],
                        modifiers: Array.from({
                            length: 21
                        }, (k, C)=>`${C * 5}`),
                        hasDefaultValue: !0
                    },
                    {
                        values: [
                            "0",
                            "2",
                            "4",
                            "8"
                        ],
                        valueThemeKeys: [
                            "--border-width"
                        ]
                    }
                ]);
        };
        var _ = p;
        let o = ()=>I([
                $("--tw-border-style", "solid")
            ]);
        p("border", {
            width: (h)=>[
                    l("border-style", "var(--tw-border-style)"),
                    l("border-width", h)
                ],
            color: (h)=>[
                    l("border-color", h)
                ]
        }), p("border-x", {
            width: (h)=>[
                    l("border-inline-style", "var(--tw-border-style)"),
                    l("border-inline-width", h)
                ],
            color: (h)=>[
                    l("border-inline-color", h)
                ]
        }), p("border-y", {
            width: (h)=>[
                    l("border-block-style", "var(--tw-border-style)"),
                    l("border-block-width", h)
                ],
            color: (h)=>[
                    l("border-block-color", h)
                ]
        }), p("border-s", {
            width: (h)=>[
                    l("border-inline-start-style", "var(--tw-border-style)"),
                    l("border-inline-start-width", h)
                ],
            color: (h)=>[
                    l("border-inline-start-color", h)
                ]
        }), p("border-e", {
            width: (h)=>[
                    l("border-inline-end-style", "var(--tw-border-style)"),
                    l("border-inline-end-width", h)
                ],
            color: (h)=>[
                    l("border-inline-end-color", h)
                ]
        }), p("border-t", {
            width: (h)=>[
                    l("border-top-style", "var(--tw-border-style)"),
                    l("border-top-width", h)
                ],
            color: (h)=>[
                    l("border-top-color", h)
                ]
        }), p("border-r", {
            width: (h)=>[
                    l("border-right-style", "var(--tw-border-style)"),
                    l("border-right-width", h)
                ],
            color: (h)=>[
                    l("border-right-color", h)
                ]
        }), p("border-b", {
            width: (h)=>[
                    l("border-bottom-style", "var(--tw-border-style)"),
                    l("border-bottom-width", h)
                ],
            color: (h)=>[
                    l("border-bottom-color", h)
                ]
        }), p("border-l", {
            width: (h)=>[
                    l("border-left-style", "var(--tw-border-style)"),
                    l("border-left-width", h)
                ],
            color: (h)=>[
                    l("border-left-color", h)
                ]
        }), n("divide-x", {
            defaultValue: t.get([
                "--default-border-width"
            ]) ?? "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: ({ value: h })=>E(h) ? `${h}px` : null,
            handle: (h)=>[
                    I([
                        $("--tw-divide-x-reverse", "0")
                    ]),
                    M(":where(& > :not(:last-child))", [
                        l("--tw-sort", "divide-x-width"),
                        o(),
                        l("--tw-divide-x-reverse", "0"),
                        l("border-inline-style", "var(--tw-border-style)"),
                        l("border-inline-start-width", `calc(${h} * var(--tw-divide-x-reverse))`),
                        l("border-inline-end-width", `calc(${h} * calc(1 - var(--tw-divide-x-reverse)))`)
                    ])
                ]
        }), n("divide-y", {
            defaultValue: t.get([
                "--default-border-width"
            ]) ?? "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: ({ value: h })=>E(h) ? `${h}px` : null,
            handle: (h)=>[
                    I([
                        $("--tw-divide-y-reverse", "0")
                    ]),
                    M(":where(& > :not(:last-child))", [
                        l("--tw-sort", "divide-y-width"),
                        o(),
                        l("--tw-divide-y-reverse", "0"),
                        l("border-bottom-style", "var(--tw-border-style)"),
                        l("border-top-style", "var(--tw-border-style)"),
                        l("border-top-width", `calc(${h} * var(--tw-divide-y-reverse))`),
                        l("border-bottom-width", `calc(${h} * calc(1 - var(--tw-divide-y-reverse)))`)
                    ])
                ]
        }), i("divide-x", ()=>[
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("divide-y", ()=>[
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), e("divide-x-reverse", [
            ()=>I([
                    $("--tw-divide-x-reverse", "0")
                ]),
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-divide-x-reverse", "1")
                ])
        ]), e("divide-y-reverse", [
            ()=>I([
                    $("--tw-divide-y-reverse", "0")
                ]),
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-divide-y-reverse", "1")
                ])
        ]);
        for (let h of [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ])e(`divide-${h}`, [
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-sort", "divide-style"),
                    l("--tw-border-style", h),
                    l("border-style", h)
                ])
        ]);
    }
    e("bg-auto", [
        [
            "background-size",
            "auto"
        ]
    ]), e("bg-cover", [
        [
            "background-size",
            "cover"
        ]
    ]), e("bg-contain", [
        [
            "background-size",
            "contain"
        ]
    ]), n("bg-size", {
        handle (o) {
            if (o) return [
                l("background-size", o)
            ];
        }
    }), e("bg-fixed", [
        [
            "background-attachment",
            "fixed"
        ]
    ]), e("bg-local", [
        [
            "background-attachment",
            "local"
        ]
    ]), e("bg-scroll", [
        [
            "background-attachment",
            "scroll"
        ]
    ]), e("bg-top", [
        [
            "background-position",
            "top"
        ]
    ]), e("bg-top-left", [
        [
            "background-position",
            "left top"
        ]
    ]), e("bg-top-right", [
        [
            "background-position",
            "right top"
        ]
    ]), e("bg-bottom", [
        [
            "background-position",
            "bottom"
        ]
    ]), e("bg-bottom-left", [
        [
            "background-position",
            "left bottom"
        ]
    ]), e("bg-bottom-right", [
        [
            "background-position",
            "right bottom"
        ]
    ]), e("bg-left", [
        [
            "background-position",
            "left"
        ]
    ]), e("bg-right", [
        [
            "background-position",
            "right"
        ]
    ]), e("bg-center", [
        [
            "background-position",
            "center"
        ]
    ]), n("bg-position", {
        handle (o) {
            if (o) return [
                l("background-position", o)
            ];
        }
    }), e("bg-repeat", [
        [
            "background-repeat",
            "repeat"
        ]
    ]), e("bg-no-repeat", [
        [
            "background-repeat",
            "no-repeat"
        ]
    ]), e("bg-repeat-x", [
        [
            "background-repeat",
            "repeat-x"
        ]
    ]), e("bg-repeat-y", [
        [
            "background-repeat",
            "repeat-y"
        ]
    ]), e("bg-repeat-round", [
        [
            "background-repeat",
            "round"
        ]
    ]), e("bg-repeat-space", [
        [
            "background-repeat",
            "space"
        ]
    ]), e("bg-none", [
        [
            "background-image",
            "none"
        ]
    ]);
    {
        let h = function(C) {
            let O = "in oklab";
            if (C?.kind === "named") switch(C.value){
                case "longer":
                case "shorter":
                case "increasing":
                case "decreasing":
                    O = `in oklch ${C.value} hue`;
                    break;
                default:
                    O = `in ${C.value}`;
            }
            else C?.kind === "arbitrary" && (O = C.value);
            return O;
        }, A = function({ negative: C }) {
            return (O)=>{
                if (!O.value) return;
                if (O.value.kind === "arbitrary") {
                    if (O.modifier) return;
                    let U = O.value.value;
                    switch(O.value.dataType ?? Y(U, [
                        "angle"
                    ])){
                        case "angle":
                            return U = C ? `calc(${U} * -1)` : `${U}`, [
                                l("--tw-gradient-position", U),
                                l("background-image", `linear-gradient(var(--tw-gradient-stops,${U}))`)
                            ];
                        default:
                            return C ? void 0 : [
                                l("--tw-gradient-position", U),
                                l("background-image", `linear-gradient(var(--tw-gradient-stops,${U}))`)
                            ];
                    }
                }
                let N = O.value.value;
                if (!C && p.has(N)) N = p.get(N);
                else if (E(N)) N = C ? `calc(${N}deg * -1)` : `${N}deg`;
                else return;
                let T = h(O.modifier);
                return [
                    l("--tw-gradient-position", `${N}`),
                    G("@supports (background-image: linear-gradient(in lab, red, red))", [
                        l("--tw-gradient-position", `${N} ${T}`)
                    ]),
                    l("background-image", "linear-gradient(var(--tw-gradient-stops))")
                ];
            };
        }, k = function({ negative: C }) {
            return (O)=>{
                if (O.value?.kind === "arbitrary") {
                    if (O.modifier) return;
                    let U = O.value.value;
                    return [
                        l("--tw-gradient-position", U),
                        l("background-image", `conic-gradient(var(--tw-gradient-stops,${U}))`)
                    ];
                }
                let N = h(O.modifier);
                if (!O.value) return [
                    l("--tw-gradient-position", N),
                    l("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
                let T = O.value.value;
                if (E(T)) return T = C ? `calc(${T}deg * -1)` : `${T}deg`, [
                    l("--tw-gradient-position", `from ${T} ${N}`),
                    l("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
            };
        };
        var H = h, L = A, W = k;
        let o = [
            "oklab",
            "oklch",
            "srgb",
            "hsl",
            "longer",
            "shorter",
            "increasing",
            "decreasing"
        ], p = new Map([
            [
                "to-t",
                "to top"
            ],
            [
                "to-tr",
                "to top right"
            ],
            [
                "to-r",
                "to right"
            ],
            [
                "to-br",
                "to bottom right"
            ],
            [
                "to-b",
                "to bottom"
            ],
            [
                "to-bl",
                "to bottom left"
            ],
            [
                "to-l",
                "to left"
            ],
            [
                "to-tl",
                "to top left"
            ]
        ]);
        r.functional("-bg-linear", A({
            negative: !0
        })), r.functional("bg-linear", A({
            negative: !1
        })), i("bg-linear", ()=>[
                {
                    values: [
                        ...p.keys()
                    ],
                    modifiers: o
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: o
                }
            ]), r.functional("-bg-conic", k({
            negative: !0
        })), r.functional("bg-conic", k({
            negative: !1
        })), i("bg-conic", ()=>[
                {
                    hasDefaultValue: !0,
                    modifiers: o
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: o
                }
            ]), r.functional("bg-radial", (C)=>{
            if (!C.value) {
                let O = h(C.modifier);
                return [
                    l("--tw-gradient-position", O),
                    l("background-image", "radial-gradient(var(--tw-gradient-stops))")
                ];
            }
            if (C.value.kind === "arbitrary") {
                if (C.modifier) return;
                let O = C.value.value;
                return [
                    l("--tw-gradient-position", O),
                    l("background-image", `radial-gradient(var(--tw-gradient-stops,${O}))`)
                ];
            }
        }), i("bg-radial", ()=>[
                {
                    hasDefaultValue: !0,
                    modifiers: o
                }
            ]);
    }
    r.functional("bg", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? Y(p, [
                    "image",
                    "color",
                    "percentage",
                    "position",
                    "bg-size",
                    "length",
                    "url"
                ])){
                    case "percentage":
                    case "position":
                        return o.modifier ? void 0 : [
                            l("background-position", p)
                        ];
                    case "bg-size":
                    case "length":
                    case "size":
                        return o.modifier ? void 0 : [
                            l("background-size", p)
                        ];
                    case "image":
                    case "url":
                        return o.modifier ? void 0 : [
                            l("background-image", p)
                        ];
                    default:
                        return p = X(p, o.modifier, t), p === null ? void 0 : [
                            l("background-color", p)
                        ];
                }
            }
            {
                let p = te(o, t, [
                    "--background-color",
                    "--color"
                ]);
                if (p) return [
                    l("background-color", p)
                ];
            }
            {
                if (o.modifier) return;
                let p = t.resolve(o.value.value, [
                    "--background-image"
                ]);
                if (p) return [
                    l("background-image", p)
                ];
            }
        }
    }), i("bg", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--background-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [],
                valueThemeKeys: [
                    "--background-image"
                ]
            }
        ]);
    let v = ()=>I([
            $("--tw-gradient-position"),
            $("--tw-gradient-from", "#0000", "<color>"),
            $("--tw-gradient-via", "#0000", "<color>"),
            $("--tw-gradient-to", "#0000", "<color>"),
            $("--tw-gradient-stops"),
            $("--tw-gradient-via-stops"),
            $("--tw-gradient-from-position", "0%", "<length-percentage>"),
            $("--tw-gradient-via-position", "50%", "<length-percentage>"),
            $("--tw-gradient-to-position", "100%", "<length-percentage>")
        ]);
    function x(o, p) {
        r.functional(o, (h)=>{
            if (h.value) {
                if (h.value.kind === "arbitrary") {
                    let A = h.value.value;
                    switch(h.value.dataType ?? Y(A, [
                        "color",
                        "length",
                        "percentage"
                    ])){
                        case "length":
                        case "percentage":
                            return h.modifier ? void 0 : p.position(A);
                        default:
                            return A = X(A, h.modifier, t), A === null ? void 0 : p.color(A);
                    }
                }
                {
                    let A = te(h, t, [
                        "--background-color",
                        "--color"
                    ]);
                    if (A) return p.color(A);
                }
                {
                    if (h.modifier) return;
                    let A = t.resolve(h.value.value, [
                        "--gradient-color-stop-positions"
                    ]);
                    if (A) return p.position(A);
                    if (h.value.value[h.value.value.length - 1] === "%" && E(h.value.value.slice(0, -1))) return p.position(h.value.value);
                }
            }
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                },
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ]);
    }
    x("from", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-from"),
                l("--tw-gradient-from", o),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-from-position", o)
            ]
    }), e("via-none", [
        [
            "--tw-gradient-via-stops",
            "initial"
        ]
    ]), x("via", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-via"),
                l("--tw-gradient-via", o),
                l("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops)")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-via-position", o)
            ]
    }), x("to", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-to"),
                l("--tw-gradient-to", o),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-to-position", o)
            ]
    }), e("mask-none", [
        [
            "mask-image",
            "none"
        ]
    ]), r.functional("mask", (o)=>{
        if (!o.value || o.modifier || o.value.kind !== "arbitrary") return;
        let p = o.value.value;
        switch(o.value.dataType ?? Y(p, [
            "image",
            "percentage",
            "position",
            "bg-size",
            "length",
            "url"
        ])){
            case "percentage":
            case "position":
                return o.modifier ? void 0 : [
                    l("mask-position", p)
                ];
            case "bg-size":
            case "length":
            case "size":
                return [
                    l("mask-size", p)
                ];
            case "image":
            case "url":
            default:
                return [
                    l("mask-image", p)
                ];
        }
    }), e("mask-add", [
        [
            "mask-composite",
            "add"
        ]
    ]), e("mask-subtract", [
        [
            "mask-composite",
            "subtract"
        ]
    ]), e("mask-intersect", [
        [
            "mask-composite",
            "intersect"
        ]
    ]), e("mask-exclude", [
        [
            "mask-composite",
            "exclude"
        ]
    ]), e("mask-alpha", [
        [
            "mask-mode",
            "alpha"
        ]
    ]), e("mask-luminance", [
        [
            "mask-mode",
            "luminance"
        ]
    ]), e("mask-match", [
        [
            "mask-mode",
            "match-source"
        ]
    ]), e("mask-type-alpha", [
        [
            "mask-type",
            "alpha"
        ]
    ]), e("mask-type-luminance", [
        [
            "mask-type",
            "luminance"
        ]
    ]), e("mask-auto", [
        [
            "mask-size",
            "auto"
        ]
    ]), e("mask-cover", [
        [
            "mask-size",
            "cover"
        ]
    ]), e("mask-contain", [
        [
            "mask-size",
            "contain"
        ]
    ]), n("mask-size", {
        handle (o) {
            if (o) return [
                l("mask-size", o)
            ];
        }
    }), e("mask-top", [
        [
            "mask-position",
            "top"
        ]
    ]), e("mask-top-left", [
        [
            "mask-position",
            "left top"
        ]
    ]), e("mask-top-right", [
        [
            "mask-position",
            "right top"
        ]
    ]), e("mask-bottom", [
        [
            "mask-position",
            "bottom"
        ]
    ]), e("mask-bottom-left", [
        [
            "mask-position",
            "left bottom"
        ]
    ]), e("mask-bottom-right", [
        [
            "mask-position",
            "right bottom"
        ]
    ]), e("mask-left", [
        [
            "mask-position",
            "left"
        ]
    ]), e("mask-right", [
        [
            "mask-position",
            "right"
        ]
    ]), e("mask-center", [
        [
            "mask-position",
            "center"
        ]
    ]), n("mask-position", {
        handle (o) {
            if (o) return [
                l("mask-position", o)
            ];
        }
    }), e("mask-repeat", [
        [
            "mask-repeat",
            "repeat"
        ]
    ]), e("mask-no-repeat", [
        [
            "mask-repeat",
            "no-repeat"
        ]
    ]), e("mask-repeat-x", [
        [
            "mask-repeat",
            "repeat-x"
        ]
    ]), e("mask-repeat-y", [
        [
            "mask-repeat",
            "repeat-y"
        ]
    ]), e("mask-repeat-round", [
        [
            "mask-repeat",
            "round"
        ]
    ]), e("mask-repeat-space", [
        [
            "mask-repeat",
            "space"
        ]
    ]), e("mask-clip-border", [
        [
            "mask-clip",
            "border-box"
        ]
    ]), e("mask-clip-padding", [
        [
            "mask-clip",
            "padding-box"
        ]
    ]), e("mask-clip-content", [
        [
            "mask-clip",
            "content-box"
        ]
    ]), e("mask-clip-fill", [
        [
            "mask-clip",
            "fill-box"
        ]
    ]), e("mask-clip-stroke", [
        [
            "mask-clip",
            "stroke-box"
        ]
    ]), e("mask-clip-view", [
        [
            "mask-clip",
            "view-box"
        ]
    ]), e("mask-no-clip", [
        [
            "mask-clip",
            "no-clip"
        ]
    ]), e("mask-origin-border", [
        [
            "mask-origin",
            "border-box"
        ]
    ]), e("mask-origin-padding", [
        [
            "mask-origin",
            "padding-box"
        ]
    ]), e("mask-origin-content", [
        [
            "mask-origin",
            "content-box"
        ]
    ]), e("mask-origin-fill", [
        [
            "mask-origin",
            "fill-box"
        ]
    ]), e("mask-origin-stroke", [
        [
            "mask-origin",
            "stroke-box"
        ]
    ]), e("mask-origin-view", [
        [
            "mask-origin",
            "view-box"
        ]
    ]);
    let y1 = ()=>I([
            $("--tw-mask-linear", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-radial", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-conic", "linear-gradient(#fff, #fff)")
        ]);
    function V(o, p) {
        r.functional(o, (h)=>{
            if (h.value) {
                if (h.value.kind === "arbitrary") {
                    let A = h.value.value;
                    switch(h.value.dataType ?? Y(A, [
                        "length",
                        "percentage",
                        "color"
                    ])){
                        case "color":
                            return A = X(A, h.modifier, t), A === null ? void 0 : p.color(A);
                        case "percentage":
                            return h.modifier || !E(A.slice(0, -1)) ? void 0 : p.position(A);
                        default:
                            return h.modifier ? void 0 : p.position(A);
                    }
                }
                {
                    let A = te(h, t, [
                        "--background-color",
                        "--color"
                    ]);
                    if (A) return p.color(A);
                }
                {
                    if (h.modifier) return;
                    let A = Y(h.value.value, [
                        "number",
                        "percentage"
                    ]);
                    if (!A) return;
                    switch(A){
                        case "number":
                            {
                                let k = t.resolve(null, [
                                    "--spacing"
                                ]);
                                return !k || !xe(h.value.value) ? void 0 : p.position(`calc(${k} * ${h.value.value})`);
                            }
                        case "percentage":
                            return E(h.value.value.slice(0, -1)) ? p.position(h.value.value) : void 0;
                        default:
                            return;
                    }
                }
            }
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                },
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ]), i(o, ()=>[
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`)
                },
                {
                    values: t.get([
                        "--spacing"
                    ]) ? st : []
                },
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                }
            ]);
    }
    let b = ()=>I([
            $("--tw-mask-left", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-right", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-bottom", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-top", "linear-gradient(#fff, #fff)")
        ]);
    function S(o, p, h) {
        V(o, {
            color (A) {
                let k = [
                    y1(),
                    b(),
                    l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    l("mask-composite", "intersect"),
                    l("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for (let C of [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ])h[C] && (k.push(l(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), k.push(I([
                    $(`--tw-mask-${C}-from-position`, "0%"),
                    $(`--tw-mask-${C}-to-position`, "100%"),
                    $(`--tw-mask-${C}-from-color`, "black"),
                    $(`--tw-mask-${C}-to-color`, "transparent")
                ])), k.push(l(`--tw-mask-${C}-${p}-color`, A)));
                return k;
            },
            position (A) {
                let k = [
                    y1(),
                    b(),
                    l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    l("mask-composite", "intersect"),
                    l("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for (let C of [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ])h[C] && (k.push(l(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), k.push(I([
                    $(`--tw-mask-${C}-from-position`, "0%"),
                    $(`--tw-mask-${C}-to-position`, "100%"),
                    $(`--tw-mask-${C}-from-color`, "black"),
                    $(`--tw-mask-${C}-to-color`, "transparent")
                ])), k.push(l(`--tw-mask-${C}-${p}-position`, A)));
                return k;
            }
        });
    }
    S("mask-x-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), S("mask-x-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), S("mask-y-from", "from", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-y-to", "to", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-t-from", "from", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), S("mask-t-to", "to", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), S("mask-r-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), S("mask-r-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), S("mask-b-from", "from", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-b-to", "to", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-l-from", "from", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    }), S("mask-l-to", "to", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    });
    let R = ()=>I([
            $("--tw-mask-linear-position", "0deg"),
            $("--tw-mask-linear-from-position", "0%"),
            $("--tw-mask-linear-to-position", "100%"),
            $("--tw-mask-linear-from-color", "black"),
            $("--tw-mask-linear-to-color", "transparent")
        ]);
    n("mask-linear", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue (o) {
            return E(o.value) ? `calc(1deg * ${o.value})` : null;
        },
        handleNegativeBareValue (o) {
            return E(o.value) ? `calc(1deg * -${o.value})` : null;
        },
        handle: (o)=>[
                y1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"),
                l("--tw-mask-linear-position", o)
            ]
    }), i("mask-linear", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ]), V("mask-linear-from", {
        color: (o)=>[
                y1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-from-color", o)
            ],
        position: (o)=>[
                y1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-from-position", o)
            ]
    }), V("mask-linear-to", {
        color: (o)=>[
                y1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-to-color", o)
            ],
        position: (o)=>[
                y1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-to-position", o)
            ]
    });
    let j = ()=>I([
            $("--tw-mask-radial-from-position", "0%"),
            $("--tw-mask-radial-to-position", "100%"),
            $("--tw-mask-radial-from-color", "black"),
            $("--tw-mask-radial-to-color", "transparent"),
            $("--tw-mask-radial-shape", "ellipse"),
            $("--tw-mask-radial-size", "farthest-corner"),
            $("--tw-mask-radial-position", "center")
        ]);
    e("mask-circle", [
        [
            "--tw-mask-radial-shape",
            "circle"
        ]
    ]), e("mask-ellipse", [
        [
            "--tw-mask-radial-shape",
            "ellipse"
        ]
    ]), e("mask-radial-closest-side", [
        [
            "--tw-mask-radial-size",
            "closest-side"
        ]
    ]), e("mask-radial-farthest-side", [
        [
            "--tw-mask-radial-size",
            "farthest-side"
        ]
    ]), e("mask-radial-closest-corner", [
        [
            "--tw-mask-radial-size",
            "closest-corner"
        ]
    ]), e("mask-radial-farthest-corner", [
        [
            "--tw-mask-radial-size",
            "farthest-corner"
        ]
    ]), e("mask-radial-at-top", [
        [
            "--tw-mask-radial-position",
            "top"
        ]
    ]), e("mask-radial-at-top-left", [
        [
            "--tw-mask-radial-position",
            "top left"
        ]
    ]), e("mask-radial-at-top-right", [
        [
            "--tw-mask-radial-position",
            "top right"
        ]
    ]), e("mask-radial-at-bottom", [
        [
            "--tw-mask-radial-position",
            "bottom"
        ]
    ]), e("mask-radial-at-bottom-left", [
        [
            "--tw-mask-radial-position",
            "bottom left"
        ]
    ]), e("mask-radial-at-bottom-right", [
        [
            "--tw-mask-radial-position",
            "bottom right"
        ]
    ]), e("mask-radial-at-left", [
        [
            "--tw-mask-radial-position",
            "left"
        ]
    ]), e("mask-radial-at-right", [
        [
            "--tw-mask-radial-position",
            "right"
        ]
    ]), e("mask-radial-at-center", [
        [
            "--tw-mask-radial-position",
            "center"
        ]
    ]), n("mask-radial-at", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: (o)=>[
                l("--tw-mask-radial-position", o)
            ]
    }), n("mask-radial", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: (o)=>[
                y1(),
                j(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"),
                l("--tw-mask-radial-size", o)
            ]
    }), V("mask-radial-from", {
        color: (o)=>[
                y1(),
                j(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-from-color", o)
            ],
        position: (o)=>[
                y1(),
                j(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-from-position", o)
            ]
    }), V("mask-radial-to", {
        color: (o)=>[
                y1(),
                j(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-to-color", o)
            ],
        position: (o)=>[
                y1(),
                j(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-to-position", o)
            ]
    });
    let P = ()=>I([
            $("--tw-mask-conic-position", "0deg"),
            $("--tw-mask-conic-from-position", "0%"),
            $("--tw-mask-conic-to-position", "100%"),
            $("--tw-mask-conic-from-color", "black"),
            $("--tw-mask-conic-to-color", "transparent")
        ]);
    n("mask-conic", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue (o) {
            return E(o.value) ? `calc(1deg * ${o.value})` : null;
        },
        handleNegativeBareValue (o) {
            return E(o.value) ? `calc(1deg * -${o.value})` : null;
        },
        handle: (o)=>[
                y1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"),
                l("--tw-mask-conic-position", o)
            ]
    }), i("mask-conic", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ]), V("mask-conic-from", {
        color: (o)=>[
                y1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-from-color", o)
            ],
        position: (o)=>[
                y1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-from-position", o)
            ]
    }), V("mask-conic-to", {
        color: (o)=>[
                y1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-to-color", o)
            ],
        position: (o)=>[
                y1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-to-position", o)
            ]
    }), e("box-decoration-slice", [
        [
            "-webkit-box-decoration-break",
            "slice"
        ],
        [
            "box-decoration-break",
            "slice"
        ]
    ]), e("box-decoration-clone", [
        [
            "-webkit-box-decoration-break",
            "clone"
        ],
        [
            "box-decoration-break",
            "clone"
        ]
    ]), e("bg-clip-text", [
        [
            "background-clip",
            "text"
        ]
    ]), e("bg-clip-border", [
        [
            "background-clip",
            "border-box"
        ]
    ]), e("bg-clip-padding", [
        [
            "background-clip",
            "padding-box"
        ]
    ]), e("bg-clip-content", [
        [
            "background-clip",
            "content-box"
        ]
    ]), e("bg-origin-border", [
        [
            "background-origin",
            "border-box"
        ]
    ]), e("bg-origin-padding", [
        [
            "background-origin",
            "padding-box"
        ]
    ]), e("bg-origin-content", [
        [
            "background-origin",
            "content-box"
        ]
    ]);
    for (let o of [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
    ])e(`bg-blend-${o}`, [
        [
            "background-blend-mode",
            o
        ]
    ]), e(`mix-blend-${o}`, [
        [
            "mix-blend-mode",
            o
        ]
    ]);
    e("mix-blend-plus-darker", [
        [
            "mix-blend-mode",
            "plus-darker"
        ]
    ]), e("mix-blend-plus-lighter", [
        [
            "mix-blend-mode",
            "plus-lighter"
        ]
    ]), e("fill-none", [
        [
            "fill",
            "none"
        ]
    ]), r.functional("fill", (o)=>{
        if (!o.value) return;
        if (o.value.kind === "arbitrary") {
            let h = X(o.value.value, o.modifier, t);
            return h === null ? void 0 : [
                l("fill", h)
            ];
        }
        let p = te(o, t, [
            "--fill",
            "--color"
        ]);
        if (p) return [
            l("fill", p)
        ];
    }), i("fill", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--fill",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            }
        ]), e("stroke-none", [
        [
            "stroke",
            "none"
        ]
    ]), r.functional("stroke", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? Y(p, [
                    "color",
                    "number",
                    "length",
                    "percentage"
                ])){
                    case "number":
                    case "length":
                    case "percentage":
                        return o.modifier ? void 0 : [
                            l("stroke-width", p)
                        ];
                    default:
                        return p = X(o.value.value, o.modifier, t), p === null ? void 0 : [
                            l("stroke", p)
                        ];
                }
            }
            {
                let p = te(o, t, [
                    "--stroke",
                    "--color"
                ]);
                if (p) return [
                    l("stroke", p)
                ];
            }
            {
                let p = t.resolve(o.value.value, [
                    "--stroke-width"
                ]);
                if (p) return [
                    l("stroke-width", p)
                ];
                if (E(o.value.value)) return [
                    l("stroke-width", o.value.value)
                ];
            }
        }
    }), i("stroke", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--stroke",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                valueThemeKeys: [
                    "--stroke-width"
                ]
            }
        ]), e("object-contain", [
        [
            "object-fit",
            "contain"
        ]
    ]), e("object-cover", [
        [
            "object-fit",
            "cover"
        ]
    ]), e("object-fill", [
        [
            "object-fit",
            "fill"
        ]
    ]), e("object-none", [
        [
            "object-fit",
            "none"
        ]
    ]), e("object-scale-down", [
        [
            "object-fit",
            "scale-down"
        ]
    ]), e("object-top", [
        [
            "object-position",
            "top"
        ]
    ]), e("object-top-left", [
        [
            "object-position",
            "left top"
        ]
    ]), e("object-top-right", [
        [
            "object-position",
            "right top"
        ]
    ]), e("object-bottom", [
        [
            "object-position",
            "bottom"
        ]
    ]), e("object-bottom-left", [
        [
            "object-position",
            "left bottom"
        ]
    ]), e("object-bottom-right", [
        [
            "object-position",
            "right bottom"
        ]
    ]), e("object-left", [
        [
            "object-position",
            "left"
        ]
    ]), e("object-right", [
        [
            "object-position",
            "right"
        ]
    ]), e("object-center", [
        [
            "object-position",
            "center"
        ]
    ]), n("object", {
        themeKeys: [
            "--object-position"
        ],
        handle: (o)=>[
                l("object-position", o)
            ]
    });
    for (let [o, p] of [
        [
            "p",
            "padding"
        ],
        [
            "px",
            "padding-inline"
        ],
        [
            "py",
            "padding-block"
        ],
        [
            "ps",
            "padding-inline-start"
        ],
        [
            "pe",
            "padding-inline-end"
        ],
        [
            "pt",
            "padding-top"
        ],
        [
            "pr",
            "padding-right"
        ],
        [
            "pb",
            "padding-bottom"
        ],
        [
            "pl",
            "padding-left"
        ]
    ])a(o, [
        "--padding",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ]);
    e("text-left", [
        [
            "text-align",
            "left"
        ]
    ]), e("text-center", [
        [
            "text-align",
            "center"
        ]
    ]), e("text-right", [
        [
            "text-align",
            "right"
        ]
    ]), e("text-justify", [
        [
            "text-align",
            "justify"
        ]
    ]), e("text-start", [
        [
            "text-align",
            "start"
        ]
    ]), e("text-end", [
        [
            "text-align",
            "end"
        ]
    ]), a("indent", [
        "--text-indent",
        "--spacing"
    ], (o)=>[
            l("text-indent", o)
        ], {
        supportsNegative: !0
    }), e("align-baseline", [
        [
            "vertical-align",
            "baseline"
        ]
    ]), e("align-top", [
        [
            "vertical-align",
            "top"
        ]
    ]), e("align-middle", [
        [
            "vertical-align",
            "middle"
        ]
    ]), e("align-bottom", [
        [
            "vertical-align",
            "bottom"
        ]
    ]), e("align-text-top", [
        [
            "vertical-align",
            "text-top"
        ]
    ]), e("align-text-bottom", [
        [
            "vertical-align",
            "text-bottom"
        ]
    ]), e("align-sub", [
        [
            "vertical-align",
            "sub"
        ]
    ]), e("align-super", [
        [
            "vertical-align",
            "super"
        ]
    ]), n("align", {
        themeKeys: [],
        handle: (o)=>[
                l("vertical-align", o)
            ]
    }), r.functional("font", (o)=>{
        if (!(!o.value || o.modifier)) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? Y(p, [
                    "number",
                    "generic-name",
                    "family-name"
                ])){
                    case "generic-name":
                    case "family-name":
                        return [
                            l("font-family", p)
                        ];
                    default:
                        return [
                            I([
                                $("--tw-font-weight")
                            ]),
                            l("--tw-font-weight", p),
                            l("font-weight", p)
                        ];
                }
            }
            {
                let p = t.resolveWith(o.value.value, [
                    "--font"
                ], [
                    "--font-feature-settings",
                    "--font-variation-settings"
                ]);
                if (p) {
                    let [h, A = {}] = p;
                    return [
                        l("font-family", h),
                        l("font-feature-settings", A["--font-feature-settings"]),
                        l("font-variation-settings", A["--font-variation-settings"])
                    ];
                }
            }
            {
                let p = t.resolve(o.value.value, [
                    "--font-weight"
                ]);
                if (p) return [
                    I([
                        $("--tw-font-weight")
                    ]),
                    l("--tw-font-weight", p),
                    l("font-weight", p)
                ];
            }
        }
    }), i("font", ()=>[
            {
                values: [],
                valueThemeKeys: [
                    "--font"
                ]
            },
            {
                values: [],
                valueThemeKeys: [
                    "--font-weight"
                ]
            }
        ]), e("uppercase", [
        [
            "text-transform",
            "uppercase"
        ]
    ]), e("lowercase", [
        [
            "text-transform",
            "lowercase"
        ]
    ]), e("capitalize", [
        [
            "text-transform",
            "capitalize"
        ]
    ]), e("normal-case", [
        [
            "text-transform",
            "none"
        ]
    ]), e("italic", [
        [
            "font-style",
            "italic"
        ]
    ]), e("not-italic", [
        [
            "font-style",
            "normal"
        ]
    ]), e("underline", [
        [
            "text-decoration-line",
            "underline"
        ]
    ]), e("overline", [
        [
            "text-decoration-line",
            "overline"
        ]
    ]), e("line-through", [
        [
            "text-decoration-line",
            "line-through"
        ]
    ]), e("no-underline", [
        [
            "text-decoration-line",
            "none"
        ]
    ]), e("font-stretch-normal", [
        [
            "font-stretch",
            "normal"
        ]
    ]), e("font-stretch-ultra-condensed", [
        [
            "font-stretch",
            "ultra-condensed"
        ]
    ]), e("font-stretch-extra-condensed", [
        [
            "font-stretch",
            "extra-condensed"
        ]
    ]), e("font-stretch-condensed", [
        [
            "font-stretch",
            "condensed"
        ]
    ]), e("font-stretch-semi-condensed", [
        [
            "font-stretch",
            "semi-condensed"
        ]
    ]), e("font-stretch-semi-expanded", [
        [
            "font-stretch",
            "semi-expanded"
        ]
    ]), e("font-stretch-expanded", [
        [
            "font-stretch",
            "expanded"
        ]
    ]), e("font-stretch-extra-expanded", [
        [
            "font-stretch",
            "extra-expanded"
        ]
    ]), e("font-stretch-ultra-expanded", [
        [
            "font-stretch",
            "ultra-expanded"
        ]
    ]), n("font-stretch", {
        handleBareValue: ({ value: o })=>{
            if (!o.endsWith("%")) return null;
            let p = Number(o.slice(0, -1));
            return !E(p) || Number.isNaN(p) || p < 50 || p > 200 ? null : o;
        },
        handle: (o)=>[
                l("font-stretch", o)
            ]
    }), i("font-stretch", ()=>[
            {
                values: [
                    "50%",
                    "75%",
                    "90%",
                    "95%",
                    "100%",
                    "105%",
                    "110%",
                    "125%",
                    "150%",
                    "200%"
                ]
            }
        ]), s("placeholder", {
        themeKeys: [
            "--background-color",
            "--color"
        ],
        handle: (o)=>[
                M("&::placeholder", [
                    l("--tw-sort", "placeholder-color"),
                    l("color", o)
                ])
            ]
    }), e("decoration-solid", [
        [
            "text-decoration-style",
            "solid"
        ]
    ]), e("decoration-double", [
        [
            "text-decoration-style",
            "double"
        ]
    ]), e("decoration-dotted", [
        [
            "text-decoration-style",
            "dotted"
        ]
    ]), e("decoration-dashed", [
        [
            "text-decoration-style",
            "dashed"
        ]
    ]), e("decoration-wavy", [
        [
            "text-decoration-style",
            "wavy"
        ]
    ]), e("decoration-auto", [
        [
            "text-decoration-thickness",
            "auto"
        ]
    ]), e("decoration-from-font", [
        [
            "text-decoration-thickness",
            "from-font"
        ]
    ]), r.functional("decoration", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? Y(p, [
                    "color",
                    "length",
                    "percentage"
                ])){
                    case "length":
                    case "percentage":
                        return o.modifier ? void 0 : [
                            l("text-decoration-thickness", p)
                        ];
                    default:
                        return p = X(p, o.modifier, t), p === null ? void 0 : [
                            l("text-decoration-color", p)
                        ];
                }
            }
            {
                let p = t.resolve(o.value.value, [
                    "--text-decoration-thickness"
                ]);
                if (p) return o.modifier ? void 0 : [
                    l("text-decoration-thickness", p)
                ];
                if (E(o.value.value)) return o.modifier ? void 0 : [
                    l("text-decoration-thickness", `${o.value.value}px`)
                ];
            }
            {
                let p = te(o, t, [
                    "--text-decoration-color",
                    "--color"
                ]);
                if (p) return [
                    l("text-decoration-color", p)
                ];
            }
        }
    }), i("decoration", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-decoration-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2"
                ],
                valueThemeKeys: [
                    "--text-decoration-thickness"
                ]
            }
        ]), e("animate-none", [
        [
            "animation",
            "none"
        ]
    ]), n("animate", {
        themeKeys: [
            "--animate"
        ],
        handle: (o)=>[
                l("animation", o)
            ]
    });
    {
        let o = [
            "var(--tw-blur,)",
            "var(--tw-brightness,)",
            "var(--tw-contrast,)",
            "var(--tw-grayscale,)",
            "var(--tw-hue-rotate,)",
            "var(--tw-invert,)",
            "var(--tw-saturate,)",
            "var(--tw-sepia,)",
            "var(--tw-drop-shadow,)"
        ].join(" "), p = [
            "var(--tw-backdrop-blur,)",
            "var(--tw-backdrop-brightness,)",
            "var(--tw-backdrop-contrast,)",
            "var(--tw-backdrop-grayscale,)",
            "var(--tw-backdrop-hue-rotate,)",
            "var(--tw-backdrop-invert,)",
            "var(--tw-backdrop-opacity,)",
            "var(--tw-backdrop-saturate,)",
            "var(--tw-backdrop-sepia,)"
        ].join(" "), h = ()=>I([
                $("--tw-blur"),
                $("--tw-brightness"),
                $("--tw-contrast"),
                $("--tw-grayscale"),
                $("--tw-hue-rotate"),
                $("--tw-invert"),
                $("--tw-opacity"),
                $("--tw-saturate"),
                $("--tw-sepia"),
                $("--tw-drop-shadow"),
                $("--tw-drop-shadow-color"),
                $("--tw-drop-shadow-alpha", "100%", "<percentage>"),
                $("--tw-drop-shadow-size")
            ]), A = ()=>I([
                $("--tw-backdrop-blur"),
                $("--tw-backdrop-brightness"),
                $("--tw-backdrop-contrast"),
                $("--tw-backdrop-grayscale"),
                $("--tw-backdrop-hue-rotate"),
                $("--tw-backdrop-invert"),
                $("--tw-backdrop-opacity"),
                $("--tw-backdrop-saturate"),
                $("--tw-backdrop-sepia")
            ]);
        r.functional("filter", (k)=>{
            if (!k.modifier) {
                if (k.value === null) return [
                    h(),
                    l("filter", o)
                ];
                if (k.value.kind === "arbitrary") return [
                    l("filter", k.value.value)
                ];
                switch(k.value.value){
                    case "none":
                        return [
                            l("filter", "none")
                        ];
                }
            }
        }), r.functional("backdrop-filter", (k)=>{
            if (!k.modifier) {
                if (k.value === null) return [
                    A(),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ];
                if (k.value.kind === "arbitrary") return [
                    l("-webkit-backdrop-filter", k.value.value),
                    l("backdrop-filter", k.value.value)
                ];
                switch(k.value.value){
                    case "none":
                        return [
                            l("-webkit-backdrop-filter", "none"),
                            l("backdrop-filter", "none")
                        ];
                }
            }
        }), n("blur", {
            themeKeys: [
                "--blur"
            ],
            handle: (k)=>[
                    h(),
                    l("--tw-blur", `blur(${k})`),
                    l("filter", o)
                ]
        }), e("blur-none", [
            h,
            [
                "--tw-blur",
                " "
            ],
            [
                "filter",
                o
            ]
        ]), n("backdrop-blur", {
            themeKeys: [
                "--backdrop-blur",
                "--blur"
            ],
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-blur", `blur(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), e("backdrop-blur-none", [
            A,
            [
                "--tw-backdrop-blur",
                " "
            ],
            [
                "-webkit-backdrop-filter",
                p
            ],
            [
                "backdrop-filter",
                p
            ]
        ]), n("brightness", {
            themeKeys: [
                "--brightness"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    h(),
                    l("--tw-brightness", `brightness(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-brightness", {
            themeKeys: [
                "--backdrop-brightness",
                "--brightness"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-brightness", `brightness(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("brightness", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--brightness"
                    ]
                }
            ]), i("backdrop-brightness", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-brightness",
                        "--brightness"
                    ]
                }
            ]), n("contrast", {
            themeKeys: [
                "--contrast"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    h(),
                    l("--tw-contrast", `contrast(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-contrast", {
            themeKeys: [
                "--backdrop-contrast",
                "--contrast"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-contrast", `contrast(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("contrast", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--contrast"
                    ]
                }
            ]), i("backdrop-contrast", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-contrast",
                        "--contrast"
                    ]
                }
            ]), n("grayscale", {
            themeKeys: [
                "--grayscale"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    h(),
                    l("--tw-grayscale", `grayscale(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-grayscale", {
            themeKeys: [
                "--backdrop-grayscale",
                "--grayscale"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-grayscale", `grayscale(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("grayscale", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-grayscale", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-grayscale",
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ]), n("hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--hue-rotate"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}deg` : null,
            handle: (k)=>[
                    h(),
                    l("--tw-hue-rotate", `hue-rotate(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--backdrop-hue-rotate",
                "--hue-rotate"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}deg` : null,
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-hue-rotate", `hue-rotate(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("hue-rotate", ()=>[
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--hue-rotate"
                    ]
                }
            ]), i("backdrop-hue-rotate", ()=>[
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--backdrop-hue-rotate",
                        "--hue-rotate"
                    ]
                }
            ]), n("invert", {
            themeKeys: [
                "--invert"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    h(),
                    l("--tw-invert", `invert(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-invert", {
            themeKeys: [
                "--backdrop-invert",
                "--invert"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-invert", `invert(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("invert", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-invert", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-invert",
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ]), n("saturate", {
            themeKeys: [
                "--saturate"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    h(),
                    l("--tw-saturate", `saturate(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-saturate", {
            themeKeys: [
                "--backdrop-saturate",
                "--saturate"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-saturate", `saturate(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("saturate", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--saturate"
                    ]
                }
            ]), i("backdrop-saturate", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-saturate",
                        "--saturate"
                    ]
                }
            ]), n("sepia", {
            themeKeys: [
                "--sepia"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    h(),
                    l("--tw-sepia", `sepia(${k})`),
                    l("filter", o)
                ]
        }), n("backdrop-sepia", {
            themeKeys: [
                "--backdrop-sepia",
                "--sepia"
            ],
            handleBareValue: ({ value: k })=>E(k) ? `${k}%` : null,
            defaultValue: "100%",
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-sepia", `sepia(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("sepia", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-sepia", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-sepia",
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ]), e("drop-shadow-none", [
            h,
            [
                "--tw-drop-shadow",
                " "
            ],
            [
                "filter",
                o
            ]
        ]), r.functional("drop-shadow", (k)=>{
            let C;
            if (k.modifier && (k.modifier.kind === "arbitrary" ? C = k.modifier.value : E(k.modifier.value) && (C = `${k.modifier.value}%`)), !k.value) {
                let O = t.get([
                    "--drop-shadow"
                ]), N = t.resolve(null, [
                    "--drop-shadow"
                ]);
                return O === null || N === null ? void 0 : [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...at("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", K(N, ",").map((T)=>`drop-shadow(${T})`).join(" ")),
                    l("filter", o)
                ];
            }
            if (k.value.kind === "arbitrary") {
                let O = k.value.value;
                switch(k.value.dataType ?? Y(O, [
                    "color"
                ])){
                    case "color":
                        return O = X(O, k.modifier, t), O === null ? void 0 : [
                            h(),
                            l("--tw-drop-shadow-color", Z(O, "var(--tw-drop-shadow-alpha)")),
                            l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                        ];
                    default:
                        return k.modifier && !C ? void 0 : [
                            h(),
                            l("--tw-drop-shadow-alpha", C),
                            ...at("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                            l("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                            l("filter", o)
                        ];
                }
            }
            {
                let O = t.get([
                    `--drop-shadow-${k.value.value}`
                ]), N = t.resolve(k.value.value, [
                    "--drop-shadow"
                ]);
                if (O && N) return k.modifier && !C ? void 0 : C ? [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...at("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                    l("filter", o)
                ] : [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...at("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", K(N, ",").map((T)=>`drop-shadow(${T})`).join(" ")),
                    l("filter", o)
                ];
            }
            {
                let O = te(k, t, [
                    "--drop-shadow-color",
                    "--color"
                ]);
                if (O) return O === "inherit" ? [
                    h(),
                    l("--tw-drop-shadow-color", "inherit"),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ] : [
                    h(),
                    l("--tw-drop-shadow-color", Z(O, "var(--tw-drop-shadow-alpha)")),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ];
            }
        }), i("drop-shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--drop-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (k, C)=>`${C * 5}`)
                },
                {
                    valueThemeKeys: [
                        "--drop-shadow"
                    ]
                }
            ]), n("backdrop-opacity", {
            themeKeys: [
                "--backdrop-opacity",
                "--opacity"
            ],
            handleBareValue: ({ value: k })=>lt(k) ? `${k}%` : null,
            handle: (k)=>[
                    A(),
                    l("--tw-backdrop-opacity", `opacity(${k})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("backdrop-opacity", ()=>[
                {
                    values: Array.from({
                        length: 21
                    }, (k, C)=>`${C * 5}`),
                    valueThemeKeys: [
                        "--backdrop-opacity",
                        "--opacity"
                    ]
                }
            ]);
    }
    {
        let o = `var(--tw-ease, ${t.resolve(null, [
            "--default-transition-timing-function"
        ]) ?? "ease"})`, p = `var(--tw-duration, ${t.resolve(null, [
            "--default-transition-duration"
        ]) ?? "0s"})`;
        e("transition-none", [
            [
                "transition-property",
                "none"
            ]
        ]), e("transition-all", [
            [
                "transition-property",
                "all"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-colors", [
            [
                "transition-property",
                "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-opacity", [
            [
                "transition-property",
                "opacity"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-shadow", [
            [
                "transition-property",
                "box-shadow"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-transform", [
            [
                "transition-property",
                "transform, translate, scale, rotate"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), n("transition", {
            defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events",
            themeKeys: [
                "--transition-property"
            ],
            handle: (h)=>[
                    l("transition-property", h),
                    l("transition-timing-function", o),
                    l("transition-duration", p)
                ]
        }), e("transition-discrete", [
            [
                "transition-behavior",
                "allow-discrete"
            ]
        ]), e("transition-normal", [
            [
                "transition-behavior",
                "normal"
            ]
        ]), n("delay", {
            handleBareValue: ({ value: h })=>E(h) ? `${h}ms` : null,
            themeKeys: [
                "--transition-delay"
            ],
            handle: (h)=>[
                    l("transition-delay", h)
                ]
        });
        {
            let h = ()=>I([
                    $("--tw-duration")
                ]);
            e("duration-initial", [
                h,
                [
                    "--tw-duration",
                    "initial"
                ]
            ]), r.functional("duration", (A)=>{
                if (A.modifier || !A.value) return;
                let k = null;
                if (A.value.kind === "arbitrary" ? k = A.value.value : (k = t.resolve(A.value.fraction ?? A.value.value, [
                    "--transition-duration"
                ]), k === null && E(A.value.value) && (k = `${A.value.value}ms`)), k !== null) return [
                    h(),
                    l("--tw-duration", k),
                    l("transition-duration", k)
                ];
            });
        }
        i("delay", ()=>[
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-delay"
                    ]
                }
            ]), i("duration", ()=>[
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-duration"
                    ]
                }
            ]);
    }
    {
        let o = ()=>I([
                $("--tw-ease")
            ]);
        e("ease-initial", [
            o,
            [
                "--tw-ease",
                "initial"
            ]
        ]), e("ease-linear", [
            o,
            [
                "--tw-ease",
                "linear"
            ],
            [
                "transition-timing-function",
                "linear"
            ]
        ]), n("ease", {
            themeKeys: [
                "--ease"
            ],
            handle: (p)=>[
                    o(),
                    l("--tw-ease", p),
                    l("transition-timing-function", p)
                ]
        });
    }
    e("will-change-auto", [
        [
            "will-change",
            "auto"
        ]
    ]), e("will-change-scroll", [
        [
            "will-change",
            "scroll-position"
        ]
    ]), e("will-change-contents", [
        [
            "will-change",
            "contents"
        ]
    ]), e("will-change-transform", [
        [
            "will-change",
            "transform"
        ]
    ]), n("will-change", {
        themeKeys: [],
        handle: (o)=>[
                l("will-change", o)
            ]
    }), e("content-none", [
        [
            "--tw-content",
            "none"
        ],
        [
            "content",
            "none"
        ]
    ]), n("content", {
        themeKeys: [],
        handle: (o)=>[
                I([
                    $("--tw-content", '""')
                ]),
                l("--tw-content", o),
                l("content", "var(--tw-content)")
            ]
    });
    {
        let o = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", p = ()=>I([
                $("--tw-contain-size"),
                $("--tw-contain-layout"),
                $("--tw-contain-paint"),
                $("--tw-contain-style")
            ]);
        e("contain-none", [
            [
                "contain",
                "none"
            ]
        ]), e("contain-content", [
            [
                "contain",
                "content"
            ]
        ]), e("contain-strict", [
            [
                "contain",
                "strict"
            ]
        ]), e("contain-size", [
            p,
            [
                "--tw-contain-size",
                "size"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-inline-size", [
            p,
            [
                "--tw-contain-size",
                "inline-size"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-layout", [
            p,
            [
                "--tw-contain-layout",
                "layout"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-paint", [
            p,
            [
                "--tw-contain-paint",
                "paint"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-style", [
            p,
            [
                "--tw-contain-style",
                "style"
            ],
            [
                "contain",
                o
            ]
        ]), n("contain", {
            themeKeys: [],
            handle: (h)=>[
                    l("contain", h)
                ]
        });
    }
    e("forced-color-adjust-none", [
        [
            "forced-color-adjust",
            "none"
        ]
    ]), e("forced-color-adjust-auto", [
        [
            "forced-color-adjust",
            "auto"
        ]
    ]), e("leading-none", [
        ()=>I([
                $("--tw-leading")
            ]),
        [
            "--tw-leading",
            "1"
        ],
        [
            "line-height",
            "1"
        ]
    ]), a("leading", [
        "--leading",
        "--spacing"
    ], (o)=>[
            I([
                $("--tw-leading")
            ]),
            l("--tw-leading", o),
            l("line-height", o)
        ]), n("tracking", {
        supportsNegative: !0,
        themeKeys: [
            "--tracking"
        ],
        handle: (o)=>[
                I([
                    $("--tw-tracking")
                ]),
                l("--tw-tracking", o),
                l("letter-spacing", o)
            ]
    }), e("antialiased", [
        [
            "-webkit-font-smoothing",
            "antialiased"
        ],
        [
            "-moz-osx-font-smoothing",
            "grayscale"
        ]
    ]), e("subpixel-antialiased", [
        [
            "-webkit-font-smoothing",
            "auto"
        ],
        [
            "-moz-osx-font-smoothing",
            "auto"
        ]
    ]);
    {
        let o = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", p = ()=>I([
                $("--tw-ordinal"),
                $("--tw-slashed-zero"),
                $("--tw-numeric-figure"),
                $("--tw-numeric-spacing"),
                $("--tw-numeric-fraction")
            ]);
        e("normal-nums", [
            [
                "font-variant-numeric",
                "normal"
            ]
        ]), e("ordinal", [
            p,
            [
                "--tw-ordinal",
                "ordinal"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("slashed-zero", [
            p,
            [
                "--tw-slashed-zero",
                "slashed-zero"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("lining-nums", [
            p,
            [
                "--tw-numeric-figure",
                "lining-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("oldstyle-nums", [
            p,
            [
                "--tw-numeric-figure",
                "oldstyle-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("proportional-nums", [
            p,
            [
                "--tw-numeric-spacing",
                "proportional-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("tabular-nums", [
            p,
            [
                "--tw-numeric-spacing",
                "tabular-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("diagonal-fractions", [
            p,
            [
                "--tw-numeric-fraction",
                "diagonal-fractions"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("stacked-fractions", [
            p,
            [
                "--tw-numeric-fraction",
                "stacked-fractions"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]);
    }
    {
        let o = ()=>I([
                $("--tw-outline-style", "solid")
            ]);
        r.static("outline-hidden", ()=>[
                l("--tw-outline-style", "none"),
                l("outline-style", "none"),
                F("@media", "(forced-colors: active)", [
                    l("outline", "2px solid transparent"),
                    l("outline-offset", "2px")
                ])
            ]), e("outline-none", [
            [
                "--tw-outline-style",
                "none"
            ],
            [
                "outline-style",
                "none"
            ]
        ]), e("outline-solid", [
            [
                "--tw-outline-style",
                "solid"
            ],
            [
                "outline-style",
                "solid"
            ]
        ]), e("outline-dashed", [
            [
                "--tw-outline-style",
                "dashed"
            ],
            [
                "outline-style",
                "dashed"
            ]
        ]), e("outline-dotted", [
            [
                "--tw-outline-style",
                "dotted"
            ],
            [
                "outline-style",
                "dotted"
            ]
        ]), e("outline-double", [
            [
                "--tw-outline-style",
                "double"
            ],
            [
                "outline-style",
                "double"
            ]
        ]), r.functional("outline", (p)=>{
            if (p.value === null) {
                if (p.modifier) return;
                let h = t.get([
                    "--default-outline-width"
                ]) ?? "1px";
                return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", h)
                ];
            }
            if (p.value.kind === "arbitrary") {
                let h = p.value.value;
                switch(p.value.dataType ?? Y(h, [
                    "color",
                    "length",
                    "number",
                    "percentage"
                ])){
                    case "length":
                    case "number":
                    case "percentage":
                        return p.modifier ? void 0 : [
                            o(),
                            l("outline-style", "var(--tw-outline-style)"),
                            l("outline-width", h)
                        ];
                    default:
                        return h = X(h, p.modifier, t), h === null ? void 0 : [
                            l("outline-color", h)
                        ];
                }
            }
            {
                let h = te(p, t, [
                    "--outline-color",
                    "--color"
                ]);
                if (h) return [
                    l("outline-color", h)
                ];
            }
            {
                if (p.modifier) return;
                let h = t.resolve(p.value.value, [
                    "--outline-width"
                ]);
                if (h) return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", h)
                ];
                if (E(p.value.value)) return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", `${p.value.value}px`)
                ];
            }
        }), i("outline", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--outline-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (p, h)=>`${h * 5}`),
                    hasDefaultValue: !0
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-width"
                    ]
                }
            ]), n("outline-offset", {
            supportsNegative: !0,
            themeKeys: [
                "--outline-offset"
            ],
            handleBareValue: ({ value: p })=>E(p) ? `${p}px` : null,
            handle: (p)=>[
                    l("outline-offset", p)
                ]
        }), i("outline-offset", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-offset"
                    ]
                }
            ]);
    }
    n("opacity", {
        themeKeys: [
            "--opacity"
        ],
        handleBareValue: ({ value: o })=>lt(o) ? `${o}%` : null,
        handle: (o)=>[
                l("opacity", o)
            ]
    }), i("opacity", ()=>[
            {
                values: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`),
                valueThemeKeys: [
                    "--opacity"
                ]
            }
        ]), e("underline-offset-auto", [
        [
            "text-underline-offset",
            "auto"
        ]
    ]), n("underline-offset", {
        supportsNegative: !0,
        themeKeys: [
            "--text-underline-offset"
        ],
        handleBareValue: ({ value: o })=>E(o) ? `${o}px` : null,
        handle: (o)=>[
                l("text-underline-offset", o)
            ]
    }), i("underline-offset", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--text-underline-offset"
                ]
            }
        ]), r.functional("text", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? Y(p, [
                    "color",
                    "length",
                    "percentage",
                    "absolute-size",
                    "relative-size"
                ])){
                    case "size":
                    case "length":
                    case "percentage":
                    case "absolute-size":
                    case "relative-size":
                        {
                            if (o.modifier) {
                                let A = o.modifier.kind === "arbitrary" ? o.modifier.value : t.resolve(o.modifier.value, [
                                    "--leading"
                                ]);
                                if (!A && xe(o.modifier.value)) {
                                    let k = t.resolve(null, [
                                        "--spacing"
                                    ]);
                                    if (!k) return null;
                                    A = `calc(${k} * ${o.modifier.value})`;
                                }
                                return !A && o.modifier.value === "none" && (A = "1"), A ? [
                                    l("font-size", p),
                                    l("line-height", A)
                                ] : null;
                            }
                            return [
                                l("font-size", p)
                            ];
                        }
                    default:
                        return p = X(p, o.modifier, t), p === null ? void 0 : [
                            l("color", p)
                        ];
                }
            }
            {
                let p = te(o, t, [
                    "--text-color",
                    "--color"
                ]);
                if (p) return [
                    l("color", p)
                ];
            }
            {
                let p = t.resolveWith(o.value.value, [
                    "--text"
                ], [
                    "--line-height",
                    "--letter-spacing",
                    "--font-weight"
                ]);
                if (p) {
                    let [h, A = {}] = Array.isArray(p) ? p : [
                        p
                    ];
                    if (o.modifier) {
                        let k = o.modifier.kind === "arbitrary" ? o.modifier.value : t.resolve(o.modifier.value, [
                            "--leading"
                        ]);
                        if (!k && xe(o.modifier.value)) {
                            let O = t.resolve(null, [
                                "--spacing"
                            ]);
                            if (!O) return null;
                            k = `calc(${O} * ${o.modifier.value})`;
                        }
                        if (!k && o.modifier.value === "none" && (k = "1"), !k) return null;
                        let C = [
                            l("font-size", h)
                        ];
                        return k && C.push(l("line-height", k)), C;
                    }
                    return typeof A == "string" ? [
                        l("font-size", h),
                        l("line-height", A)
                    ] : [
                        l("font-size", h),
                        l("line-height", A["--line-height"] ? `var(--tw-leading, ${A["--line-height"]})` : void 0),
                        l("letter-spacing", A["--letter-spacing"] ? `var(--tw-tracking, ${A["--letter-spacing"]})` : void 0),
                        l("font-weight", A["--font-weight"] ? `var(--tw-font-weight, ${A["--font-weight"]})` : void 0)
                    ];
                }
            }
        }
    }), i("text", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [],
                valueThemeKeys: [
                    "--text"
                ],
                modifiers: [],
                modifierThemeKeys: [
                    "--leading"
                ]
            }
        ]);
    let D = ()=>I([
            $("--tw-text-shadow-color"),
            $("--tw-text-shadow-alpha", "100%", "<percentage>")
        ]);
    e("text-shadow-initial", [
        D,
        [
            "--tw-text-shadow-color",
            "initial"
        ]
    ]), r.functional("text-shadow", (o)=>{
        let p;
        if (o.modifier && (o.modifier.kind === "arbitrary" ? p = o.modifier.value : E(o.modifier.value) && (p = `${o.modifier.value}%`)), !o.value) {
            let h = t.get([
                "--text-shadow"
            ]);
            return h === null ? void 0 : [
                D(),
                l("--tw-text-shadow-alpha", p),
                ...pe("text-shadow", h, p, (A)=>`var(--tw-text-shadow-color, ${A})`)
            ];
        }
        if (o.value.kind === "arbitrary") {
            let h = o.value.value;
            switch(o.value.dataType ?? Y(h, [
                "color"
            ])){
                case "color":
                    return h = X(h, o.modifier, t), h === null ? void 0 : [
                        D(),
                        l("--tw-text-shadow-color", Z(h, "var(--tw-text-shadow-alpha)"))
                    ];
                default:
                    return [
                        D(),
                        l("--tw-text-shadow-alpha", p),
                        ...pe("text-shadow", h, p, (k)=>`var(--tw-text-shadow-color, ${k})`)
                    ];
            }
        }
        switch(o.value.value){
            case "none":
                return o.modifier ? void 0 : [
                    D(),
                    l("text-shadow", "none")
                ];
            case "inherit":
                return o.modifier ? void 0 : [
                    D(),
                    l("--tw-text-shadow-color", "inherit")
                ];
        }
        {
            let h = t.get([
                `--text-shadow-${o.value.value}`
            ]);
            if (h) return [
                D(),
                l("--tw-text-shadow-alpha", p),
                ...pe("text-shadow", h, p, (A)=>`var(--tw-text-shadow-color, ${A})`)
            ];
        }
        {
            let h = te(o, t, [
                "--text-shadow-color",
                "--color"
            ]);
            if (h) return [
                D(),
                l("--tw-text-shadow-color", Z(h, "var(--tw-text-shadow-alpha)"))
            ];
        }
    }), i("text-shadow", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-shadow-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "none"
                ]
            },
            {
                valueThemeKeys: [
                    "--text-shadow"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`),
                hasDefaultValue: t.get([
                    "--text-shadow"
                ]) !== null
            }
        ]);
    {
        let k = function(N) {
            return `var(--tw-ring-inset,) 0 0 0 calc(${N} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${A})`;
        }, C = function(N) {
            return `inset 0 0 0 ${N} var(--tw-inset-ring-color, currentcolor)`;
        };
        var Q = k, ie = C;
        let o = [
            "var(--tw-inset-shadow)",
            "var(--tw-inset-ring-shadow)",
            "var(--tw-ring-offset-shadow)",
            "var(--tw-ring-shadow)",
            "var(--tw-shadow)"
        ].join(", "), p = "0 0 #0000", h = ()=>I([
                $("--tw-shadow", p),
                $("--tw-shadow-color"),
                $("--tw-shadow-alpha", "100%", "<percentage>"),
                $("--tw-inset-shadow", p),
                $("--tw-inset-shadow-color"),
                $("--tw-inset-shadow-alpha", "100%", "<percentage>"),
                $("--tw-ring-color"),
                $("--tw-ring-shadow", p),
                $("--tw-inset-ring-color"),
                $("--tw-inset-ring-shadow", p),
                $("--tw-ring-inset"),
                $("--tw-ring-offset-width", "0px", "<length>"),
                $("--tw-ring-offset-color", "#fff"),
                $("--tw-ring-offset-shadow", p)
            ]);
        e("shadow-initial", [
            h,
            [
                "--tw-shadow-color",
                "initial"
            ]
        ]), r.functional("shadow", (N)=>{
            let T;
            if (N.modifier && (N.modifier.kind === "arbitrary" ? T = N.modifier.value : E(N.modifier.value) && (T = `${N.modifier.value}%`)), !N.value) {
                let U = t.get([
                    "--shadow"
                ]);
                return U === null ? void 0 : [
                    h(),
                    l("--tw-shadow-alpha", T),
                    ...pe("--tw-shadow", U, T, (ae)=>`var(--tw-shadow-color, ${ae})`),
                    l("box-shadow", o)
                ];
            }
            if (N.value.kind === "arbitrary") {
                let U = N.value.value;
                switch(N.value.dataType ?? Y(U, [
                    "color"
                ])){
                    case "color":
                        return U = X(U, N.modifier, t), U === null ? void 0 : [
                            h(),
                            l("--tw-shadow-color", Z(U, "var(--tw-shadow-alpha)"))
                        ];
                    default:
                        return [
                            h(),
                            l("--tw-shadow-alpha", T),
                            ...pe("--tw-shadow", U, T, (kt)=>`var(--tw-shadow-color, ${kt})`),
                            l("box-shadow", o)
                        ];
                }
            }
            switch(N.value.value){
                case "none":
                    return N.modifier ? void 0 : [
                        h(),
                        l("--tw-shadow", p),
                        l("box-shadow", o)
                    ];
                case "inherit":
                    return N.modifier ? void 0 : [
                        h(),
                        l("--tw-shadow-color", "inherit")
                    ];
            }
            {
                let U = t.get([
                    `--shadow-${N.value.value}`
                ]);
                if (U) return [
                    h(),
                    l("--tw-shadow-alpha", T),
                    ...pe("--tw-shadow", U, T, (ae)=>`var(--tw-shadow-color, ${ae})`),
                    l("box-shadow", o)
                ];
            }
            {
                let U = te(N, t, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (U) return [
                    h(),
                    l("--tw-shadow-color", Z(U, "var(--tw-shadow-alpha)"))
                ];
            }
        }), i("shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`),
                    hasDefaultValue: t.get([
                        "--shadow"
                    ]) !== null
                }
            ]), e("inset-shadow-initial", [
            h,
            [
                "--tw-inset-shadow-color",
                "initial"
            ]
        ]), r.functional("inset-shadow", (N)=>{
            let T;
            if (N.modifier && (N.modifier.kind === "arbitrary" ? T = N.modifier.value : E(N.modifier.value) && (T = `${N.modifier.value}%`)), !N.value) {
                let U = t.get([
                    "--inset-shadow"
                ]);
                return U === null ? void 0 : [
                    h(),
                    l("--tw-inset-shadow-alpha", T),
                    ...pe("--tw-inset-shadow", U, T, (ae)=>`var(--tw-inset-shadow-color, ${ae})`),
                    l("box-shadow", o)
                ];
            }
            if (N.value.kind === "arbitrary") {
                let U = N.value.value;
                switch(N.value.dataType ?? Y(U, [
                    "color"
                ])){
                    case "color":
                        return U = X(U, N.modifier, t), U === null ? void 0 : [
                            h(),
                            l("--tw-inset-shadow-color", Z(U, "var(--tw-inset-shadow-alpha)"))
                        ];
                    default:
                        return [
                            h(),
                            l("--tw-inset-shadow-alpha", T),
                            ...pe("--tw-inset-shadow", U, T, (kt)=>`var(--tw-inset-shadow-color, ${kt})`, "inset "),
                            l("box-shadow", o)
                        ];
                }
            }
            switch(N.value.value){
                case "none":
                    return N.modifier ? void 0 : [
                        h(),
                        l("--tw-inset-shadow", p),
                        l("box-shadow", o)
                    ];
                case "inherit":
                    return N.modifier ? void 0 : [
                        h(),
                        l("--tw-inset-shadow-color", "inherit")
                    ];
            }
            {
                let U = t.get([
                    `--inset-shadow-${N.value.value}`
                ]);
                if (U) return [
                    h(),
                    l("--tw-inset-shadow-alpha", T),
                    ...pe("--tw-inset-shadow", U, T, (ae)=>`var(--tw-inset-shadow-color, ${ae})`),
                    l("box-shadow", o)
                ];
            }
            {
                let U = te(N, t, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (U) return [
                    h(),
                    l("--tw-inset-shadow-color", Z(U, "var(--tw-inset-shadow-alpha)"))
                ];
            }
        }), i("inset-shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--inset-shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`),
                    hasDefaultValue: t.get([
                        "--inset-shadow"
                    ]) !== null
                }
            ]), e("ring-inset", [
            h,
            [
                "--tw-ring-inset",
                "inset"
            ]
        ]);
        let A = t.get([
            "--default-ring-color"
        ]) ?? "currentcolor";
        r.functional("ring", (N)=>{
            if (!N.value) {
                if (N.modifier) return;
                let T = t.get([
                    "--default-ring-width"
                ]) ?? "1px";
                return [
                    h(),
                    l("--tw-ring-shadow", k(T)),
                    l("box-shadow", o)
                ];
            }
            if (N.value.kind === "arbitrary") {
                let T = N.value.value;
                switch(N.value.dataType ?? Y(T, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return N.modifier ? void 0 : [
                            h(),
                            l("--tw-ring-shadow", k(T)),
                            l("box-shadow", o)
                        ];
                    default:
                        return T = X(T, N.modifier, t), T === null ? void 0 : [
                            l("--tw-ring-color", T)
                        ];
                }
            }
            {
                let T = te(N, t, [
                    "--ring-color",
                    "--color"
                ]);
                if (T) return [
                    l("--tw-ring-color", T)
                ];
            }
            {
                if (N.modifier) return;
                let T = t.resolve(N.value.value, [
                    "--ring-width"
                ]);
                if (T === null && E(N.value.value) && (T = `${N.value.value}px`), T) return [
                    h(),
                    l("--tw-ring-shadow", k(T)),
                    l("box-shadow", o)
                ];
            }
        }), i("ring", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), r.functional("inset-ring", (N)=>{
            if (!N.value) return N.modifier ? void 0 : [
                h(),
                l("--tw-inset-ring-shadow", C("1px")),
                l("box-shadow", o)
            ];
            if (N.value.kind === "arbitrary") {
                let T = N.value.value;
                switch(N.value.dataType ?? Y(T, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return N.modifier ? void 0 : [
                            h(),
                            l("--tw-inset-ring-shadow", C(T)),
                            l("box-shadow", o)
                        ];
                    default:
                        return T = X(T, N.modifier, t), T === null ? void 0 : [
                            l("--tw-inset-ring-color", T)
                        ];
                }
            }
            {
                let T = te(N, t, [
                    "--ring-color",
                    "--color"
                ]);
                if (T) return [
                    l("--tw-inset-ring-color", T)
                ];
            }
            {
                if (N.modifier) return;
                let T = t.resolve(N.value.value, [
                    "--ring-width"
                ]);
                if (T === null && E(N.value.value) && (T = `${N.value.value}px`), T) return [
                    h(),
                    l("--tw-inset-ring-shadow", C(T)),
                    l("box-shadow", o)
                ];
            }
        }), i("inset-ring", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (N, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ]);
        let O = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        r.functional("ring-offset", (N)=>{
            if (N.value) {
                if (N.value.kind === "arbitrary") {
                    let T = N.value.value;
                    switch(N.value.dataType ?? Y(T, [
                        "color",
                        "length"
                    ])){
                        case "length":
                            return N.modifier ? void 0 : [
                                l("--tw-ring-offset-width", T),
                                l("--tw-ring-offset-shadow", O)
                            ];
                        default:
                            return T = X(T, N.modifier, t), T === null ? void 0 : [
                                l("--tw-ring-offset-color", T)
                            ];
                    }
                }
                {
                    let T = t.resolve(N.value.value, [
                        "--ring-offset-width"
                    ]);
                    if (T) return N.modifier ? void 0 : [
                        l("--tw-ring-offset-width", T),
                        l("--tw-ring-offset-shadow", O)
                    ];
                    if (E(N.value.value)) return N.modifier ? void 0 : [
                        l("--tw-ring-offset-width", `${N.value.value}px`),
                        l("--tw-ring-offset-shadow", O)
                    ];
                }
                {
                    let T = te(N, t, [
                        "--ring-offset-color",
                        "--color"
                    ]);
                    if (T) return [
                        l("--tw-ring-offset-color", T)
                    ];
                }
            }
        });
    }
    return i("ring-offset", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--ring-offset-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--ring-offset-width"
                ]
            }
        ]), r.functional("@container", (o)=>{
        let p = null;
        if (o.value === null ? p = "inline-size" : o.value.kind === "arbitrary" ? p = o.value.value : o.value.kind === "named" && o.value.value === "normal" && (p = "normal"), p !== null) return o.modifier ? [
            l("container-type", p),
            l("container-name", o.modifier.value)
        ] : [
            l("container-type", p)
        ];
    }), i("@container", ()=>[
            {
                values: [
                    "normal"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), r;
}
var Kt = [
    "number",
    "integer",
    "ratio",
    "percentage"
];
function Vr(t) {
    let r = t.params;
    return bn.test(r) ? (i)=>{
        let e = {
            "--value": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            },
            "--modifier": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            }
        };
        z(t.nodes, (n)=>{
            if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
            let s = q(n.value);
            ee(s, (a)=>{
                if (a.kind !== "function") return;
                if (a.value === "--spacing" && !(e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return ee(a.nodes, (u)=>{
                    if (u.kind !== "function" || u.value !== "--value" && u.value !== "--modifier") return;
                    let f = u.value;
                    for (let g of u.nodes)if (g.kind === "word") {
                        if (g.value === "integer") e[f].usedSpacingInteger ||= !0;
                        else if (g.value === "number" && (e[f].usedSpacingNumber ||= !0, e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return 2;
                    }
                }), 0;
                if (a.value !== "--value" && a.value !== "--modifier") return;
                let c = K(J(a.nodes), ",");
                for (let [u, f] of c.entries())f = f.replace(/\\\*/g, "*"), f = f.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), f = f.replace(/\s+/g, ""), f = f.replace(/(-\*){2,}/g, "-*"), f[0] === "-" && f[1] === "-" && !f.includes("-*") && (f += "-*"), c[u] = f;
                a.nodes = q(c.join(","));
                for (let u of a.nodes)if (u.kind === "word" && (u.value[0] === '"' || u.value[0] === "'") && u.value[0] === u.value[u.value.length - 1]) {
                    let f = u.value.slice(1, -1);
                    e[a.value].literals.add(f);
                } else if (u.kind === "word" && u.value[0] === "-" && u.value[1] === "-") {
                    let f = u.value.replace(/-\*.*$/g, "");
                    e[a.value].themeKeys.add(f);
                } else if (u.kind === "word" && !(u.value[0] === "[" && u.value[u.value.length - 1] === "]") && !Kt.includes(u.value)) {
                    console.warn(`Unsupported bare value data type: "${u.value}".
Only valid data types are: ${Kt.map((x)=>`"${x}"`).join(", ")}.
`);
                    let f = u.value, g = structuredClone(a), d = "\xB6";
                    ee(g.nodes, (x, { replaceWith: y1 })=>{
                        x.kind === "word" && x.value === f && y1({
                            kind: "word",
                            value: d
                        });
                    });
                    let m = "^".repeat(J([
                        u
                    ]).length), w = J([
                        g
                    ]).indexOf(d), v = [
                        "```css",
                        J([
                            a
                        ]),
                        " ".repeat(w) + m,
                        "```"
                    ].join(`
`);
                    console.warn(v);
                }
            }), n.value = J(s);
        }), i.utilities.functional(r.slice(0, -2), (n)=>{
            let s = structuredClone(t), a = n.value, c = n.modifier;
            if (a === null) return;
            let u = !1, f = !1, g = !1, d = !1, m = new Map, w = !1;
            if (z([
                s
            ], (v, { parent: x, replaceWith: y1 })=>{
                if (x?.kind !== "rule" && x?.kind !== "at-rule" || v.kind !== "declaration" || !v.value) return;
                let V = q(v.value);
                (ee(V, (S, { replaceWith: R })=>{
                    if (S.kind === "function") {
                        if (S.value === "--value") {
                            u = !0;
                            let j = Ar(a, S, i);
                            return j ? (f = !0, j.ratio ? w = !0 : m.set(v, x), R(j.nodes), 1) : (u ||= !1, y1([]), 2);
                        } else if (S.value === "--modifier") {
                            if (c === null) return y1([]), 2;
                            g = !0;
                            let j = Ar(c, S, i);
                            return j ? (d = !0, R(j.nodes), 1) : (g ||= !1, y1([]), 2);
                        }
                    }
                }) ?? 0) === 0 && (v.value = J(V));
            }), u && !f || g && !d || w && d || c && !w && !d) return null;
            if (w) for (let [v, x] of m){
                let y1 = x.nodes.indexOf(v);
                y1 !== -1 && x.nodes.splice(y1, 1);
            }
            return s.nodes;
        }), i.utilities.suggest(r.slice(0, -2), ()=>{
            let n = [], s = [];
            for (let [a, { literals: c, usedSpacingNumber: u, usedSpacingInteger: f, themeKeys: g }] of [
                [
                    n,
                    e["--value"]
                ],
                [
                    s,
                    e["--modifier"]
                ]
            ]){
                for (let d of c)a.push(d);
                if (u) a.push(...st);
                else if (f) for (let d of st)E(d) && a.push(d);
                for (let d of i.theme.keysInNamespaces(g))a.push(d.replace($r, (m, w, v)=>`${w}.${v}`));
            }
            return [
                {
                    values: n,
                    modifiers: s
                }
            ];
        });
    } : kn.test(r) ? (i)=>{
        i.utilities.static(r, ()=>structuredClone(t.nodes));
    } : null;
}
function Ar(t, r, i) {
    for (let e of r.nodes){
        if (t.kind === "named" && e.kind === "word" && (e.value[0] === "'" || e.value[0] === '"') && e.value[e.value.length - 1] === e.value[0] && e.value.slice(1, -1) === t.value) return {
            nodes: q(t.value)
        };
        if (t.kind === "named" && e.kind === "word" && e.value[0] === "-" && e.value[1] === "-") {
            let n = e.value;
            if (n.endsWith("-*")) {
                n = n.slice(0, -2);
                let s = i.theme.resolve(t.value, [
                    n
                ]);
                if (s) return {
                    nodes: q(s)
                };
            } else {
                let s = n.split("-*");
                if (s.length <= 1) continue;
                let a = [
                    s.shift()
                ], c = i.theme.resolveWith(t.value, a, s);
                if (c) {
                    let [, u = {}] = c;
                    {
                        let f = u[s.pop()];
                        if (f) return {
                            nodes: q(f)
                        };
                    }
                }
            }
        } else if (t.kind === "named" && e.kind === "word") {
            if (!Kt.includes(e.value)) continue;
            let n = e.value === "ratio" && "fraction" in t ? t.fraction : t.value;
            if (!n) continue;
            let s = Y(n, [
                e.value
            ]);
            if (s === null) continue;
            if (s === "ratio") {
                let [a, c] = K(n, "/");
                if (!E(a) || !E(c)) continue;
            } else {
                if (s === "number" && !xe(n)) continue;
                if (s === "percentage" && !E(n.slice(0, -1))) continue;
            }
            return {
                nodes: q(n),
                ratio: s === "ratio"
            };
        } else if (t.kind === "arbitrary" && e.kind === "word" && e.value[0] === "[" && e.value[e.value.length - 1] === "]") {
            let n = e.value.slice(1, -1);
            if (n === "*") return {
                nodes: q(t.value)
            };
            if ("dataType" in t && t.dataType && t.dataType !== n) continue;
            if ("dataType" in t && t.dataType) return {
                nodes: q(t.value)
            };
            if (Y(t.value, [
                n
            ]) !== null) return {
                nodes: q(t.value)
            };
        }
    }
}
function pe(t, r, i, e, n = "") {
    let s = !1, a = Ue(r, (u)=>i == null ? e(u) : u.startsWith("current") ? e(Z(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (s = !0), e(Cr(u, i))));
    function c(u) {
        return n ? K(u, ",").map((f)=>n + f).join(",") : u;
    }
    return s ? [
        l(t, c(Ue(r, e))),
        G("@supports (color: lab(from red l a b))", [
            l(t, c(a))
        ])
    ] : [
        l(t, c(a))
    ];
}
function at(t, r, i, e, n = "") {
    let s = !1, a = K(r, ",").map((c)=>Ue(c, (u)=>i == null ? e(u) : u.startsWith("current") ? e(Z(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (s = !0), e(Cr(u, i))))).map((c)=>`drop-shadow(${c})`).join(" ");
    return s ? [
        l(t, n + K(r, ",").map((c)=>`drop-shadow(${Ue(c, e)})`).join(" ")),
        G("@supports (color: lab(from red l a b))", [
            l(t, n + a)
        ])
    ] : [
        l(t, n + a)
    ];
}
var Dt = {
    "--alpha": yn,
    "--spacing": xn,
    "--theme": An,
    theme: Cn
};
function yn(t, r, i, ...e) {
    let [n, s] = K(i, "/").map((a)=>a.trim());
    if (!n || !s) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    if (e.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    return Z(n, s);
}
function xn(t, r, i, ...e) {
    if (!i) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (e.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${e.length + 1}.`);
    let n = t.theme.resolve(null, [
        "--spacing"
    ]);
    if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${n} * ${i})`;
}
function An(t, r, i, ...e) {
    if (!i.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let n = !1;
    i.endsWith(" inline") && (n = !0, i = i.slice(0, -7)), r.kind === "at-rule" && (n = !0);
    let s = t.resolveThemeValue(i, n);
    if (!s) {
        if (e.length > 0) return e.join(", ");
        throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (e.length === 0) return s;
    let a = e.join(", ");
    if (a === "initial") return s;
    if (s === "initial") return a;
    if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
        let c = q(s);
        return Nn(c, a), J(c);
    }
    return s;
}
function Cn(t, r, i, ...e) {
    i = $n(i);
    let n = t.resolveThemeValue(i);
    if (!n && e.length > 0) return e.join(", ");
    if (!n) throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return n;
}
var Sr = new RegExp(Object.keys(Dt).map((t)=>`${t}\\(`).join("|"));
function Ve(t, r) {
    let i = 0;
    return z(t, (e)=>{
        if (e.kind === "declaration" && e.value && Sr.test(e.value)) {
            i |= 8, e.value = Tr(e.value, e, r);
            return;
        }
        e.kind === "at-rule" && (e.name === "@media" || e.name === "@custom-media" || e.name === "@container" || e.name === "@supports") && Sr.test(e.params) && (i |= 8, e.params = Tr(e.params, e, r));
    }), i;
}
function Tr(t, r, i) {
    let e = q(t);
    return ee(e, (n, { replaceWith: s })=>{
        if (n.kind === "function" && n.value in Dt) {
            let a = K(J(n.nodes).trim(), ",").map((u)=>u.trim()), c = Dt[n.value](i, r, ...a);
            return s(q(c));
        }
    }), J(e);
}
function $n(t) {
    if (t[0] !== "'" && t[0] !== '"') return t;
    let r = "", i = t[0];
    for(let e = 1; e < t.length - 1; e++){
        let n = t[e], s = t[e + 1];
        n === "\\" && (s === i || s === "\\") ? (r += s, e++) : r += n;
    }
    return r;
}
function Nn(t, r) {
    ee(t, (i)=>{
        if (i.kind === "function" && !(i.value !== "var" && i.value !== "theme" && i.value !== "--theme")) if (i.nodes.length === 1) i.nodes.push({
            kind: "word",
            value: `, ${r}`
        });
        else {
            let e = i.nodes[i.nodes.length - 1];
            e.kind === "word" && e.value === "initial" && (e.value = r);
        }
    });
}
function ut(t, r) {
    let i = t.length, e = r.length, n = i < e ? i : e;
    for(let s = 0; s < n; s++){
        let a = t.charCodeAt(s), c = r.charCodeAt(s);
        if (a >= 48 && a <= 57 && c >= 48 && c <= 57) {
            let u = s, f = s + 1, g = s, d = s + 1;
            for(a = t.charCodeAt(f); a >= 48 && a <= 57;)a = t.charCodeAt(++f);
            for(c = r.charCodeAt(d); c >= 48 && c <= 57;)c = r.charCodeAt(++d);
            let m = t.slice(u, f), w = r.slice(g, d), v = Number(m) - Number(w);
            if (v) return v;
            if (m < w) return -1;
            if (m > w) return 1;
            continue;
        }
        if (a !== c) return a - c;
    }
    return t.length - r.length;
}
var Vn = /^\d+\/\d+$/;
function Er(t) {
    let r = new B((n)=>({
            name: n,
            utility: n,
            fraction: !1,
            modifiers: []
        }));
    for (let n of t.utilities.keys("static")){
        let s = r.get(n);
        s.fraction = !1, s.modifiers = [];
    }
    for (let n of t.utilities.keys("functional")){
        let s = t.utilities.getCompletions(n);
        for (let a of s)for (let c of a.values){
            let u = c !== null && Vn.test(c), f = c === null ? n : `${n}-${c}`, g = r.get(f);
            if (g.utility = n, g.fraction ||= u, g.modifiers.push(...a.modifiers), a.supportsNegative) {
                let d = r.get(`-${f}`);
                d.utility = `-${n}`, d.fraction ||= u, d.modifiers.push(...a.modifiers);
            }
        }
    }
    if (r.size === 0) return [];
    let i = Array.from(r.values());
    return i.sort((n, s)=>ut(n.name, s.name)), Sn(i);
}
function Sn(t) {
    let r = [], i = null, e = new Map, n = new B(()=>[]);
    for (let a of t){
        let { utility: c, fraction: u } = a;
        i || (i = {
            utility: c,
            items: []
        }, e.set(c, i)), c !== i.utility && (r.push(i), i = {
            utility: c,
            items: []
        }, e.set(c, i)), u ? n.get(c).push(a) : i.items.push(a);
    }
    i && r[r.length - 1] !== i && r.push(i);
    for (let [a, c] of n){
        let u = e.get(a);
        u && u.items.push(...c);
    }
    let s = [];
    for (let a of r)for (let c of a.items)s.push([
        c.name,
        {
            modifiers: c.modifiers
        }
    ]);
    return s;
}
function Rr(t) {
    let r = [];
    for (let [e, n] of t.variants.entries()){
        let c = function({ value: u, modifier: f } = {}) {
            let g = e;
            u && (g += s ? `-${u}` : u), f && (g += `/${f}`);
            let d = t.parseVariant(g);
            if (!d) return [];
            let m = M(".__placeholder__", []);
            if (Te(m, d, t.variants) === null) return [];
            let w = [];
            return Xe(m.nodes, (v, { path: x })=>{
                if (v.kind !== "rule" && v.kind !== "at-rule" || v.nodes.length > 0) return;
                x.sort((b, S)=>{
                    let R = b.kind === "at-rule", j = S.kind === "at-rule";
                    return R && !j ? -1 : !R && j ? 1 : 0;
                });
                let y1 = x.flatMap((b)=>b.kind === "rule" ? b.selector === "&" ? [] : [
                        b.selector
                    ] : b.kind === "at-rule" ? [
                        `${b.name} ${b.params}`
                    ] : []), V = "";
                for(let b = y1.length - 1; b >= 0; b--)V = V === "" ? y1[b] : `${y1[b]} { ${V} }`;
                w.push(V);
            }), w;
        };
        var i = c;
        if (n.kind === "arbitrary") continue;
        let s = e !== "@", a = t.variants.getCompletions(e);
        switch(n.kind){
            case "static":
                {
                    r.push({
                        name: e,
                        values: a,
                        isArbitrary: !1,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
            case "functional":
                {
                    r.push({
                        name: e,
                        values: a,
                        isArbitrary: !0,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
            case "compound":
                {
                    r.push({
                        name: e,
                        values: a,
                        isArbitrary: !0,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
        }
    }
    return r;
}
function Pr(t, r) {
    let { astNodes: i, nodeSorting: e } = ge(Array.from(r), t), n = new Map(r.map((a)=>[
            a,
            null
        ])), s = 0n;
    for (let a of i){
        let c = e.get(a)?.candidate;
        c && n.set(c, n.get(c) ?? s++);
    }
    return r.map((a)=>[
            a,
            n.get(a) ?? null
        ]);
}
var ct = /^@?[a-zA-Z0-9_-]*$/;
var Ut = class {
    compareFns = new Map;
    variants = new Map;
    completions = new Map;
    groupOrder = null;
    lastOrder = 0;
    static(r, i, { compounds: e, order: n } = {}) {
        this.set(r, {
            kind: "static",
            applyFn: i,
            compoundsWith: 0,
            compounds: e ?? 2,
            order: n
        });
    }
    fromAst(r, i) {
        let e = [];
        z(i, (n)=>{
            n.kind === "rule" ? e.push(n.selector) : n.kind === "at-rule" && n.name !== "@slot" && e.push(`${n.name} ${n.params}`);
        }), this.static(r, (n)=>{
            let s = structuredClone(i);
            jt(s, n.nodes), n.nodes = s;
        }, {
            compounds: Ae(e)
        });
    }
    functional(r, i, { compounds: e, order: n } = {}) {
        this.set(r, {
            kind: "functional",
            applyFn: i,
            compoundsWith: 0,
            compounds: e ?? 2,
            order: n
        });
    }
    compound(r, i, e, { compounds: n, order: s } = {}) {
        this.set(r, {
            kind: "compound",
            applyFn: e,
            compoundsWith: i,
            compounds: n ?? 2,
            order: s
        });
    }
    group(r, i) {
        this.groupOrder = this.nextOrder(), i && this.compareFns.set(this.groupOrder, i), r(), this.groupOrder = null;
    }
    has(r) {
        return this.variants.has(r);
    }
    get(r) {
        return this.variants.get(r);
    }
    kind(r) {
        return this.variants.get(r)?.kind;
    }
    compoundsWith(r, i) {
        let e = this.variants.get(r), n = typeof i == "string" ? this.variants.get(i) : i.kind === "arbitrary" ? {
            compounds: Ae([
                i.selector
            ])
        } : this.variants.get(i.root);
        return !(!e || !n || e.kind !== "compound" || n.compounds === 0 || e.compoundsWith === 0 || (e.compoundsWith & n.compounds) === 0);
    }
    suggest(r, i) {
        this.completions.set(r, i);
    }
    getCompletions(r) {
        return this.completions.get(r)?.() ?? [];
    }
    compare(r, i) {
        if (r === i) return 0;
        if (r === null) return -1;
        if (i === null) return 1;
        if (r.kind === "arbitrary" && i.kind === "arbitrary") return r.selector < i.selector ? -1 : 1;
        if (r.kind === "arbitrary") return 1;
        if (i.kind === "arbitrary") return -1;
        let e = this.variants.get(r.root).order, n = this.variants.get(i.root).order, s = e - n;
        if (s !== 0) return s;
        if (r.kind === "compound" && i.kind === "compound") {
            let f = this.compare(r.variant, i.variant);
            return f !== 0 ? f : r.modifier && i.modifier ? r.modifier.value < i.modifier.value ? -1 : 1 : r.modifier ? 1 : i.modifier ? -1 : 0;
        }
        let a = this.compareFns.get(e);
        if (a !== void 0) return a(r, i);
        if (r.root !== i.root) return r.root < i.root ? -1 : 1;
        let c = r.value, u = i.value;
        return c === null ? -1 : u === null || c.kind === "arbitrary" && u.kind !== "arbitrary" ? 1 : c.kind !== "arbitrary" && u.kind === "arbitrary" || c.value < u.value ? -1 : 1;
    }
    keys() {
        return this.variants.keys();
    }
    entries() {
        return this.variants.entries();
    }
    set(r, { kind: i, applyFn: e, compounds: n, compoundsWith: s, order: a }) {
        let c = this.variants.get(r);
        c ? Object.assign(c, {
            kind: i,
            applyFn: e,
            compounds: n
        }) : (a === void 0 && (this.lastOrder = this.nextOrder(), a = this.lastOrder), this.variants.set(r, {
            kind: i,
            applyFn: e,
            order: a,
            compoundsWith: s,
            compounds: n
        }));
    }
    nextOrder() {
        return this.groupOrder ?? this.lastOrder + 1;
    }
};
function Ae(t) {
    let r = 0;
    for (let i of t){
        if (i[0] === "@") {
            if (!i.startsWith("@media") && !i.startsWith("@supports") && !i.startsWith("@container")) return 0;
            r |= 1;
            continue;
        }
        if (i.includes("::")) return 0;
        r |= 2;
    }
    return r;
}
function _r(t) {
    let r = new Ut;
    function i(f, g, { compounds: d } = {}) {
        d = d ?? Ae(g), r.static(f, (m)=>{
            m.nodes = g.map((w)=>G(w, m.nodes));
        }, {
            compounds: d
        });
    }
    i("*", [
        ":is(& > *)"
    ], {
        compounds: 0
    }), i("**", [
        ":is(& *)"
    ], {
        compounds: 0
    });
    function e(f, g) {
        return g.map((d)=>{
            d = d.trim();
            let m = K(d, " ");
            return m[0] === "not" ? m.slice(1).join(" ") : f === "@container" ? m[0][0] === "(" ? `not ${d}` : m[1] === "not" ? `${m[0]} ${m.slice(2).join(" ")}` : `${m[0]} not ${m.slice(1).join(" ")}` : `not ${d}`;
        });
    }
    let n = [
        "@media",
        "@supports",
        "@container"
    ];
    function s(f) {
        for (let g of n){
            if (g !== f.name) continue;
            let d = K(f.params, ",");
            return d.length > 1 ? null : (d = e(f.name, d), F(f.name, d.join(", ")));
        }
        return null;
    }
    function a(f) {
        return f.includes("::") ? null : `&:not(${K(f, ",").map((d)=>(d = d.replaceAll("&", "*"), d)).join(", ")})`;
    }
    r.compound("not", 3, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative || g.modifier) return null;
        let d = !1;
        if (z([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule" && m.kind !== "at-rule") return 0;
            if (m.nodes.length > 0) return 0;
            let v = [], x = [];
            for (let V of w)V.kind === "at-rule" ? v.push(V) : V.kind === "rule" && x.push(V);
            if (v.length > 1) return 2;
            if (x.length > 1) return 2;
            let y1 = [];
            for (let V of x){
                let b = a(V.selector);
                if (!b) return d = !1, 2;
                y1.push(M(b, []));
            }
            for (let V of v){
                let b = s(V);
                if (!b) return d = !1, 2;
                y1.push(b);
            }
            return Object.assign(f, M("&", y1)), d = !0, 1;
        }), f.kind === "rule" && f.selector === "&" && f.nodes.length === 1 && Object.assign(f, f.nodes[0]), !d) return null;
    }), r.suggest("not", ()=>Array.from(r.keys()).filter((f)=>r.compoundsWith("not", f))), r.compound("group", 2, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative) return null;
        let d = g.modifier ? `:where(.${t.prefix ? `${t.prefix}\\:` : ""}group\\/${g.modifier.value})` : `:where(.${t.prefix ? `${t.prefix}\\:` : ""}group)`, m = !1;
        if (z([
            f
        ], (w, { path: v })=>{
            if (w.kind !== "rule") return 0;
            for (let y1 of v.slice(0, -1))if (y1.kind === "rule") return m = !1, 2;
            let x = w.selector.replaceAll("&", d);
            K(x, ",").length > 1 && (x = `:is(${x})`), w.selector = `&:is(${x} *)`, m = !0;
        }), !m) return null;
    }), r.suggest("group", ()=>Array.from(r.keys()).filter((f)=>r.compoundsWith("group", f))), r.compound("peer", 2, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative) return null;
        let d = g.modifier ? `:where(.${t.prefix ? `${t.prefix}\\:` : ""}peer\\/${g.modifier.value})` : `:where(.${t.prefix ? `${t.prefix}\\:` : ""}peer)`, m = !1;
        if (z([
            f
        ], (w, { path: v })=>{
            if (w.kind !== "rule") return 0;
            for (let y1 of v.slice(0, -1))if (y1.kind === "rule") return m = !1, 2;
            let x = w.selector.replaceAll("&", d);
            K(x, ",").length > 1 && (x = `:is(${x})`), w.selector = `&:is(${x} ~ *)`, m = !0;
        }), !m) return null;
    }), r.suggest("peer", ()=>Array.from(r.keys()).filter((f)=>r.compoundsWith("peer", f))), i("first-letter", [
        "&::first-letter"
    ]), i("first-line", [
        "&::first-line"
    ]), i("marker", [
        "& *::marker",
        "&::marker",
        "& *::-webkit-details-marker",
        "&::-webkit-details-marker"
    ]), i("selection", [
        "& *::selection",
        "&::selection"
    ]), i("file", [
        "&::file-selector-button"
    ]), i("placeholder", [
        "&::placeholder"
    ]), i("backdrop", [
        "&::backdrop"
    ]), i("details-content", [
        "&::details-content"
    ]);
    {
        let f = function() {
            return I([
                F("@property", "--tw-content", [
                    l("syntax", '"*"'),
                    l("initial-value", '""'),
                    l("inherits", "false")
                ])
            ]);
        };
        var c = f;
        r.static("before", (g)=>{
            g.nodes = [
                M("&::before", [
                    f(),
                    l("content", "var(--tw-content)"),
                    ...g.nodes
                ])
            ];
        }, {
            compounds: 0
        }), r.static("after", (g)=>{
            g.nodes = [
                M("&::after", [
                    f(),
                    l("content", "var(--tw-content)"),
                    ...g.nodes
                ])
            ];
        }, {
            compounds: 0
        });
    }
    i("first", [
        "&:first-child"
    ]), i("last", [
        "&:last-child"
    ]), i("only", [
        "&:only-child"
    ]), i("odd", [
        "&:nth-child(odd)"
    ]), i("even", [
        "&:nth-child(even)"
    ]), i("first-of-type", [
        "&:first-of-type"
    ]), i("last-of-type", [
        "&:last-of-type"
    ]), i("only-of-type", [
        "&:only-of-type"
    ]), i("visited", [
        "&:visited"
    ]), i("target", [
        "&:target"
    ]), i("open", [
        "&:is([open], :popover-open, :open)"
    ]), i("default", [
        "&:default"
    ]), i("checked", [
        "&:checked"
    ]), i("indeterminate", [
        "&:indeterminate"
    ]), i("placeholder-shown", [
        "&:placeholder-shown"
    ]), i("autofill", [
        "&:autofill"
    ]), i("optional", [
        "&:optional"
    ]), i("required", [
        "&:required"
    ]), i("valid", [
        "&:valid"
    ]), i("invalid", [
        "&:invalid"
    ]), i("user-valid", [
        "&:user-valid"
    ]), i("user-invalid", [
        "&:user-invalid"
    ]), i("in-range", [
        "&:in-range"
    ]), i("out-of-range", [
        "&:out-of-range"
    ]), i("read-only", [
        "&:read-only"
    ]), i("empty", [
        "&:empty"
    ]), i("focus-within", [
        "&:focus-within"
    ]), r.static("hover", (f)=>{
        f.nodes = [
            M("&:hover", [
                F("@media", "(hover: hover)", f.nodes)
            ])
        ];
    }), i("focus", [
        "&:focus"
    ]), i("focus-visible", [
        "&:focus-visible"
    ]), i("active", [
        "&:active"
    ]), i("enabled", [
        "&:enabled"
    ]), i("disabled", [
        "&:disabled"
    ]), i("inert", [
        "&:is([inert], [inert] *)"
    ]), r.compound("in", 2, (f, g)=>{
        if (g.modifier) return null;
        let d = !1;
        if (z([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule") return 0;
            for (let v of w.slice(0, -1))if (v.kind === "rule") return d = !1, 2;
            m.selector = `:where(${m.selector.replaceAll("&", "*")}) &`, d = !0;
        }), !d) return null;
    }), r.suggest("in", ()=>Array.from(r.keys()).filter((f)=>r.compoundsWith("in", f))), r.compound("has", 2, (f, g)=>{
        if (g.modifier) return null;
        let d = !1;
        if (z([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule") return 0;
            for (let v of w.slice(0, -1))if (v.kind === "rule") return d = !1, 2;
            m.selector = `&:has(${m.selector.replaceAll("&", "*")})`, d = !0;
        }), !d) return null;
    }), r.suggest("has", ()=>Array.from(r.keys()).filter((f)=>r.compoundsWith("has", f))), r.functional("aria", (f, g)=>{
        if (!g.value || g.modifier) return null;
        g.value.kind === "arbitrary" ? f.nodes = [
            M(`&[aria-${Or(g.value.value)}]`, f.nodes)
        ] : f.nodes = [
            M(`&[aria-${g.value.value}="true"]`, f.nodes)
        ];
    }), r.suggest("aria", ()=>[
            "busy",
            "checked",
            "disabled",
            "expanded",
            "hidden",
            "pressed",
            "readonly",
            "required",
            "selected"
        ]), r.functional("data", (f, g)=>{
        if (!g.value || g.modifier) return null;
        f.nodes = [
            M(`&[data-${Or(g.value.value)}]`, f.nodes)
        ];
    }), r.functional("nth", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !E(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-child(${g.value.value})`, f.nodes)
        ];
    }), r.functional("nth-last", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !E(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-last-child(${g.value.value})`, f.nodes)
        ];
    }), r.functional("nth-of-type", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !E(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-of-type(${g.value.value})`, f.nodes)
        ];
    }), r.functional("nth-last-of-type", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !E(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-last-of-type(${g.value.value})`, f.nodes)
        ];
    }), r.functional("supports", (f, g)=>{
        if (!g.value || g.modifier) return null;
        let d = g.value.value;
        if (d === null) return null;
        if (/^[\w-]*\s*\(/.test(d)) {
            let m = d.replace(/\b(and|or|not)\b/g, " $1 ");
            f.nodes = [
                F("@supports", m, f.nodes)
            ];
            return;
        }
        d.includes(":") || (d = `${d}: var(--tw)`), (d[0] !== "(" || d[d.length - 1] !== ")") && (d = `(${d})`), f.nodes = [
            F("@supports", d, f.nodes)
        ];
    }, {
        compounds: 1
    }), i("motion-safe", [
        "@media (prefers-reduced-motion: no-preference)"
    ]), i("motion-reduce", [
        "@media (prefers-reduced-motion: reduce)"
    ]), i("contrast-more", [
        "@media (prefers-contrast: more)"
    ]), i("contrast-less", [
        "@media (prefers-contrast: less)"
    ]);
    {
        let f = function(g, d, m, w) {
            if (g === d) return 0;
            let v = w.get(g);
            if (v === null) return m === "asc" ? -1 : 1;
            let x = w.get(d);
            return x === null ? m === "asc" ? 1 : -1 : ye(v, x, m);
        };
        var u = f;
        {
            let g = t.namespace("--breakpoint"), d = new B((m)=>{
                switch(m.kind){
                    case "static":
                        return t.resolveValue(m.root, [
                            "--breakpoint"
                        ]) ?? null;
                    case "functional":
                        {
                            if (!m.value || m.modifier) return null;
                            let w = null;
                            return m.value.kind === "arbitrary" ? w = m.value.value : m.value.kind === "named" && (w = t.resolveValue(m.value.value, [
                                "--breakpoint"
                            ])), !w || w.includes("var(") ? null : w;
                        }
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            r.group(()=>{
                r.functional("max", (m, w)=>{
                    if (w.modifier) return null;
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        F("@media", `(width < ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "desc", d)), r.suggest("max", ()=>Array.from(g.keys()).filter((m)=>m !== null)), r.group(()=>{
                for (let [m, w] of t.namespace("--breakpoint"))m !== null && r.static(m, (v)=>{
                    v.nodes = [
                        F("@media", `(width >= ${w})`, v.nodes)
                    ];
                }, {
                    compounds: 1
                });
                r.functional("min", (m, w)=>{
                    if (w.modifier) return null;
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        F("@media", `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "asc", d)), r.suggest("min", ()=>Array.from(g.keys()).filter((m)=>m !== null));
        }
        {
            let g = t.namespace("--container"), d = new B((m)=>{
                switch(m.kind){
                    case "functional":
                        {
                            if (m.value === null) return null;
                            let w = null;
                            return m.value.kind === "arbitrary" ? w = m.value.value : m.value.kind === "named" && (w = t.resolveValue(m.value.value, [
                                "--container"
                            ])), !w || w.includes("var(") ? null : w;
                        }
                    case "static":
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            r.group(()=>{
                r.functional("@max", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        F("@container", w.modifier ? `${w.modifier.value} (width < ${v})` : `(width < ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "desc", d)), r.suggest("@max", ()=>Array.from(g.keys()).filter((m)=>m !== null)), r.group(()=>{
                r.functional("@", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        F("@container", w.modifier ? `${w.modifier.value} (width >= ${v})` : `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                }), r.functional("@min", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        F("@container", w.modifier ? `${w.modifier.value} (width >= ${v})` : `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "asc", d)), r.suggest("@min", ()=>Array.from(g.keys()).filter((m)=>m !== null)), r.suggest("@", ()=>Array.from(g.keys()).filter((m)=>m !== null));
        }
    }
    return i("portrait", [
        "@media (orientation: portrait)"
    ]), i("landscape", [
        "@media (orientation: landscape)"
    ]), i("ltr", [
        '&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)'
    ]), i("rtl", [
        '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)'
    ]), i("dark", [
        "@media (prefers-color-scheme: dark)"
    ]), i("starting", [
        "@starting-style"
    ]), i("print", [
        "@media print"
    ]), i("forced-colors", [
        "@media (forced-colors: active)"
    ]), i("inverted-colors", [
        "@media (inverted-colors: inverted)"
    ]), i("pointer-none", [
        "@media (pointer: none)"
    ]), i("pointer-coarse", [
        "@media (pointer: coarse)"
    ]), i("pointer-fine", [
        "@media (pointer: fine)"
    ]), i("any-pointer-none", [
        "@media (any-pointer: none)"
    ]), i("any-pointer-coarse", [
        "@media (any-pointer: coarse)"
    ]), i("any-pointer-fine", [
        "@media (any-pointer: fine)"
    ]), i("noscript", [
        "@media (scripting: none)"
    ]), r;
}
function Or(t) {
    if (t.includes("=")) {
        let [r, ...i] = K(t, "="), e = i.join("=").trim();
        if (e[0] === "'" || e[0] === '"') return t;
        if (e.length > 1) {
            let n = e[e.length - 1];
            if (e[e.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return `${r}="${e.slice(0, -2)}" ${n}`;
        }
        return `${r}="${e}"`;
    }
    return t;
}
function jt(t, r) {
    z(t, (i, { replaceWith: e })=>{
        if (i.kind === "at-rule" && i.name === "@slot") e(r);
        else if (i.kind === "at-rule" && (i.name === "@keyframes" || i.name === "@property")) return Object.assign(i, I([
            F(i.name, i.params, i.nodes)
        ])), 1;
    });
}
function Kr(t) {
    let r = Nr(t), i = _r(t), e = new B((u)=>mr(u, c)), n = new B((u)=>Array.from(dr(u, c))), s = new B((u)=>{
        let f = Dr(u, c);
        try {
            Ve(f.map(({ node: g })=>g), c);
        } catch  {
            return [];
        }
        return f;
    }), a = new B((u)=>{
        for (let f of Ze(u))t.markUsedVariable(f);
    }), c = {
        theme: t,
        utilities: r,
        variants: i,
        invalidCandidates: new Set,
        important: !1,
        candidatesToCss (u) {
            let f = [];
            for (let g of u){
                let d = !1, { astNodes: m } = ge([
                    g
                ], this, {
                    onInvalidCandidate () {
                        d = !0;
                    }
                });
                m = be(m, c, 0), m.length === 0 || d ? f.push(null) : f.push(oe(m));
            }
            return f;
        },
        getClassOrder (u) {
            return Pr(this, u);
        },
        getClassList () {
            return Er(this);
        },
        getVariants () {
            return Rr(this);
        },
        parseCandidate (u) {
            return n.get(u);
        },
        parseVariant (u) {
            return e.get(u);
        },
        compileAstNodes (u) {
            return s.get(u);
        },
        printCandidate (u) {
            return hr(c, u);
        },
        printVariant (u) {
            return nt(u);
        },
        getVariantOrder () {
            let u = Array.from(e.values());
            u.sort((m, w)=>this.variants.compare(m, w));
            let f = new Map, g, d = 0;
            for (let m of u)m !== null && (g !== void 0 && this.variants.compare(g, m) !== 0 && d++, f.set(m, d), g = m);
            return f;
        },
        resolveThemeValue (u, f = !0) {
            let g = u.lastIndexOf("/"), d = null;
            g !== -1 && (d = u.slice(g + 1).trim(), u = u.slice(0, g).trim());
            let m = t.resolve(null, [
                u
            ], f ? 1 : 0) ?? void 0;
            return d && m ? Z(m, d) : m;
        },
        trackUsedVariables (u) {
            a.get(u);
        }
    };
    return c;
}
var Lt = [
    "container-type",
    "pointer-events",
    "visibility",
    "position",
    "inset",
    "inset-inline",
    "inset-block",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left",
    "isolation",
    "z-index",
    "order",
    "grid-column",
    "grid-column-start",
    "grid-column-end",
    "grid-row",
    "grid-row-start",
    "grid-row-end",
    "float",
    "clear",
    "--tw-container-component",
    "margin",
    "margin-inline",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "display",
    "field-sizing",
    "aspect-ratio",
    "height",
    "max-height",
    "min-height",
    "width",
    "max-width",
    "min-width",
    "flex",
    "flex-shrink",
    "flex-grow",
    "flex-basis",
    "table-layout",
    "caption-side",
    "border-collapse",
    "border-spacing",
    "transform-origin",
    "translate",
    "--tw-translate-x",
    "--tw-translate-y",
    "--tw-translate-z",
    "scale",
    "--tw-scale-x",
    "--tw-scale-y",
    "--tw-scale-z",
    "rotate",
    "--tw-rotate-x",
    "--tw-rotate-y",
    "--tw-rotate-z",
    "--tw-skew-x",
    "--tw-skew-y",
    "transform",
    "animation",
    "cursor",
    "touch-action",
    "--tw-pan-x",
    "--tw-pan-y",
    "--tw-pinch-zoom",
    "resize",
    "scroll-snap-type",
    "--tw-scroll-snap-strictness",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-margin",
    "scroll-margin-inline",
    "scroll-margin-block",
    "scroll-margin-inline-start",
    "scroll-margin-inline-end",
    "scroll-margin-top",
    "scroll-margin-right",
    "scroll-margin-bottom",
    "scroll-margin-left",
    "scroll-padding",
    "scroll-padding-inline",
    "scroll-padding-block",
    "scroll-padding-inline-start",
    "scroll-padding-inline-end",
    "scroll-padding-top",
    "scroll-padding-right",
    "scroll-padding-bottom",
    "scroll-padding-left",
    "list-style-position",
    "list-style-type",
    "list-style-image",
    "appearance",
    "columns",
    "break-before",
    "break-inside",
    "break-after",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-template-columns",
    "grid-template-rows",
    "flex-direction",
    "flex-wrap",
    "place-content",
    "place-items",
    "align-content",
    "align-items",
    "justify-content",
    "justify-items",
    "gap",
    "column-gap",
    "row-gap",
    "--tw-space-x-reverse",
    "--tw-space-y-reverse",
    "divide-x-width",
    "divide-y-width",
    "--tw-divide-y-reverse",
    "divide-style",
    "divide-color",
    "place-self",
    "align-self",
    "justify-self",
    "overflow",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "scroll-behavior",
    "border-radius",
    "border-start-radius",
    "border-end-radius",
    "border-top-radius",
    "border-right-radius",
    "border-bottom-radius",
    "border-left-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-width",
    "border-inline-width",
    "border-block-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-style",
    "border-inline-style",
    "border-block-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-color",
    "border-inline-color",
    "border-block-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "background-color",
    "background-image",
    "--tw-gradient-position",
    "--tw-gradient-stops",
    "--tw-gradient-via-stops",
    "--tw-gradient-from",
    "--tw-gradient-from-position",
    "--tw-gradient-via",
    "--tw-gradient-via-position",
    "--tw-gradient-to",
    "--tw-gradient-to-position",
    "mask-image",
    "--tw-mask-top",
    "--tw-mask-top-from-color",
    "--tw-mask-top-from-position",
    "--tw-mask-top-to-color",
    "--tw-mask-top-to-position",
    "--tw-mask-right",
    "--tw-mask-right-from-color",
    "--tw-mask-right-from-position",
    "--tw-mask-right-to-color",
    "--tw-mask-right-to-position",
    "--tw-mask-bottom",
    "--tw-mask-bottom-from-color",
    "--tw-mask-bottom-from-position",
    "--tw-mask-bottom-to-color",
    "--tw-mask-bottom-to-position",
    "--tw-mask-left",
    "--tw-mask-left-from-color",
    "--tw-mask-left-from-position",
    "--tw-mask-left-to-color",
    "--tw-mask-left-to-position",
    "--tw-mask-linear",
    "--tw-mask-linear-position",
    "--tw-mask-linear-from-color",
    "--tw-mask-linear-from-position",
    "--tw-mask-linear-to-color",
    "--tw-mask-linear-to-position",
    "--tw-mask-radial",
    "--tw-mask-radial-shape",
    "--tw-mask-radial-size",
    "--tw-mask-radial-position",
    "--tw-mask-radial-from-color",
    "--tw-mask-radial-from-position",
    "--tw-mask-radial-to-color",
    "--tw-mask-radial-to-position",
    "--tw-mask-conic",
    "--tw-mask-conic-position",
    "--tw-mask-conic-from-color",
    "--tw-mask-conic-from-position",
    "--tw-mask-conic-to-color",
    "--tw-mask-conic-to-position",
    "box-decoration-break",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-position",
    "background-repeat",
    "background-origin",
    "mask-composite",
    "mask-mode",
    "mask-type",
    "mask-size",
    "mask-clip",
    "mask-position",
    "mask-repeat",
    "mask-origin",
    "fill",
    "stroke",
    "stroke-width",
    "object-fit",
    "object-position",
    "padding",
    "padding-inline",
    "padding-block",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "text-align",
    "text-indent",
    "vertical-align",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "letter-spacing",
    "text-wrap",
    "overflow-wrap",
    "word-break",
    "text-overflow",
    "hyphens",
    "white-space",
    "color",
    "text-transform",
    "font-style",
    "font-stretch",
    "font-variant-numeric",
    "text-decoration-line",
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-underline-offset",
    "-webkit-font-smoothing",
    "placeholder-color",
    "caret-color",
    "accent-color",
    "color-scheme",
    "opacity",
    "background-blend-mode",
    "mix-blend-mode",
    "box-shadow",
    "--tw-shadow",
    "--tw-shadow-color",
    "--tw-ring-shadow",
    "--tw-ring-color",
    "--tw-inset-shadow",
    "--tw-inset-shadow-color",
    "--tw-inset-ring-shadow",
    "--tw-inset-ring-color",
    "--tw-ring-offset-width",
    "--tw-ring-offset-color",
    "outline",
    "outline-width",
    "outline-offset",
    "outline-color",
    "--tw-blur",
    "--tw-brightness",
    "--tw-contrast",
    "--tw-drop-shadow",
    "--tw-grayscale",
    "--tw-hue-rotate",
    "--tw-invert",
    "--tw-saturate",
    "--tw-sepia",
    "filter",
    "--tw-backdrop-blur",
    "--tw-backdrop-brightness",
    "--tw-backdrop-contrast",
    "--tw-backdrop-grayscale",
    "--tw-backdrop-hue-rotate",
    "--tw-backdrop-invert",
    "--tw-backdrop-opacity",
    "--tw-backdrop-saturate",
    "--tw-backdrop-sepia",
    "backdrop-filter",
    "transition-property",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "will-change",
    "contain",
    "content",
    "forced-color-adjust"
];
function ge(t, r, { onInvalidCandidate: i } = {}) {
    let e = new Map, n = [], s = new Map;
    for (let c of t){
        if (r.invalidCandidates.has(c)) {
            i?.(c);
            continue;
        }
        let u = r.parseCandidate(c);
        if (u.length === 0) {
            i?.(c);
            continue;
        }
        s.set(c, u);
    }
    let a = r.getVariantOrder();
    for (let [c, u] of s){
        let f = !1;
        for (let g of u){
            let d = r.compileAstNodes(g);
            if (d.length !== 0) {
                f = !0;
                for (let { node: m, propertySort: w } of d){
                    let v = 0n;
                    for (let x of g.variants)v |= 1n << BigInt(a.get(x));
                    e.set(m, {
                        properties: w,
                        variants: v,
                        candidate: c
                    }), n.push(m);
                }
            }
        }
        f || i?.(c);
    }
    return n.sort((c, u)=>{
        let f = e.get(c), g = e.get(u);
        if (f.variants - g.variants !== 0n) return Number(f.variants - g.variants);
        let d = 0;
        for(; d < f.properties.order.length && d < g.properties.order.length && f.properties.order[d] === g.properties.order[d];)d += 1;
        return (f.properties.order[d] ?? 1 / 0) - (g.properties.order[d] ?? 1 / 0) || g.properties.count - f.properties.count || ut(f.candidate, g.candidate);
    }), {
        astNodes: n,
        nodeSorting: e
    };
}
function Dr(t, r) {
    let i = Tn(t, r);
    if (i.length === 0) return [];
    let e = [], n = `.${de(t.raw)}`;
    for (let s of i){
        let a = En(s);
        (t.important || r.important) && jr(s);
        let c = {
            kind: "rule",
            selector: n,
            nodes: s
        };
        for (let u of t.variants)if (Te(c, u, r.variants) === null) return [];
        e.push({
            node: c,
            propertySort: a
        });
    }
    return e;
}
function Te(t, r, i, e = 0) {
    if (r.kind === "arbitrary") {
        if (r.relative && e === 0) return null;
        t.nodes = [
            G(r.selector, t.nodes)
        ];
        return;
    }
    let { applyFn: n } = i.get(r.root);
    if (r.kind === "compound") {
        let a = F("@slot");
        if (Te(a, r.variant, i, e + 1) === null || r.root === "not" && a.nodes.length > 1) return null;
        for (let u of a.nodes)if (u.kind !== "rule" && u.kind !== "at-rule" || n(u, r) === null) return null;
        z(a.nodes, (u)=>{
            if ((u.kind === "rule" || u.kind === "at-rule") && u.nodes.length <= 0) return u.nodes = t.nodes, 1;
        }), t.nodes = a.nodes;
        return;
    }
    if (n(t, r) === null) return null;
}
function Ur(t) {
    let r = t.options?.types ?? [];
    return r.length > 1 && r.includes("any");
}
function Tn(t, r) {
    if (t.kind === "arbitrary") {
        let a = t.value;
        return t.modifier && (a = X(a, t.modifier, r.theme)), a === null ? [] : [
            [
                l(t.property, a)
            ]
        ];
    }
    let i = r.utilities.get(t.root) ?? [], e = [], n = i.filter((a)=>!Ur(a));
    for (let a of n){
        if (a.kind !== t.kind) continue;
        let c = a.compileFn(t);
        if (c !== void 0) {
            if (c === null) return e;
            e.push(c);
        }
    }
    if (e.length > 0) return e;
    let s = i.filter((a)=>Ur(a));
    for (let a of s){
        if (a.kind !== t.kind) continue;
        let c = a.compileFn(t);
        if (c !== void 0) {
            if (c === null) return e;
            e.push(c);
        }
    }
    return e;
}
function jr(t) {
    for (let r of t)r.kind !== "at-root" && (r.kind === "declaration" ? r.important = !0 : (r.kind === "rule" || r.kind === "at-rule") && jr(r.nodes));
}
function En(t) {
    let r = new Set, i = 0, e = t.slice(), n = !1;
    for(; e.length > 0;){
        let s = e.shift();
        if (s.kind === "declaration") {
            if (s.value === void 0 || (i++, n)) continue;
            if (s.property === "--tw-sort") {
                let c = Lt.indexOf(s.value ?? "");
                if (c !== -1) {
                    r.add(c), n = !0;
                    continue;
                }
            }
            let a = Lt.indexOf(s.property);
            a !== -1 && r.add(a);
        } else if (s.kind === "rule" || s.kind === "at-rule") for (let a of s.nodes)e.push(a);
    }
    return {
        order: Array.from(r).sort((s, a)=>s - a),
        count: i
    };
}
function Le(t, r) {
    let i = 0, e = G("&", t), n = new Set, s = new B(()=>new Set), a = new B(()=>new Set);
    z([
        e
    ], (d, { parent: m, path: w })=>{
        if (d.kind === "at-rule") {
            if (d.name === "@keyframes") return z(d.nodes, (v)=>{
                if (v.kind === "at-rule" && v.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
            }), 1;
            if (d.name === "@utility") {
                let v = d.params.replace(/-\*$/, "");
                a.get(v).add(d), z(d.nodes, (x)=>{
                    if (!(x.kind !== "at-rule" || x.name !== "@apply")) {
                        n.add(d);
                        for (let y1 of Lr(x, r))s.get(d).add(y1);
                    }
                });
                return;
            }
            if (d.name === "@apply") {
                if (m === null) return;
                i |= 1, n.add(m);
                for (let v of Lr(d, r))for (let x of w)x !== d && n.has(x) && s.get(x).add(v);
            }
        }
    });
    let c = new Set, u = [], f = new Set;
    function g(d, m = []) {
        if (!c.has(d)) {
            if (f.has(d)) {
                let w = m[(m.indexOf(d) + 1) % m.length];
                throw d.kind === "at-rule" && d.name === "@utility" && w.kind === "at-rule" && w.name === "@utility" && z(d.nodes, (v)=>{
                    if (v.kind !== "at-rule" || v.name !== "@apply") return;
                    let x = v.params.split(/\s+/g);
                    for (let y1 of x)for (let V of r.parseCandidate(y1))switch(V.kind){
                        case "arbitrary":
                            break;
                        case "static":
                        case "functional":
                            if (w.params.replace(/-\*$/, "") === V.root) throw new Error(`You cannot \`@apply\` the \`${y1}\` utility here because it creates a circular dependency.`);
                            break;
                        default:
                    }
                }), new Error(`Circular dependency detected:

${oe([
                    d
                ])}
Relies on:

${oe([
                    w
                ])}`);
            }
            f.add(d);
            for (let w of s.get(d))for (let v of a.get(w))m.push(d), g(v, m), m.pop();
            c.add(d), f.delete(d), u.push(d);
        }
    }
    for (let d of n)g(d);
    for (let d of u)"nodes" in d && z(d.nodes, (m, { replaceWith: w })=>{
        if (m.kind !== "at-rule" || m.name !== "@apply") return;
        let v = m.params.split(/(\s+)/g), x = {}, y1 = 0;
        for (let [V, b] of v.entries())V % 2 === 0 && (x[b] = y1), y1 += b.length;
        {
            let V = Object.keys(x), b = ge(V, r, {
                onInvalidCandidate: (P)=>{
                    if (r.theme.prefix && !P.startsWith(r.theme.prefix)) throw new Error(`Cannot apply unprefixed utility class \`${P}\`. Did you mean \`${r.theme.prefix}:${P}\`?`);
                    if (r.invalidCandidates.has(P)) throw new Error(`Cannot apply utility class \`${P}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
                    let D = K(P, ":");
                    if (D.length > 1) {
                        let _ = D.pop();
                        if (r.candidatesToCss([
                            _
                        ])[0]) {
                            let H = r.candidatesToCss(D.map((W)=>`${W}:[--tw-variant-check:1]`)), L = D.filter((W, Q)=>H[Q] === null);
                            if (L.length > 0) {
                                if (L.length === 1) throw new Error(`Cannot apply utility class \`${P}\` because the ${L.map((W)=>`\`${W}\``)} variant does not exist.`);
                                {
                                    let W = new Intl.ListFormat("en", {
                                        style: "long",
                                        type: "conjunction"
                                    });
                                    throw new Error(`Cannot apply utility class \`${P}\` because the ${W.format(L.map((Q)=>`\`${Q}\``))} variants do not exist.`);
                                }
                            }
                        }
                    }
                    throw r.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${P}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${P}\``);
                }
            }), S = m.src, R = b.astNodes.map((P)=>{
                let D = b.nodeSorting.get(P)?.candidate, _ = D ? x[D] : void 0;
                if (P = structuredClone(P), !S || !D || _ === void 0) return z([
                    P
                ], (L)=>{
                    L.src = S;
                }), P;
                let H = [
                    S[0],
                    S[1],
                    S[2]
                ];
                return H[1] += 7 + _, H[2] = H[1] + D.length, z([
                    P
                ], (L)=>{
                    L.src = H;
                }), P;
            }), j = [];
            for (let P of R)if (P.kind === "rule") for (let D of P.nodes)j.push(D);
            else j.push(P);
            w(j);
        }
    });
    return i;
}
function* Lr(t, r) {
    for (let i of t.params.split(/\s+/g))for (let e of r.parseCandidate(i))switch(e.kind){
        case "arbitrary":
            break;
        case "static":
        case "functional":
            yield e.root;
            break;
        default:
    }
}
async function zt(t, r, i, e = 0, n = !1) {
    let s = 0, a = [];
    return z(t, (c, { replaceWith: u })=>{
        if (c.kind === "at-rule" && (c.name === "@import" || c.name === "@reference")) {
            let f = Rn(q(c.params));
            if (f === null) return;
            c.name === "@reference" && (f.media = "reference"), s |= 2;
            let { uri: g, layer: d, media: m, supports: w } = f;
            if (g.startsWith("data:") || g.startsWith("http://") || g.startsWith("https://")) return;
            let v = se({}, []);
            return a.push((async ()=>{
                if (e > 100) throw new Error(`Exceeded maximum recursion depth while resolving \`${g}\` in \`${r}\`)`);
                let x = await i(g, r), y1 = ve(x.content, {
                    from: n ? x.path : void 0
                });
                await zt(y1, x.base, i, e + 1, n), v.nodes = Pn(c, [
                    se({
                        base: x.base
                    }, y1)
                ], d, m, w);
            })()), u(v), 1;
        }
    }), a.length > 0 && await Promise.all(a), s;
}
function Rn(t) {
    let r, i = null, e = null, n = null;
    for(let s = 0; s < t.length; s++){
        let a = t[s];
        if (a.kind !== "separator") {
            if (a.kind === "word" && !r) {
                if (!a.value || a.value[0] !== '"' && a.value[0] !== "'") return null;
                r = a.value.slice(1, -1);
                continue;
            }
            if (a.kind === "function" && a.value.toLowerCase() === "url" || !r) return null;
            if ((a.kind === "word" || a.kind === "function") && a.value.toLowerCase() === "layer") {
                if (i) return null;
                if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
                "nodes" in a ? i = J(a.nodes) : i = "";
                continue;
            }
            if (a.kind === "function" && a.value.toLowerCase() === "supports") {
                if (n) return null;
                n = J(a.nodes);
                continue;
            }
            e = J(t.slice(s));
            break;
        }
    }
    return r ? {
        uri: r,
        layer: i,
        media: e,
        supports: n
    } : null;
}
function Pn(t, r, i, e, n) {
    let s = r;
    if (i !== null) {
        let a = F("@layer", i, s);
        a.src = t.src, s = [
            a
        ];
    }
    if (e !== null) {
        let a = F("@media", e, s);
        a.src = t.src, s = [
            a
        ];
    }
    if (n !== null) {
        let a = F("@supports", n[0] === "(" ? n : `(${n})`, s);
        a.src = t.src, s = [
            a
        ];
    }
    return s;
}
function Ee(t, r = null) {
    return Array.isArray(t) && t.length === 2 && typeof t[1] == "object" && typeof t[1] !== null ? r ? t[1][r] ?? null : t[0] : Array.isArray(t) && r === null ? t.join(", ") : typeof t == "string" && r === null ? t : null;
}
function zr(t, { theme: r }, i) {
    for (let e of i){
        let n = ft([
            e
        ]);
        n && t.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [e, n] of On(r)){
        if (typeof n != "string" && typeof n != "number") continue;
        if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), e[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
            let a = typeof n == "string" ? parseFloat(n) : n;
            a >= 0 && a <= 1 && (n = a * 100 + "%");
        }
        let s = ft(e);
        s && t.theme.add(`--${s}`, "" + n, 7);
    }
    if (Object.hasOwn(r, "fontFamily")) {
        let e = 5;
        {
            let n = Ee(r.fontFamily.sans);
            n && t.theme.hasDefault("--font-sans") && (t.theme.add("--default-font-family", n, e), t.theme.add("--default-font-feature-settings", Ee(r.fontFamily.sans, "fontFeatureSettings") ?? "normal", e), t.theme.add("--default-font-variation-settings", Ee(r.fontFamily.sans, "fontVariationSettings") ?? "normal", e));
        }
        {
            let n = Ee(r.fontFamily.mono);
            n && t.theme.hasDefault("--font-mono") && (t.theme.add("--default-mono-font-family", n, e), t.theme.add("--default-mono-font-feature-settings", Ee(r.fontFamily.mono, "fontFeatureSettings") ?? "normal", e), t.theme.add("--default-mono-font-variation-settings", Ee(r.fontFamily.mono, "fontVariationSettings") ?? "normal", e));
        }
    }
    return r;
}
function On(t) {
    let r = [];
    return Ir(t, [], (i, e)=>{
        if (Kn(i)) return r.push([
            e,
            i
        ]), 1;
        if (Dn(i)) {
            r.push([
                e,
                i[0]
            ]);
            for (let n of Reflect.ownKeys(i[1]))r.push([
                [
                    ...e,
                    `-${n}`
                ],
                i[1][n]
            ]);
            return 1;
        }
        if (Array.isArray(i) && i.every((n)=>typeof n == "string")) return e[0] === "fontSize" ? (r.push([
            e,
            i[0]
        ]), i.length >= 2 && r.push([
            [
                ...e,
                "-line-height"
            ],
            i[1]
        ])) : r.push([
            e,
            i.join(", ")
        ]), 1;
    }), r;
}
var _n = /^[a-zA-Z0-9-_%/\.]+$/;
function ft(t) {
    if (t[0] === "container") return null;
    t = structuredClone(t), t[0] === "animation" && (t[0] = "animate"), t[0] === "aspectRatio" && (t[0] = "aspect"), t[0] === "borderRadius" && (t[0] = "radius"), t[0] === "boxShadow" && (t[0] = "shadow"), t[0] === "colors" && (t[0] = "color"), t[0] === "containers" && (t[0] = "container"), t[0] === "fontFamily" && (t[0] = "font"), t[0] === "fontSize" && (t[0] = "text"), t[0] === "letterSpacing" && (t[0] = "tracking"), t[0] === "lineHeight" && (t[0] = "leading"), t[0] === "maxWidth" && (t[0] = "container"), t[0] === "screens" && (t[0] = "breakpoint"), t[0] === "transitionTimingFunction" && (t[0] = "ease");
    for (let r of t)if (!_n.test(r)) return null;
    return t.map((r, i, e)=>r === "1" && i !== e.length - 1 ? "" : r).map((r)=>r.replaceAll(".", "_").replace(/([a-z])([A-Z])/g, (i, e, n)=>`${e}-${n.toLowerCase()}`)).filter((r, i)=>r !== "DEFAULT" || i !== t.length - 1).join("-");
}
function Kn(t) {
    return typeof t == "number" || typeof t == "string";
}
function Dn(t) {
    if (!Array.isArray(t) || t.length !== 2 || typeof t[0] != "string" && typeof t[0] != "number" || t[1] === void 0 || t[1] === null || typeof t[1] != "object") return !1;
    for (let r of Reflect.ownKeys(t[1]))if (typeof r != "string" || typeof t[1][r] != "string" && typeof t[1][r] != "number") return !1;
    return !0;
}
function Ir(t, r = [], i) {
    for (let e of Reflect.ownKeys(t)){
        let n = t[e];
        if (n == null) continue;
        let s = [
            ...r,
            e
        ], a = i(n, s) ?? 0;
        if (a !== 1) {
            if (a === 2) return 2;
            if (!(!Array.isArray(n) && typeof n != "object") && Ir(n, s, i) === 2) return 2;
        }
    }
}
function pt(t) {
    let r = [];
    for (let i of K(t, ".")){
        if (!i.includes("[")) {
            r.push(i);
            continue;
        }
        let e = 0;
        for(;;){
            let n = i.indexOf("[", e), s = i.indexOf("]", n);
            if (n === -1 || s === -1) break;
            n > e && r.push(i.slice(e, n)), r.push(i.slice(n + 1, s)), e = s + 1;
        }
        e <= i.length - 1 && r.push(i.slice(e));
    }
    return r;
}
function Re(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
    let r = Object.getPrototypeOf(t);
    return r === null || Object.getPrototypeOf(r) === null;
}
function ze(t, r, i, e = []) {
    for (let n of r)if (n != null) for (let s of Reflect.ownKeys(n)){
        e.push(s);
        let a = i(t[s], n[s], e);
        a !== void 0 ? t[s] = a : !Re(t[s]) || !Re(n[s]) ? t[s] = n[s] : t[s] = ze({}, [
            t[s],
            n[s]
        ], i, e), e.pop();
    }
    return t;
}
function dt(t, r, i) {
    return function(n, s) {
        let a = n.lastIndexOf("/"), c = null;
        a !== -1 && (c = n.slice(a + 1).trim(), n = n.slice(0, a).trim());
        let u = (()=>{
            let f = pt(n), [g, d] = Un(t.theme, f), m = i(Fr(r() ?? {}, f) ?? null);
            if (typeof m == "string" && (m = m.replace("<alpha-value>", "1")), typeof g != "object") return typeof d != "object" && d & 4 ? m ?? g : g;
            if (m !== null && typeof m == "object" && !Array.isArray(m)) {
                let w = ze({}, [
                    m
                ], (v, x)=>x);
                if (g === null && Object.hasOwn(m, "__CSS_VALUES__")) {
                    let v = {};
                    for(let x in m.__CSS_VALUES__)v[x] = m[x], delete w[x];
                    g = v;
                }
                for(let v in g)v !== "__CSS_VALUES__" && (m?.__CSS_VALUES__?.[v] & 4 && Fr(w, v.split("-")) !== void 0 || (w[we(v)] = g[v]));
                return w;
            }
            if (Array.isArray(g) && Array.isArray(d) && Array.isArray(m)) {
                let w = g[0], v = g[1];
                d[0] & 4 && (w = m[0] ?? w);
                for (let x of Object.keys(v))d[1][x] & 4 && (v[x] = m[1][x] ?? v[x]);
                return [
                    w,
                    v
                ];
            }
            return g ?? m;
        })();
        return c && typeof u == "string" && (u = Z(u, c)), u ?? s;
    };
}
function Un(t, r) {
    if (r.length === 1 && r[0].startsWith("--")) return [
        t.get([
            r[0]
        ]),
        t.getOptions(r[0])
    ];
    let i = ft(r), e = new Map, n = new B(()=>new Map), s = t.namespace(`--${i}`);
    if (s.size === 0) return [
        null,
        0
    ];
    let a = new Map;
    for (let [g, d] of s){
        if (!g || !g.includes("--")) {
            e.set(g, d), a.set(g, t.getOptions(g ? `--${i}-${g}` : `--${i}`));
            continue;
        }
        let m = g.indexOf("--"), w = g.slice(0, m), v = g.slice(m + 2);
        v = v.replace(/-([a-z])/g, (x, y1)=>y1.toUpperCase()), n.get(w === "" ? null : w).set(v, [
            d,
            t.getOptions(`--${i}${g}`)
        ]);
    }
    let c = t.getOptions(`--${i}`);
    for (let [g, d] of n){
        let m = e.get(g);
        if (typeof m != "string") continue;
        let w = {}, v = {};
        for (let [x, [y1, V]] of d)w[x] = y1, v[x] = V;
        e.set(g, [
            m,
            w
        ]), a.set(g, [
            c,
            v
        ]);
    }
    let u = {}, f = {};
    for (let [g, d] of e)Mr(u, [
        g ?? "DEFAULT"
    ], d);
    for (let [g, d] of a)Mr(f, [
        g ?? "DEFAULT"
    ], d);
    return r[r.length - 1] === "DEFAULT" ? [
        u?.DEFAULT ?? null,
        f.DEFAULT ?? 0
    ] : "DEFAULT" in u && Object.keys(u).length === 1 ? [
        u.DEFAULT,
        f.DEFAULT ?? 0
    ] : (u.__CSS_VALUES__ = f, [
        u,
        f
    ]);
}
function Fr(t, r) {
    for(let i = 0; i < r.length; ++i){
        let e = r[i];
        if (t?.[e] === void 0) {
            if (r[i + 1] === void 0) return;
            r[i + 1] = `${e}-${r[i + 1]}`;
            continue;
        }
        t = t[e];
    }
    return t;
}
function Mr(t, r, i) {
    for (let e of r.slice(0, -1))t[e] === void 0 && (t[e] = {}), t = t[e];
    t[r[r.length - 1]] = i;
}
function jn(t) {
    return {
        kind: "combinator",
        value: t
    };
}
function Ln(t, r) {
    return {
        kind: "function",
        value: t,
        nodes: r
    };
}
function Ie(t) {
    return {
        kind: "selector",
        value: t
    };
}
function zn(t) {
    return {
        kind: "separator",
        value: t
    };
}
function In(t) {
    return {
        kind: "value",
        value: t
    };
}
function Fe(t, r, i = null) {
    for(let e = 0; e < t.length; e++){
        let n = t[e], s = !1, a = 0, c = r(n, {
            parent: i,
            replaceWith (u) {
                s || (s = !0, Array.isArray(u) ? u.length === 0 ? (t.splice(e, 1), a = 0) : u.length === 1 ? (t[e] = u[0], a = 1) : (t.splice(e, 1, ...u), a = u.length) : (t[e] = u, a = 1));
            }
        }) ?? 0;
        if (s) {
            c === 0 ? e-- : e += a - 1;
            continue;
        }
        if (c === 2) return 2;
        if (c !== 1 && n.kind === "function" && Fe(n.nodes, r, n) === 2) return 2;
    }
}
function Me(t) {
    let r = "";
    for (let i of t)switch(i.kind){
        case "combinator":
        case "selector":
        case "separator":
        case "value":
            {
                r += i.value;
                break;
            }
        case "function":
            r += i.value + "(" + Me(i.nodes) + ")";
    }
    return r;
}
var Wr = 92, Fn = 93, Br = 41, Mn = 58, qr = 44, Wn = 34, Bn = 46, Hr = 62, Gr = 10, qn = 35, Yr = 91, Jr = 40, Qr = 43, Hn = 39, Zr = 32, Xr = 9, ei = 126;
function mt(t) {
    t = t.replaceAll(`\r
`, `
`);
    let r = [], i = [], e = null, n = "", s;
    for(let a = 0; a < t.length; a++){
        let c = t.charCodeAt(a);
        switch(c){
            case qr:
            case Hr:
            case Gr:
            case Zr:
            case Qr:
            case Xr:
            case ei:
                {
                    if (n.length > 0) {
                        let m = Ie(n);
                        e ? e.nodes.push(m) : r.push(m), n = "";
                    }
                    let u = a, f = a + 1;
                    for(; f < t.length && (s = t.charCodeAt(f), !(s !== qr && s !== Hr && s !== Gr && s !== Zr && s !== Qr && s !== Xr && s !== ei)); f++);
                    a = f - 1;
                    let g = t.slice(u, f), d = g.trim() === "," ? zn(g) : jn(g);
                    e ? e.nodes.push(d) : r.push(d);
                    break;
                }
            case Jr:
                {
                    let u = Ln(n, []);
                    if (n = "", u.value !== ":not" && u.value !== ":where" && u.value !== ":has" && u.value !== ":is") {
                        let f = a + 1, g = 0;
                        for(let m = a + 1; m < t.length; m++){
                            if (s = t.charCodeAt(m), s === Jr) {
                                g++;
                                continue;
                            }
                            if (s === Br) {
                                if (g === 0) {
                                    a = m;
                                    break;
                                }
                                g--;
                            }
                        }
                        let d = a;
                        u.nodes.push(In(t.slice(f, d))), n = "", a = d, e ? e.nodes.push(u) : r.push(u);
                        break;
                    }
                    e ? e.nodes.push(u) : r.push(u), i.push(u), e = u;
                    break;
                }
            case Br:
                {
                    let u = i.pop();
                    if (n.length > 0) {
                        let f = Ie(n);
                        u.nodes.push(f), n = "";
                    }
                    i.length > 0 ? e = i[i.length - 1] : e = null;
                    break;
                }
            case Bn:
            case Mn:
            case qn:
                {
                    if (n.length > 0) {
                        let u = Ie(n);
                        e ? e.nodes.push(u) : r.push(u);
                    }
                    n = String.fromCharCode(c);
                    break;
                }
            case Yr:
                {
                    if (n.length > 0) {
                        let g = Ie(n);
                        e ? e.nodes.push(g) : r.push(g);
                    }
                    n = "";
                    let u = a, f = 0;
                    for(let g = a + 1; g < t.length; g++){
                        if (s = t.charCodeAt(g), s === Yr) {
                            f++;
                            continue;
                        }
                        if (s === Fn) {
                            if (f === 0) {
                                a = g;
                                break;
                            }
                            f--;
                        }
                    }
                    n += t.slice(u, a + 1);
                    break;
                }
            case Hn:
            case Wn:
                {
                    let u = a;
                    for(let f = a + 1; f < t.length; f++)if (s = t.charCodeAt(f), s === Wr) f += 1;
                    else if (s === c) {
                        a = f;
                        break;
                    }
                    n += t.slice(u, a + 1);
                    break;
                }
            case Wr:
                {
                    let u = t.charCodeAt(a + 1);
                    n += String.fromCharCode(c) + String.fromCharCode(u), a += 1;
                    break;
                }
            default:
                n += String.fromCharCode(c);
        }
    }
    return n.length > 0 && r.push(Ie(n)), r;
}
var ti = /^[a-z@][a-zA-Z0-9/%._-]*$/;
function It({ designSystem: t, ast: r, resolvedConfig: i, featuresRef: e, referenceMode: n }) {
    let s = {
        addBase (a) {
            if (n) return;
            let c = ue(a);
            e.current |= Ve(c, t), r.push(F("@layer", "base", c));
        },
        addVariant (a, c) {
            if (!ct.test(a)) throw new Error(`\`addVariant('${a}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
            if (typeof c == "string") {
                if (c.includes(":merge(")) return;
            } else if (Array.isArray(c)) {
                if (c.some((f)=>f.includes(":merge("))) return;
            } else if (typeof c == "object") {
                let f = function(g, d) {
                    return Object.entries(g).some(([m, w])=>m.includes(d) || typeof w == "object" && f(w, d));
                };
                var u = f;
                if (f(c, ":merge(")) return;
            }
            typeof c == "string" || Array.isArray(c) ? t.variants.static(a, (f)=>{
                f.nodes = ri(c, f.nodes);
            }, {
                compounds: Ae(typeof c == "string" ? [
                    c
                ] : c)
            }) : typeof c == "object" && t.variants.fromAst(a, ue(c));
        },
        matchVariant (a, c, u) {
            function f(d, m, w) {
                let v = c(d, {
                    modifier: m?.value ?? null
                });
                return ri(v, w);
            }
            try {
                let d = c("a", {
                    modifier: null
                });
                if (typeof d == "string" && d.includes(":merge(")) return;
                if (Array.isArray(d) && d.some((m)=>m.includes(":merge("))) return;
            } catch  {}
            let g = Object.keys(u?.values ?? {});
            t.variants.group(()=>{
                t.variants.functional(a, (d, m)=>{
                    if (!m.value) {
                        if (u?.values && "DEFAULT" in u.values) {
                            d.nodes = f(u.values.DEFAULT, m.modifier, d.nodes);
                            return;
                        }
                        return null;
                    }
                    if (m.value.kind === "arbitrary") d.nodes = f(m.value.value, m.modifier, d.nodes);
                    else if (m.value.kind === "named" && u?.values) {
                        let w = u.values[m.value.value];
                        if (typeof w != "string") return;
                        d.nodes = f(w, m.modifier, d.nodes);
                    }
                });
            }, (d, m)=>{
                if (d.kind !== "functional" || m.kind !== "functional") return 0;
                let w = d.value ? d.value.value : "DEFAULT", v = m.value ? m.value.value : "DEFAULT", x = u?.values?.[w] ?? w, y1 = u?.values?.[v] ?? v;
                if (u && typeof u.sort == "function") return u.sort({
                    value: x,
                    modifier: d.modifier?.value ?? null
                }, {
                    value: y1,
                    modifier: m.modifier?.value ?? null
                });
                let V = g.indexOf(w), b = g.indexOf(v);
                return V = V === -1 ? g.length : V, b = b === -1 ? g.length : b, V !== b ? V - b : x < y1 ? -1 : 1;
            });
        },
        addUtilities (a) {
            a = Array.isArray(a) ? a : [
                a
            ];
            let c = a.flatMap((f)=>Object.entries(f));
            c = c.flatMap(([f, g])=>K(f, ",").map((d)=>[
                        d.trim(),
                        g
                    ]));
            let u = new B(()=>[]);
            for (let [f, g] of c){
                if (f.startsWith("@keyframes ")) {
                    n || r.push(G(f, ue(g)));
                    continue;
                }
                let d = mt(f), m = !1;
                if (Fe(d, (w)=>{
                    if (w.kind === "selector" && w.value[0] === "." && ti.test(w.value.slice(1))) {
                        let v = w.value;
                        w.value = "&";
                        let x = Me(d), y1 = v.slice(1), V = x === "&" ? ue(g) : [
                            G(x, ue(g))
                        ];
                        u.get(y1).push(...V), m = !0, w.value = v;
                        return;
                    }
                    if (w.kind === "function" && w.value === ":not") return 1;
                }), !m) throw new Error(`\`addUtilities({ '${f}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
            }
            for (let [f, g] of u)t.theme.prefix && z(g, (d)=>{
                if (d.kind === "rule") {
                    let m = mt(d.selector);
                    Fe(m, (w)=>{
                        w.kind === "selector" && w.value[0] === "." && (w.value = `.${t.theme.prefix}\\:${w.value.slice(1)}`);
                    }), d.selector = Me(m);
                }
            }), t.utilities.static(f, (d)=>{
                let m = structuredClone(g);
                return ii(m, f, d.raw), e.current |= Le(m, t), m;
            });
        },
        matchUtilities (a, c) {
            let u = c?.type ? Array.isArray(c?.type) ? c.type : [
                c.type
            ] : [
                "any"
            ];
            for (let [g, d] of Object.entries(a)){
                let m = function({ negative: w }) {
                    return (v)=>{
                        if (v.value?.kind === "arbitrary" && u.length > 0 && !u.includes("any") && (v.value.dataType && !u.includes(v.value.dataType) || !v.value.dataType && !Y(v.value.value, u))) return;
                        let x = u.includes("color"), y1 = null, V = !1;
                        {
                            let R = c?.values ?? {};
                            x && (R = Object.assign({
                                inherit: "inherit",
                                transparent: "transparent",
                                current: "currentcolor"
                            }, R)), v.value ? v.value.kind === "arbitrary" ? y1 = v.value.value : v.value.fraction && R[v.value.fraction] ? (y1 = R[v.value.fraction], V = !0) : R[v.value.value] ? y1 = R[v.value.value] : R.__BARE_VALUE__ && (y1 = R.__BARE_VALUE__(v.value) ?? null, V = (v.value.fraction !== null && y1?.includes("/")) ?? !1) : y1 = R.DEFAULT ?? null;
                        }
                        if (y1 === null) return;
                        let b;
                        {
                            let R = c?.modifiers ?? null;
                            v.modifier ? R === "any" || v.modifier.kind === "arbitrary" ? b = v.modifier.value : R?.[v.modifier.value] ? b = R[v.modifier.value] : x && !Number.isNaN(Number(v.modifier.value)) ? b = `${v.modifier.value}%` : b = null : b = null;
                        }
                        if (v.modifier && b === null && !V) return v.value?.kind === "arbitrary" ? null : void 0;
                        x && b !== null && (y1 = Z(y1, b)), w && (y1 = `calc(${y1} * -1)`);
                        let S = ue(d(y1, {
                            modifier: b
                        }));
                        return ii(S, g, v.raw), e.current |= Le(S, t), S;
                    };
                };
                var f = m;
                if (!ti.test(g)) throw new Error(`\`matchUtilities({ '${g}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
                c?.supportsNegativeValues && t.utilities.functional(`-${g}`, m({
                    negative: !0
                }), {
                    types: u
                }), t.utilities.functional(g, m({
                    negative: !1
                }), {
                    types: u
                }), t.utilities.suggest(g, ()=>{
                    let w = c?.values ?? {}, v = new Set(Object.keys(w));
                    v.delete("__BARE_VALUE__"), v.has("DEFAULT") && (v.delete("DEFAULT"), v.add(null));
                    let x = c?.modifiers ?? {}, y1 = x === "any" ? [] : Object.keys(x);
                    return [
                        {
                            supportsNegative: c?.supportsNegativeValues ?? !1,
                            values: Array.from(v),
                            modifiers: y1
                        }
                    ];
                });
            }
        },
        addComponents (a, c) {
            this.addUtilities(a, c);
        },
        matchComponents (a, c) {
            this.matchUtilities(a, c);
        },
        theme: dt(t, ()=>i.theme ?? {}, (a)=>a),
        prefix (a) {
            return a;
        },
        config (a, c) {
            let u = i;
            if (!a) return u;
            let f = pt(a);
            for(let g = 0; g < f.length; ++g){
                let d = f[g];
                if (u[d] === void 0) return c;
                u = u[d];
            }
            return u ?? c;
        }
    };
    return s.addComponents = s.addComponents.bind(s), s.matchComponents = s.matchComponents.bind(s), s;
}
function ue(t) {
    let r = [];
    t = Array.isArray(t) ? t : [
        t
    ];
    let i = t.flatMap((e)=>Object.entries(e));
    for (let [e, n] of i)if (typeof n != "object") {
        if (!e.startsWith("--")) {
            if (n === "@slot") {
                r.push(G(e, [
                    F("@slot")
                ]));
                continue;
            }
            e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        r.push(l(e, String(n)));
    } else if (Array.isArray(n)) for (let s of n)typeof s == "string" ? r.push(l(e, s)) : r.push(G(e, ue(s)));
    else n !== null && r.push(G(e, ue(n)));
    return r;
}
function ri(t, r) {
    return (typeof t == "string" ? [
        t
    ] : t).flatMap((e)=>{
        if (e.trim().endsWith("}")) {
            let n = e.replace("}", "{@slot}}"), s = ve(n);
            return jt(s, r), s;
        } else return G(e, r);
    });
}
function ii(t, r, i) {
    z(t, (e)=>{
        if (e.kind === "rule") {
            let n = mt(e.selector);
            Fe(n, (s)=>{
                s.kind === "selector" && s.value === `.${r}` && (s.value = `.${de(i)}`);
            }), e.selector = Me(n);
        }
    });
}
function ni(t, r, i) {
    for (let e of Yn(r))t.theme.addKeyframes(e);
}
function Yn(t) {
    let r = [];
    if ("keyframes" in t.theme) for (let [i, e] of Object.entries(t.theme.keyframes))r.push(F("@keyframes", i, ue(e)));
    return r;
}
var gt = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
function Ce(t) {
    return {
        __BARE_VALUE__: t
    };
}
var le = Ce((t)=>{
    if (E(t.value)) return t.value;
}), re = Ce((t)=>{
    if (E(t.value)) return `${t.value}%`;
}), he = Ce((t)=>{
    if (E(t.value)) return `${t.value}px`;
}), oi = Ce((t)=>{
    if (E(t.value)) return `${t.value}ms`;
}), ht = Ce((t)=>{
    if (E(t.value)) return `${t.value}deg`;
}), Jn = Ce((t)=>{
    if (t.fraction === null) return;
    let [r, i] = K(t.fraction, "/");
    if (!(!E(r) || !E(i))) return t.fraction;
}), li = Ce((t)=>{
    if (E(Number(t.value))) return `repeat(${t.value}, minmax(0, 1fr))`;
}), ai = {
    accentColor: ({ theme: t })=>t("colors"),
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
    },
    aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        ...Jn
    },
    backdropBlur: ({ theme: t })=>t("blur"),
    backdropBrightness: ({ theme: t })=>({
            ...t("brightness"),
            ...re
        }),
    backdropContrast: ({ theme: t })=>({
            ...t("contrast"),
            ...re
        }),
    backdropGrayscale: ({ theme: t })=>({
            ...t("grayscale"),
            ...re
        }),
    backdropHueRotate: ({ theme: t })=>({
            ...t("hueRotate"),
            ...ht
        }),
    backdropInvert: ({ theme: t })=>({
            ...t("invert"),
            ...re
        }),
    backdropOpacity: ({ theme: t })=>({
            ...t("opacity"),
            ...re
        }),
    backdropSaturate: ({ theme: t })=>({
            ...t("saturate"),
            ...re
        }),
    backdropSepia: ({ theme: t })=>({
            ...t("sepia"),
            ...re
        }),
    backgroundColor: ({ theme: t })=>t("colors"),
    backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: t })=>t("opacity"),
    backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    borderColor: ({ theme: t })=>({
            DEFAULT: "currentcolor",
            ...t("colors")
        }),
    borderOpacity: ({ theme: t })=>t("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    borderSpacing: ({ theme: t })=>t("spacing"),
    borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none"
    },
    boxShadowColor: ({ theme: t })=>t("colors"),
    brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...re
    },
    caretColor: ({ theme: t })=>t("colors"),
    colors: ()=>({
            ...gt
        }),
    columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...le
    },
    container: {},
    content: {
        none: "none"
    },
    contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...re
    },
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: t })=>t("borderColor"),
    divideOpacity: ({ theme: t })=>t("borderOpacity"),
    divideWidth: ({ theme: t })=>({
            ...t("borderWidth"),
            ...he
        }),
    dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)"
        ],
        md: [
            "0 4px 3px rgb(0 0 0 / 0.07)",
            "0 2px 2px rgb(0 0 0 / 0.06)"
        ],
        lg: [
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)"
        ],
        xl: [
            "0 20px 13px rgb(0 0 0 / 0.03)",
            "0 8px 5px rgb(0 0 0 / 0.08)"
        ],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000"
    },
    fill: ({ theme: t })=>t("colors"),
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: ({ theme: t })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            ...t("spacing")
        }),
    flexGrow: {
        0: "0",
        DEFAULT: "1",
        ...le
    },
    flexShrink: {
        0: "0",
        DEFAULT: "1",
        ...le
    },
    fontFamily: {
        sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        serif: [
            "ui-serif",
            "Georgia",
            "Cambria",
            '"Times New Roman"',
            "Times",
            "serif"
        ],
        mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
        ]
    },
    fontSize: {
        xs: [
            "0.75rem",
            {
                lineHeight: "1rem"
            }
        ],
        sm: [
            "0.875rem",
            {
                lineHeight: "1.25rem"
            }
        ],
        base: [
            "1rem",
            {
                lineHeight: "1.5rem"
            }
        ],
        lg: [
            "1.125rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        xl: [
            "1.25rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        "2xl": [
            "1.5rem",
            {
                lineHeight: "2rem"
            }
        ],
        "3xl": [
            "1.875rem",
            {
                lineHeight: "2.25rem"
            }
        ],
        "4xl": [
            "2.25rem",
            {
                lineHeight: "2.5rem"
            }
        ],
        "5xl": [
            "3rem",
            {
                lineHeight: "1"
            }
        ],
        "6xl": [
            "3.75rem",
            {
                lineHeight: "1"
            }
        ],
        "7xl": [
            "4.5rem",
            {
                lineHeight: "1"
            }
        ],
        "8xl": [
            "6rem",
            {
                lineHeight: "1"
            }
        ],
        "9xl": [
            "8rem",
            {
                lineHeight: "1"
            }
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: ({ theme: t })=>t("spacing"),
    gradientColorStops: ({ theme: t })=>t("colors"),
    gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...re
    },
    grayscale: {
        0: "0",
        DEFAULT: "100%",
        ...re
    },
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...le
    },
    gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...le
    },
    gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...le
    },
    gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...le
    },
    gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...li
    },
    gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...li
    },
    height: ({ theme: t })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...ht
    },
    inset: ({ theme: t })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...t("spacing")
        }),
    invert: {
        0: "0",
        DEFAULT: "100%",
        ...re
    },
    keyframes: {
        spin: {
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal"
    },
    listStyleImage: {
        none: "none"
    },
    margin: ({ theme: t })=>({
            auto: "auto",
            ...t("spacing")
        }),
    lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        ...le
    },
    maxHeight: ({ theme: t })=>({
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    maxWidth: ({ theme: t })=>({
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...t("spacing")
        }),
    minHeight: ({ theme: t })=>({
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    minWidth: ({ theme: t })=>({
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...re
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...le
    },
    outlineColor: ({ theme: t })=>t("colors"),
    outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    outlineWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    padding: ({ theme: t })=>t("spacing"),
    placeholderColor: ({ theme: t })=>t("colors"),
    placeholderOpacity: ({ theme: t })=>t("opacity"),
    ringColor: ({ theme: t })=>({
            DEFAULT: "currentcolor",
            ...t("colors")
        }),
    ringOffsetColor: ({ theme: t })=>t("colors"),
    ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    ringOpacity: ({ theme: t })=>({
            DEFAULT: "0.5",
            ...t("opacity")
        }),
    ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...ht
    },
    saturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
        ...re
    },
    scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...re
    },
    screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    },
    scrollMargin: ({ theme: t })=>t("spacing"),
    scrollPadding: ({ theme: t })=>t("spacing"),
    sepia: {
        0: "0",
        DEFAULT: "100%",
        ...re
    },
    skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...ht
    },
    space: ({ theme: t })=>t("spacing"),
    spacing: {
        px: "1px",
        0: "0px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    stroke: ({ theme: t })=>({
            none: "none",
            ...t("colors")
        }),
    strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        ...le
    },
    supports: {},
    data: {},
    textColor: ({ theme: t })=>t("colors"),
    textDecorationColor: ({ theme: t })=>t("colors"),
    textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    textIndent: ({ theme: t })=>t("spacing"),
    textOpacity: ({ theme: t })=>t("opacity"),
    textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...he
    },
    transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left"
    },
    transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...oi
    },
    transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...oi
    },
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: t })=>({
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...t("spacing")
        }),
    size: ({ theme: t })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    width: ({ theme: t })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...t("spacing")
        }),
    willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform"
    },
    zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...le
    }
};
function si(t) {
    return {
        theme: {
            ...ai,
            colors: ({ theme: r })=>r("color", {}),
            extend: {
                fontSize: ({ theme: r })=>({
                        ...r("text", {})
                    }),
                boxShadow: ({ theme: r })=>({
                        ...r("shadow", {})
                    }),
                animation: ({ theme: r })=>({
                        ...r("animate", {})
                    }),
                aspectRatio: ({ theme: r })=>({
                        ...r("aspect", {})
                    }),
                borderRadius: ({ theme: r })=>({
                        ...r("radius", {})
                    }),
                screens: ({ theme: r })=>({
                        ...r("breakpoint", {})
                    }),
                letterSpacing: ({ theme: r })=>({
                        ...r("tracking", {})
                    }),
                lineHeight: ({ theme: r })=>({
                        ...r("leading", {})
                    }),
                transitionDuration: {
                    DEFAULT: t.get([
                        "--default-transition-duration"
                    ]) ?? null
                },
                transitionTimingFunction: {
                    DEFAULT: t.get([
                        "--default-transition-timing-function"
                    ]) ?? null
                },
                maxWidth: ({ theme: r })=>({
                        ...r("container", {})
                    })
            }
        }
    };
}
var Qn = {
    blocklist: [],
    future: {},
    prefix: "",
    important: !1,
    darkMode: null,
    theme: {},
    plugins: [],
    content: {
        files: []
    }
};
function Mt(t, r) {
    let i = {
        design: t,
        configs: [],
        plugins: [],
        content: {
            files: []
        },
        theme: {},
        extend: {},
        result: structuredClone(Qn)
    };
    for (let n of r)Ft(i, n);
    for (let n of i.configs)"darkMode" in n && n.darkMode !== void 0 && (i.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== void 0 && (i.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== void 0 && (i.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== void 0 && (i.result.important = n.important ?? !1);
    let e = Xn(i);
    return {
        resolvedConfig: {
            ...i.result,
            content: i.content,
            theme: i.theme,
            plugins: i.plugins
        },
        replacedThemeKeys: e
    };
}
function Zn(t, r) {
    if (Array.isArray(t) && Re(t[0])) return t.concat(r);
    if (Array.isArray(r) && Re(r[0]) && Re(t)) return [
        t,
        ...r
    ];
    if (Array.isArray(r)) return r;
}
function Ft(t, { config: r, base: i, path: e, reference: n }) {
    let s = [];
    for (let u of r.plugins ?? [])"__isOptionsFunction" in u ? s.push({
        ...u(),
        reference: n
    }) : "handler" in u ? s.push({
        ...u,
        reference: n
    }) : s.push({
        handler: u,
        reference: n
    });
    if (Array.isArray(r.presets) && r.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let u of r.presets ?? [])Ft(t, {
        path: e,
        base: i,
        config: u,
        reference: n
    });
    for (let u of s)t.plugins.push(u), u.config && Ft(t, {
        path: e,
        base: i,
        config: u.config,
        reference: !!u.reference
    });
    let a = r.content ?? [], c = Array.isArray(a) ? a : a.files;
    for (let u of c)t.content.files.push(typeof u == "object" ? u : {
        base: i,
        pattern: u
    });
    t.configs.push(r);
}
function Xn(t) {
    let r = new Set, i = dt(t.design, ()=>t.theme, n), e = Object.assign(i, {
        theme: i,
        colors: gt
    });
    function n(s) {
        return typeof s == "function" ? s(e) ?? null : s ?? null;
    }
    for (let s of t.configs){
        let a = s.theme ?? {}, c = a.extend ?? {};
        for(let u in a)u !== "extend" && r.add(u);
        Object.assign(t.theme, a);
        for(let u in c)t.extend[u] ??= [], t.extend[u].push(c[u]);
    }
    delete t.theme.extend;
    for(let s in t.extend){
        let a = [
            t.theme[s],
            ...t.extend[s]
        ];
        t.theme[s] = ()=>{
            let c = a.map(n);
            return ze({}, c, Zn);
        };
    }
    for(let s in t.theme)t.theme[s] = n(t.theme[s]);
    if (t.theme.screens && typeof t.theme.screens == "object") for (let s of Object.keys(t.theme.screens)){
        let a = t.theme.screens[s];
        a && typeof a == "object" && ("raw" in a || "max" in a || "min" in a && (t.theme.screens[s] = a.min));
    }
    return r;
}
function ui(t, r) {
    let i = t.theme.container || {};
    if (typeof i != "object" || i === null) return;
    let e = eo(i, r);
    e.length !== 0 && r.utilities.static("container", ()=>structuredClone(e));
}
function eo({ center: t, padding: r, screens: i }, e) {
    let n = [], s = null;
    if (t && n.push(l("margin-inline", "auto")), (typeof r == "string" || typeof r == "object" && r !== null && "DEFAULT" in r) && n.push(l("padding-inline", typeof r == "string" ? r : r.DEFAULT)), typeof i == "object" && i !== null) {
        s = new Map;
        let a = Array.from(e.theme.namespace("--breakpoint").entries());
        if (a.sort((c, u)=>ye(c[1], u[1], "asc")), a.length > 0) {
            let [c] = a[0];
            n.push(F("@media", `(width >= --theme(--breakpoint-${c}))`, [
                l("max-width", "none")
            ]));
        }
        for (let [c, u] of Object.entries(i)){
            if (typeof u == "object") if ("min" in u) u = u.min;
            else continue;
            s.set(c, F("@media", `(width >= ${u})`, [
                l("max-width", u)
            ]));
        }
    }
    if (typeof r == "object" && r !== null) {
        let a = Object.entries(r).filter(([c])=>c !== "DEFAULT").map(([c, u])=>[
                c,
                e.theme.resolveValue(c, [
                    "--breakpoint"
                ]),
                u
            ]).filter(Boolean);
        a.sort((c, u)=>ye(c[1], u[1], "asc"));
        for (let [c, , u] of a)if (s && s.has(c)) s.get(c).nodes.push(l("padding-inline", u));
        else {
            if (s) continue;
            n.push(F("@media", `(width >= theme(--breakpoint-${c}))`, [
                l("padding-inline", u)
            ]));
        }
    }
    if (s) for (let [, a] of s)n.push(a);
    return n;
}
function ci({ addVariant: t, config: r }) {
    let i = r("darkMode", null), [e, n = ".dark"] = Array.isArray(i) ? i : [
        i
    ];
    if (e === "variant") {
        let s;
        if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [
            n
        ]), Array.isArray(s)) for (let a of s)a === ".dark" ? (e = !1, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : a.includes("&") || (e = !1, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
        n = s;
    }
    e === null || (e === "selector" ? t("dark", `&:where(${n}, ${n} *)`) : e === "media" ? t("dark", "@media (prefers-color-scheme: dark)") : e === "variant" ? t("dark", n) : e === "class" && t("dark", `&:is(${n} *)`));
}
function fi(t) {
    for (let [r, i] of [
        [
            "t",
            "top"
        ],
        [
            "tr",
            "top right"
        ],
        [
            "r",
            "right"
        ],
        [
            "br",
            "bottom right"
        ],
        [
            "b",
            "bottom"
        ],
        [
            "bl",
            "bottom left"
        ],
        [
            "l",
            "left"
        ],
        [
            "tl",
            "top left"
        ]
    ])t.utilities.static(`bg-gradient-to-${r}`, ()=>[
            l("--tw-gradient-position", `to ${i} in oklab`),
            l("background-image", "linear-gradient(var(--tw-gradient-stops))")
        ]);
    t.utilities.static("bg-left-top", ()=>[
            l("background-position", "left top")
        ]), t.utilities.static("bg-right-top", ()=>[
            l("background-position", "right top")
        ]), t.utilities.static("bg-left-bottom", ()=>[
            l("background-position", "left bottom")
        ]), t.utilities.static("bg-right-bottom", ()=>[
            l("background-position", "right bottom")
        ]), t.utilities.static("object-left-top", ()=>[
            l("object-position", "left top")
        ]), t.utilities.static("object-right-top", ()=>[
            l("object-position", "right top")
        ]), t.utilities.static("object-left-bottom", ()=>[
            l("object-position", "left bottom")
        ]), t.utilities.static("object-right-bottom", ()=>[
            l("object-position", "right bottom")
        ]), t.utilities.functional("max-w-screen", (r)=>{
        if (!r.value || r.value.kind === "arbitrary") return;
        let i = t.theme.resolve(r.value.value, [
            "--breakpoint"
        ]);
        if (i) return [
            l("max-width", i)
        ];
    }), t.utilities.static("overflow-ellipsis", ()=>[
            l("text-overflow", "ellipsis")
        ]), t.utilities.static("decoration-slice", ()=>[
            l("-webkit-box-decoration-break", "slice"),
            l("box-decoration-break", "slice")
        ]), t.utilities.static("decoration-clone", ()=>[
            l("-webkit-box-decoration-break", "clone"),
            l("box-decoration-break", "clone")
        ]), t.utilities.functional("flex-shrink", (r)=>{
        if (!r.modifier) {
            if (!r.value) return [
                l("flex-shrink", "1")
            ];
            if (r.value.kind === "arbitrary") return [
                l("flex-shrink", r.value.value)
            ];
            if (E(r.value.value)) return [
                l("flex-shrink", r.value.value)
            ];
        }
    }), t.utilities.functional("flex-grow", (r)=>{
        if (!r.modifier) {
            if (!r.value) return [
                l("flex-grow", "1")
            ];
            if (r.value.kind === "arbitrary") return [
                l("flex-grow", r.value.value)
            ];
            if (E(r.value.value)) return [
                l("flex-grow", r.value.value)
            ];
        }
    }), t.utilities.static("order-none", ()=>[
            l("order", "0")
        ]);
}
function pi(t, r) {
    let i = t.theme.screens || {}, e = r.variants.get("min")?.order ?? 0, n = [];
    for (let [a, c] of Object.entries(i)){
        let m = function(w) {
            r.variants.static(a, (v)=>{
                v.nodes = [
                    F("@media", d, v.nodes)
                ];
            }, {
                order: w
            });
        };
        var s = m;
        let u = r.variants.get(a), f = r.theme.resolveValue(a, [
            "--breakpoint"
        ]);
        if (u && f && !r.theme.hasDefault(`--breakpoint-${a}`)) continue;
        let g = !0;
        typeof c == "string" && (g = !1);
        let d = to(c);
        g ? n.push(m) : m(e);
    }
    if (n.length !== 0) {
        for (let [, a] of r.variants.variants)a.order > e && (a.order += n.length);
        r.variants.compareFns = new Map(Array.from(r.variants.compareFns).map(([a, c])=>(a > e && (a += n.length), [
                a,
                c
            ])));
        for (let [a, c] of n.entries())c(e + a + 1);
    }
}
function to(t) {
    return (Array.isArray(t) ? t : [
        t
    ]).map((i)=>typeof i == "string" ? {
            min: i
        } : i && typeof i == "object" ? i : null).map((i)=>{
        if (i === null) return null;
        if ("raw" in i) return i.raw;
        let e = "";
        return i.max !== void 0 && (e += `${i.max} >= `), e += "width", i.min !== void 0 && (e += ` >= ${i.min}`), `(${e})`;
    }).filter(Boolean).join(", ");
}
function di(t, r) {
    let i = t.theme.aria || {}, e = t.theme.supports || {}, n = t.theme.data || {};
    if (Object.keys(i).length > 0) {
        let s = r.variants.get("aria"), a = s?.applyFn, c = s?.compounds;
        r.variants.functional("aria", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in i ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: i[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
    if (Object.keys(e).length > 0) {
        let s = r.variants.get("supports"), a = s?.applyFn, c = s?.compounds;
        r.variants.functional("supports", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in e ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: e[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
    if (Object.keys(n).length > 0) {
        let s = r.variants.get("data"), a = s?.applyFn, c = s?.compounds;
        r.variants.functional("data", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in n ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: n[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
}
var ro = /^[a-z]+$/;
async function gi({ designSystem: t, base: r, ast: i, loadModule: e, sources: n }) {
    let s = 0, a = [], c = [];
    z(i, (d, { parent: m, replaceWith: w, context: v })=>{
        if (d.kind === "at-rule") {
            if (d.name === "@plugin") {
                if (m !== null) throw new Error("`@plugin` cannot be nested.");
                let x = d.params.slice(1, -1);
                if (x.length === 0) throw new Error("`@plugin` must have a path.");
                let y1 = {};
                for (let V of d.nodes ?? []){
                    if (V.kind !== "declaration") throw new Error(`Unexpected \`@plugin\` option:

${oe([
                        V
                    ])}

\`@plugin\` options must be a flat list of declarations.`);
                    if (V.value === void 0) continue;
                    let b = V.value, S = K(b, ",").map((R)=>{
                        if (R = R.trim(), R === "null") return null;
                        if (R === "true") return !0;
                        if (R === "false") return !1;
                        if (Number.isNaN(Number(R))) {
                            if (R[0] === '"' && R[R.length - 1] === '"' || R[0] === "'" && R[R.length - 1] === "'") return R.slice(1, -1);
                            if (R[0] === "{" && R[R.length - 1] === "}") throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${oe([
                                V
                            ]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
                        } else return Number(R);
                        return R;
                    });
                    y1[V.property] = S.length === 1 ? S[0] : S;
                }
                a.push([
                    {
                        id: x,
                        base: v.base,
                        reference: !!v.reference
                    },
                    Object.keys(y1).length > 0 ? y1 : null
                ]), w([]), s |= 4;
                return;
            }
            if (d.name === "@config") {
                if (d.nodes.length > 0) throw new Error("`@config` cannot have a body.");
                if (m !== null) throw new Error("`@config` cannot be nested.");
                c.push({
                    id: d.params.slice(1, -1),
                    base: v.base,
                    reference: !!v.reference
                }), w([]), s |= 4;
                return;
            }
        }
    }), fi(t);
    let u = t.resolveThemeValue;
    if (t.resolveThemeValue = function(m, w) {
        return m.startsWith("--") ? u(m, w) : (s |= mi({
            designSystem: t,
            base: r,
            ast: i,
            sources: n,
            configs: [],
            pluginDetails: []
        }), t.resolveThemeValue(m, w));
    }, !a.length && !c.length) return 0;
    let [f, g] = await Promise.all([
        Promise.all(c.map(async ({ id: d, base: m, reference: w })=>{
            let v = await e(d, m, "config");
            return {
                path: d,
                base: v.base,
                config: v.module,
                reference: w
            };
        })),
        Promise.all(a.map(async ([{ id: d, base: m, reference: w }, v])=>{
            let x = await e(d, m, "plugin");
            return {
                path: d,
                base: x.base,
                plugin: x.module,
                options: v,
                reference: w
            };
        }))
    ]);
    return s |= mi({
        designSystem: t,
        base: r,
        ast: i,
        sources: n,
        configs: f,
        pluginDetails: g
    }), s;
}
function mi({ designSystem: t, base: r, ast: i, sources: e, configs: n, pluginDetails: s }) {
    let a = 0, u = [
        ...s.map((y1)=>{
            if (!y1.options) return {
                config: {
                    plugins: [
                        y1.plugin
                    ]
                },
                base: y1.base,
                reference: y1.reference
            };
            if ("__isOptionsFunction" in y1.plugin) return {
                config: {
                    plugins: [
                        y1.plugin(y1.options)
                    ]
                },
                base: y1.base,
                reference: y1.reference
            };
            throw new Error(`The plugin "${y1.path}" does not accept options`);
        }),
        ...n
    ], { resolvedConfig: f } = Mt(t, [
        {
            config: si(t.theme),
            base: r,
            reference: !0
        },
        ...u,
        {
            config: {
                plugins: [
                    ci
                ]
            },
            base: r,
            reference: !0
        }
    ]), { resolvedConfig: g, replacedThemeKeys: d } = Mt(t, u), m = t.resolveThemeValue;
    t.resolveThemeValue = function(V, b) {
        if (V[0] === "-" && V[1] === "-") return m(V, b);
        let S = v.theme(V, void 0);
        if (Array.isArray(S) && S.length === 2) return S[0];
        if (Array.isArray(S)) return S.join(", ");
        if (typeof S == "string") return S;
    };
    let w = {
        designSystem: t,
        ast: i,
        resolvedConfig: f,
        featuresRef: {
            set current (y){
                a |= y;
            }
        }
    }, v = It({
        ...w,
        referenceMode: !1
    }), x;
    for (let { handler: y1, reference: V } of f.plugins)V ? (x ||= It({
        ...w,
        referenceMode: !0
    }), y1(x)) : y1(v);
    if (zr(t, g, d), ni(t, g, d), di(g, t), pi(g, t), ui(g, t), !t.theme.prefix && f.prefix) {
        if (f.prefix.endsWith("-") && (f.prefix = f.prefix.slice(0, -1), console.warn(`The prefix "${f.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !ro.test(f.prefix)) throw new Error(`The prefix "${f.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
        t.theme.prefix = f.prefix;
    }
    if (!t.important && f.important === !0 && (t.important = !0), typeof f.important == "string") {
        let y1 = f.important;
        z(i, (V, { replaceWith: b, parent: S })=>{
            if (V.kind === "at-rule" && !(V.name !== "@tailwind" || V.params !== "utilities")) return S?.kind === "rule" && S.selector === y1 ? 2 : (b(M(y1, [
                V
            ])), 2);
        });
    }
    for (let y1 of f.blocklist)t.invalidCandidates.add(y1);
    for (let y1 of f.content.files){
        if ("raw" in y1) throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(y1, null, 2)}

This feature is not currently supported.`);
        let V = !1;
        y1.pattern[0] == "!" && (V = !0, y1.pattern = y1.pattern.slice(1)), e.push({
            ...y1,
            negated: V
        });
    }
    return a;
}
function hi(t) {
    let r = [
        0
    ];
    for(let n = 0; n < t.length; n++)t.charCodeAt(n) === 10 && r.push(n + 1);
    function i(n) {
        let s = 0, a = r.length;
        for(; a > 0;){
            let u = (a | 0) >> 1, f = s + u;
            r[f] <= n ? (s = f + 1, a = a - u - 1) : a = u;
        }
        s -= 1;
        let c = n - r[s];
        return {
            line: s + 1,
            column: c
        };
    }
    function e({ line: n, column: s }) {
        n -= 1, n = Math.min(Math.max(n, 0), r.length - 1);
        let a = r[n], c = r[n + 1] ?? a;
        return Math.min(Math.max(a + s, 0), c);
    }
    return {
        find: i,
        findOffset: e
    };
}
function vi({ ast: t }) {
    let r = new B((n)=>hi(n.code)), i = new B((n)=>({
            url: n.file,
            content: n.code,
            ignore: !1
        })), e = {
        file: null,
        sources: [],
        mappings: []
    };
    z(t, (n)=>{
        if (!n.src || !n.dst) return;
        let s = i.get(n.src[0]);
        if (!s.content) return;
        let a = r.get(n.src[0]), c = r.get(n.dst[0]), u = s.content.slice(n.src[1], n.src[2]), f = 0;
        for (let m of u.split(`
`)){
            if (m.trim() !== "") {
                let w = a.find(n.src[1] + f), v = c.find(n.dst[1]);
                e.mappings.push({
                    name: null,
                    originalPosition: {
                        source: s,
                        ...w
                    },
                    generatedPosition: v
                });
            }
            f += m.length, f += 1;
        }
        let g = a.find(n.src[2]), d = c.find(n.dst[2]);
        e.mappings.push({
            name: null,
            originalPosition: {
                source: s,
                ...g
            },
            generatedPosition: d
        });
    });
    for (let n of r.keys())e.sources.push(i.get(n));
    return e.mappings.sort((n, s)=>n.generatedPosition.line - s.generatedPosition.line || n.generatedPosition.column - s.generatedPosition.column || (n.originalPosition?.line ?? 0) - (s.originalPosition?.line ?? 0) || (n.originalPosition?.column ?? 0) - (s.originalPosition?.column ?? 0)), e;
}
var wi = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
function vt(t) {
    let r = t.indexOf("{");
    if (r === -1) return [
        t
    ];
    let i = [], e = t.slice(0, r), n = t.slice(r), s = 0, a = n.lastIndexOf("}");
    for(let d = 0; d < n.length; d++){
        let m = n[d];
        if (m === "{") s++;
        else if (m === "}" && (s--, s === 0)) {
            a = d;
            break;
        }
    }
    if (a === -1) throw new Error(`The pattern \`${t}\` is not balanced.`);
    let c = n.slice(1, a), u = n.slice(a + 1), f;
    io(c) ? f = no(c) : f = K(c, ","), f = f.flatMap((d)=>vt(d));
    let g = vt(u);
    for (let d of g)for (let m of f)i.push(e + m + d);
    return i;
}
function io(t) {
    return wi.test(t);
}
function no(t) {
    let r = t.match(wi);
    if (!r) return [
        t
    ];
    let [, i, e, n] = r, s = n ? parseInt(n, 10) : void 0, a = [];
    if (/^-?\d+$/.test(i) && /^-?\d+$/.test(e)) {
        let c = parseInt(i, 10), u = parseInt(e, 10);
        if (s === void 0 && (s = c <= u ? 1 : -1), s === 0) throw new Error("Step cannot be zero in sequence expansion.");
        let f = c < u;
        f && s < 0 && (s = -s), !f && s > 0 && (s = -s);
        for(let g = c; f ? g <= u : g >= u; g += s)a.push(g.toString());
    }
    return a;
}
var oo = /^[a-z]+$/, tt = ((n)=>(n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n))(tt || {});
function lo() {
    throw new Error("No `loadModule` function provided to `compile`");
}
function ao() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
}
function so(t) {
    let r = 0, i = null;
    for (let e of K(t, " "))e === "reference" ? r |= 2 : e === "inline" ? r |= 1 : e === "default" ? r |= 4 : e === "static" ? r |= 8 : e.startsWith("prefix(") && e.endsWith(")") && (i = e.slice(7, -1));
    return [
        r,
        i
    ];
}
var Se = ((c)=>(c[c.None = 0] = "None", c[c.AtApply = 1] = "AtApply", c[c.AtImport = 2] = "AtImport", c[c.JsPluginCompat = 4] = "JsPluginCompat", c[c.ThemeFunction = 8] = "ThemeFunction", c[c.Utilities = 16] = "Utilities", c[c.Variants = 32] = "Variants", c))(Se || {});
async function ki(t, { base: r = "", from: i, loadModule: e = lo, loadStylesheet: n = ao } = {}) {
    let s = 0;
    t = [
        se({
            base: r
        }, t)
    ], s |= await zt(t, r, n, 0, i !== void 0);
    let a = null, c = new Qe, u = [], f = [], g = null, d = null, m = [], w = [], v = [], x = [], y1 = null;
    z(t, (b, { parent: S, replaceWith: R, context: j })=>{
        if (b.kind === "at-rule") {
            if (b.name === "@tailwind" && (b.params === "utilities" || b.params.startsWith("utilities"))) {
                if (d !== null) {
                    R([]);
                    return;
                }
                if (j.reference) {
                    R([]);
                    return;
                }
                let P = K(b.params, " ");
                for (let D of P)if (D.startsWith("source(")) {
                    let _ = D.slice(7, -1);
                    if (_ === "none") {
                        y1 = _;
                        continue;
                    }
                    if (_[0] === '"' && _[_.length - 1] !== '"' || _[0] === "'" && _[_.length - 1] !== "'" || _[0] !== "'" && _[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
                    y1 = {
                        base: j.sourceBase ?? j.base,
                        pattern: _.slice(1, -1)
                    };
                }
                d = b, s |= 16;
            }
            if (b.name === "@utility") {
                if (S !== null) throw new Error("`@utility` cannot be nested.");
                if (b.nodes.length === 0) throw new Error(`\`@utility ${b.params}\` is empty. Utilities should include at least one property.`);
                let P = Vr(b);
                if (P === null) throw new Error(`\`@utility ${b.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
                f.push(P);
            }
            if (b.name === "@source") {
                if (b.nodes.length > 0) throw new Error("`@source` cannot have a body.");
                if (S !== null) throw new Error("`@source` cannot be nested.");
                let P = !1, D = !1, _ = b.params;
                if (_[0] === "n" && _.startsWith("not ") && (P = !0, _ = _.slice(4)), _[0] === "i" && _.startsWith("inline(") && (D = !0, _ = _.slice(7, -1)), _[0] === '"' && _[_.length - 1] !== '"' || _[0] === "'" && _[_.length - 1] !== "'" || _[0] !== "'" && _[0] !== '"') throw new Error("`@source` paths must be quoted.");
                let H = _.slice(1, -1);
                if (D) {
                    let L = P ? x : v, W = K(H, " ");
                    for (let Q of W)for (let ie of vt(Q))L.push(ie);
                } else w.push({
                    base: j.base,
                    pattern: H,
                    negated: P
                });
                R([]);
                return;
            }
            if (b.name === "@variant" && (S === null ? b.nodes.length === 0 ? b.name = "@custom-variant" : (z(b.nodes, (P)=>{
                if (P.kind === "at-rule" && P.name === "@slot") return b.name = "@custom-variant", 2;
            }), b.name === "@variant" && m.push(b)) : m.push(b)), b.name === "@custom-variant") {
                if (S !== null) throw new Error("`@custom-variant` cannot be nested.");
                R([]);
                let [P, D] = K(b.params, " ");
                if (!ct.test(P)) throw new Error(`\`@custom-variant ${P}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
                if (b.nodes.length > 0 && D) throw new Error(`\`@custom-variant ${P}\` cannot have both a selector and a body.`);
                if (b.nodes.length === 0) {
                    if (!D) throw new Error(`\`@custom-variant ${P}\` has no selector or body.`);
                    let _ = K(D.slice(1, -1), ",");
                    if (_.length === 0 || _.some((W)=>W.trim() === "")) throw new Error(`\`@custom-variant ${P} (${_.join(",")})\` selector is invalid.`);
                    let H = [], L = [];
                    for (let W of _)W = W.trim(), W[0] === "@" ? H.push(W) : L.push(W);
                    u.push((W)=>{
                        W.variants.static(P, (Q)=>{
                            let ie = [];
                            L.length > 0 && ie.push(M(L.join(", "), Q.nodes));
                            for (let o of H)ie.push(G(o, Q.nodes));
                            Q.nodes = ie;
                        }, {
                            compounds: Ae([
                                ...L,
                                ...H
                            ])
                        });
                    });
                    return;
                } else {
                    u.push((_)=>{
                        _.variants.fromAst(P, b.nodes);
                    });
                    return;
                }
            }
            if (b.name === "@media") {
                let P = K(b.params, " "), D = [];
                for (let _ of P)if (_.startsWith("source(")) {
                    let H = _.slice(7, -1);
                    z(b.nodes, (L, { replaceWith: W })=>{
                        if (L.kind === "at-rule" && L.name === "@tailwind" && L.params === "utilities") return L.params += ` source(${H})`, W([
                            se({
                                sourceBase: j.base
                            }, [
                                L
                            ])
                        ]), 2;
                    });
                } else if (_.startsWith("theme(")) {
                    let H = _.slice(6, -1), L = H.includes("reference");
                    z(b.nodes, (W)=>{
                        if (W.kind !== "at-rule") {
                            if (L) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                            return 0;
                        }
                        if (W.name === "@theme") return W.params += " " + H, 1;
                    });
                } else if (_.startsWith("prefix(")) {
                    let H = _.slice(7, -1);
                    z(b.nodes, (L)=>{
                        if (L.kind === "at-rule" && L.name === "@theme") return L.params += ` prefix(${H})`, 1;
                    });
                } else _ === "important" ? a = !0 : _ === "reference" ? b.nodes = [
                    se({
                        reference: !0
                    }, b.nodes)
                ] : D.push(_);
                D.length > 0 ? b.params = D.join(" ") : P.length > 0 && R(b.nodes);
            }
            if (b.name === "@theme") {
                let [P, D] = so(b.params);
                if (j.reference && (P |= 2), D) {
                    if (!oo.test(D)) throw new Error(`The prefix "${D}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
                    c.prefix = D;
                }
                return z(b.nodes, (_)=>{
                    if (_.kind === "at-rule" && _.name === "@keyframes") return c.addKeyframes(_), 1;
                    if (_.kind === "comment") return;
                    if (_.kind === "declaration" && _.property.startsWith("--")) {
                        c.add(we(_.property), _.value ?? "", P, _.src);
                        return;
                    }
                    let H = oe([
                        F(b.name, b.params, [
                            _
                        ])
                    ]).split(`
`).map((L, W, Q)=>`${W === 0 || W >= Q.length - 2 ? " " : ">"} ${L}`).join(`
`);
                    throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${H}`);
                }), g ? R([]) : (g = M(":root, :host", []), g.src = b.src, R([
                    g
                ])), 1;
            }
        }
    });
    let V = Kr(c);
    if (a && (V.important = a), x.length > 0) for (let b of x)V.invalidCandidates.add(b);
    s |= await gi({
        designSystem: V,
        base: r,
        ast: t,
        loadModule: e,
        sources: w
    });
    for (let b of u)b(V);
    for (let b of f)b(V);
    if (g) {
        let b = [];
        for (let [R, j] of V.theme.entries()){
            if (j.options & 2) continue;
            let P = l(de(R), j.value);
            P.src = j.src, b.push(P);
        }
        let S = V.theme.getKeyframes();
        for (let R of S)t.push(se({
            theme: !0
        }, [
            I([
                R
            ])
        ]));
        g.nodes = [
            se({
                theme: !0
            }, b)
        ];
    }
    if (m.length > 0) {
        for (let b of m){
            let S = M("&", b.nodes), R = b.params, j = V.parseVariant(R);
            if (j === null) throw new Error(`Cannot use \`@variant\` with unknown variant: ${R}`);
            if (Te(S, j, V.variants) === null) throw new Error(`Cannot use \`@variant\` with variant: ${R}`);
            Object.assign(b, S);
        }
        s |= 32;
    }
    if (s |= Ve(t, V), s |= Le(t, V), d) {
        let b = d;
        b.kind = "context", b.context = {};
    }
    return z(t, (b, { replaceWith: S })=>{
        if (b.kind === "at-rule") return b.name === "@utility" && S([]), 1;
    }), {
        designSystem: V,
        ast: t,
        sources: w,
        root: y1,
        utilitiesNode: d,
        features: s,
        inlineCandidates: v
    };
}
async function bi(t, r = {}) {
    let { designSystem: i, ast: e, sources: n, root: s, utilitiesNode: a, features: c, inlineCandidates: u } = await ki(t, r);
    e.unshift(Je(`! tailwindcss v${Wt} | MIT License | https://tailwindcss.com `));
    function f(v) {
        i.invalidCandidates.add(v);
    }
    let g = new Set, d = null, m = 0, w = !1;
    for (let v of u)i.invalidCandidates.has(v) || (g.add(v), w = !0);
    return {
        sources: n,
        root: s,
        features: c,
        build (v) {
            if (c === 0) return t;
            if (!a) return d ??= be(e, i, r.polyfills), d;
            let x = w, y1 = !1;
            w = !1;
            let V = g.size;
            for (let S of v)if (!i.invalidCandidates.has(S)) if (S[0] === "-" && S[1] === "-") {
                let R = i.theme.markUsedVariable(S);
                x ||= R, y1 ||= R;
            } else g.add(S), x ||= g.size !== V;
            if (!x) return d ??= be(e, i, r.polyfills), d;
            let b = ge(g, i, {
                onInvalidCandidate: f
            }).astNodes;
            return r.from && z(b, (S)=>{
                S.src ??= a.src;
            }), !y1 && m === b.length ? (d ??= be(e, i, r.polyfills), d) : (m = b.length, a.nodes = b, d = be(e, i, r.polyfills), d);
        }
    };
}
async function uo(t, r = {}) {
    let i = ve(t, {
        from: r.from
    }), e = await bi(i, r), n = i, s = t;
    return {
        ...e,
        build (a) {
            let c = e.build(a);
            return c === n || (s = oe(c, !!r.from), n = c), s;
        },
        buildSourceMap () {
            return vi({
                ast: n
            });
        }
    };
}
async function co(t, r = {}) {
    return (await ki(ve(t), r)).designSystem;
}
function We() {
    throw new Error("It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.");
}
for(let t in wt)t !== "default" && (We[t] = wt[t]);
module.exports = We;
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>l)
});
var l = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
;
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-P5FH2LZE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>ie),
    "b": (()=>g),
    "c": (()=>pe),
    "d": (()=>p),
    "e": (()=>ge),
    "f": (()=>ue),
    "g": (()=>de),
    "h": (()=>ye)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs [app-client] (ecmascript)");
;
var O = new Set([
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
    "transparent",
    "currentcolor",
    "canvas",
    "canvastext",
    "linktext",
    "visitedtext",
    "activetext",
    "buttonface",
    "buttontext",
    "buttonborder",
    "field",
    "fieldtext",
    "highlight",
    "highlighttext",
    "selecteditem",
    "selecteditemtext",
    "mark",
    "marktext",
    "graytext",
    "accentcolor",
    "accentcolortext"
]), R = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
function v(e) {
    return e.charCodeAt(0) === 35 || R.test(e) || O.has(e.toLowerCase());
}
var E = [
    "calc",
    "min",
    "max",
    "clamp",
    "mod",
    "rem",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "atan2",
    "pow",
    "sqrt",
    "hypot",
    "log",
    "exp",
    "round"
], h = [
    "anchor-size"
], A = new RegExp(`(${h.join("|")})\\(`, "g");
function b(e) {
    return e.indexOf("(") !== -1 && E.some((r)=>e.includes(`${r}(`));
}
function ie(e) {
    if (!E.some((n)=>e.includes(n))) return e;
    let r = !1;
    h.some((n)=>e.includes(n)) && (A.lastIndex = 0, e = e.replace(A, (n, o)=>(r = !0, `$${h.indexOf(o)}$(`)));
    let t = "", i = [];
    for(let n = 0; n < e.length; n++){
        let o = e[n];
        if (o === "(") {
            t += o;
            let m = n;
            for(let c = n - 1; c >= 0; c--){
                let x = e.charCodeAt(c);
                if (x >= 48 && x <= 57) m = c;
                else if (x >= 97 && x <= 122) m = c;
                else break;
            }
            let a = e.slice(m, n);
            if (E.includes(a)) {
                i.unshift(!0);
                continue;
            } else if (i[0] && a === "") {
                i.unshift(!0);
                continue;
            }
            i.unshift(!1);
            continue;
        } else if (o === ")") t += o, i.shift();
        else if (o === "," && i[0]) {
            t += ", ";
            continue;
        } else {
            if (o === " " && i[0] && t[t.length - 1] === " ") continue;
            if ((o === "+" || o === "*" || o === "/" || o === "-") && i[0]) {
                let m = t.trimEnd(), a = m[m.length - 1];
                if (a === "+" || a === "*" || a === "/" || a === "-") {
                    t += o;
                    continue;
                } else if (a === "(" || a === ",") {
                    t += o;
                    continue;
                } else e[n - 1] === " " ? t += `${o} ` : t += ` ${o} `;
            } else if (i[0] && e.startsWith("to-zero", n)) {
                let m = n;
                n += 7, t += e.slice(m, n + 1);
            } else t += o;
        }
    }
    return r ? t.replace(/\$(\d+)\$/g, (n, o)=>h[o] ?? n) : t;
}
var y = new Uint8Array(256);
function g(e, r) {
    let t = 0, i = [], n = 0, o = e.length, m = r.charCodeAt(0);
    for(let a = 0; a < o; a++){
        let c = e.charCodeAt(a);
        if (t === 0 && c === m) {
            i.push(e.slice(n, a)), n = a + 1;
            continue;
        }
        switch(c){
            case 92:
                a += 1;
                break;
            case 39:
            case 34:
                for(; ++a < o;){
                    let x = e.charCodeAt(a);
                    if (x === 92) {
                        a += 1;
                        continue;
                    }
                    if (x === c) break;
                }
                break;
            case 40:
                y[t] = 41, t++;
                break;
            case 91:
                y[t] = 93, t++;
                break;
            case 123:
                y[t] = 125, t++;
                break;
            case 93:
            case 125:
            case 41:
                t > 0 && c === y[t - 1] && t--;
                break;
        }
    }
    return i.push(e.slice(n)), i;
}
var _ = {
    color: v,
    length: w,
    percentage: C,
    ratio: j,
    number: N,
    integer: p,
    url: z,
    position: Q,
    "bg-size": X,
    "line-width": I,
    image: H,
    "family-name": q,
    "generic-name": P,
    "absolute-size": B,
    "relative-size": W,
    angle: ee,
    vector: re
};
function pe(e, r) {
    if (e.startsWith("var(")) return null;
    for (let t of r)if (_[t]?.(e)) return t;
    return null;
}
var D = /^url\(.*\)$/;
function z(e) {
    return D.test(e);
}
function I(e) {
    return g(e, " ").every((r)=>w(r) || N(r) || r === "thin" || r === "medium" || r === "thick");
}
var F = /^(?:element|image|cross-fade|image-set)\(/, $ = /^(repeating-)?(conic|linear|radial)-gradient\(/;
function H(e) {
    let r = 0;
    for (let t of g(e, ","))if (!t.startsWith("var(")) {
        if (z(t)) {
            r += 1;
            continue;
        }
        if ($.test(t)) {
            r += 1;
            continue;
        }
        if (F.test(t)) {
            r += 1;
            continue;
        }
        return !1;
    }
    return r > 0;
}
function P(e) {
    return e === "serif" || e === "sans-serif" || e === "monospace" || e === "cursive" || e === "fantasy" || e === "system-ui" || e === "ui-serif" || e === "ui-sans-serif" || e === "ui-monospace" || e === "ui-rounded" || e === "math" || e === "emoji" || e === "fangsong";
}
function q(e) {
    let r = 0;
    for (let t of g(e, ",")){
        let i = t.charCodeAt(0);
        if (i >= 48 && i <= 57) return !1;
        t.startsWith("var(") || (r += 1);
    }
    return r > 0;
}
function B(e) {
    return e === "xx-small" || e === "x-small" || e === "small" || e === "medium" || e === "large" || e === "x-large" || e === "xx-large" || e === "xxx-large";
}
function W(e) {
    return e === "larger" || e === "smaller";
}
var u = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, M = new RegExp(`^${u.source}$`);
function N(e) {
    return M.test(e) || b(e);
}
var G = new RegExp(`^${u.source}%$`);
function C(e) {
    return G.test(e) || b(e);
}
var V = new RegExp(`^${u.source}s*/s*${u.source}$`);
function j(e) {
    return V.test(e) || b(e);
}
var K = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
], Y = new RegExp(`^${u.source}(${K.join("|")})$`);
function w(e) {
    return Y.test(e) || b(e);
}
function Q(e) {
    let r = 0;
    for (let t of g(e, " ")){
        if (t === "center" || t === "top" || t === "right" || t === "bottom" || t === "left") {
            r += 1;
            continue;
        }
        if (!t.startsWith("var(")) {
            if (w(t) || C(t)) {
                r += 1;
                continue;
            }
            return !1;
        }
    }
    return r > 0;
}
function X(e) {
    let r = 0;
    for (let t of g(e, ",")){
        if (t === "cover" || t === "contain") {
            r += 1;
            continue;
        }
        let i = g(t, " ");
        if (i.length !== 1 && i.length !== 2) return !1;
        if (i.every((n)=>n === "auto" || w(n) || C(n))) {
            r += 1;
            continue;
        }
    }
    return r > 0;
}
var J = [
    "deg",
    "rad",
    "grad",
    "turn"
], Z = new RegExp(`^${u.source}(${J.join("|")})$`);
function ee(e) {
    return Z.test(e);
}
var te = new RegExp(`^${u.source} +${u.source} +${u.source}$`);
function re(e) {
    return te.test(e);
}
function p(e) {
    let r = Number(e);
    return Number.isInteger(r) && r >= 0 && String(r) === String(e);
}
function ge(e) {
    let r = Number(e);
    return Number.isInteger(r) && r > 0 && String(r) === String(e);
}
function ue(e) {
    return T(e, .25);
}
function de(e) {
    return T(e, .25);
}
function T(e, r) {
    let t = Number(e);
    return t >= 0 && t % r === 0 && String(t) === String(e);
}
function f(e) {
    return {
        __BARE_VALUE__: e
    };
}
var l = f((e)=>{
    if (p(e.value)) return e.value;
}), s = f((e)=>{
    if (p(e.value)) return `${e.value}%`;
}), d = f((e)=>{
    if (p(e.value)) return `${e.value}px`;
}), L = f((e)=>{
    if (p(e.value)) return `${e.value}ms`;
}), k = f((e)=>{
    if (p(e.value)) return `${e.value}deg`;
}), ne = f((e)=>{
    if (e.fraction === null) return;
    let [r, t] = g(e.fraction, "/");
    if (!(!p(r) || !p(t))) return e.fraction;
}), U = f((e)=>{
    if (p(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
}), ye = {
    accentColor: ({ theme: e })=>e("colors"),
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite"
    },
    aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"'
    },
    aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        ...ne
    },
    backdropBlur: ({ theme: e })=>e("blur"),
    backdropBrightness: ({ theme: e })=>({
            ...e("brightness"),
            ...s
        }),
    backdropContrast: ({ theme: e })=>({
            ...e("contrast"),
            ...s
        }),
    backdropGrayscale: ({ theme: e })=>({
            ...e("grayscale"),
            ...s
        }),
    backdropHueRotate: ({ theme: e })=>({
            ...e("hueRotate"),
            ...k
        }),
    backdropInvert: ({ theme: e })=>({
            ...e("invert"),
            ...s
        }),
    backdropOpacity: ({ theme: e })=>({
            ...e("opacity"),
            ...s
        }),
    backdropSaturate: ({ theme: e })=>({
            ...e("saturate"),
            ...s
        }),
    backdropSepia: ({ theme: e })=>({
            ...e("sepia"),
            ...s
        }),
    backgroundColor: ({ theme: e })=>e("colors"),
    backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e })=>e("opacity"),
    backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    borderColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    borderOpacity: ({ theme: e })=>e("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    borderSpacing: ({ theme: e })=>e("spacing"),
    borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none"
    },
    boxShadowColor: ({ theme: e })=>e("colors"),
    brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...s
    },
    caretColor: ({ theme: e })=>e("colors"),
    colors: ()=>({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
        }),
    columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...l
    },
    container: {},
    content: {
        none: "none"
    },
    contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...s
    },
    cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e })=>e("borderColor"),
    divideOpacity: ({ theme: e })=>e("borderOpacity"),
    divideWidth: ({ theme: e })=>({
            ...e("borderWidth"),
            ...d
        }),
    dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: [
            "0 1px 2px rgb(0 0 0 / 0.1)",
            "0 1px 1px rgb(0 0 0 / 0.06)"
        ],
        md: [
            "0 4px 3px rgb(0 0 0 / 0.07)",
            "0 2px 2px rgb(0 0 0 / 0.06)"
        ],
        lg: [
            "0 10px 8px rgb(0 0 0 / 0.04)",
            "0 4px 3px rgb(0 0 0 / 0.1)"
        ],
        xl: [
            "0 20px 13px rgb(0 0 0 / 0.03)",
            "0 8px 5px rgb(0 0 0 / 0.08)"
        ],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000"
    },
    fill: ({ theme: e })=>e("colors"),
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            ...e("spacing")
        }),
    flexGrow: {
        0: "0",
        DEFAULT: "1",
        ...l
    },
    flexShrink: {
        0: "0",
        DEFAULT: "1",
        ...l
    },
    fontFamily: {
        sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        serif: [
            "ui-serif",
            "Georgia",
            "Cambria",
            '"Times New Roman"',
            "Times",
            "serif"
        ],
        mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
        ]
    },
    fontSize: {
        xs: [
            "0.75rem",
            {
                lineHeight: "1rem"
            }
        ],
        sm: [
            "0.875rem",
            {
                lineHeight: "1.25rem"
            }
        ],
        base: [
            "1rem",
            {
                lineHeight: "1.5rem"
            }
        ],
        lg: [
            "1.125rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        xl: [
            "1.25rem",
            {
                lineHeight: "1.75rem"
            }
        ],
        "2xl": [
            "1.5rem",
            {
                lineHeight: "2rem"
            }
        ],
        "3xl": [
            "1.875rem",
            {
                lineHeight: "2.25rem"
            }
        ],
        "4xl": [
            "2.25rem",
            {
                lineHeight: "2.5rem"
            }
        ],
        "5xl": [
            "3rem",
            {
                lineHeight: "1"
            }
        ],
        "6xl": [
            "3.75rem",
            {
                lineHeight: "1"
            }
        ],
        "7xl": [
            "4.5rem",
            {
                lineHeight: "1"
            }
        ],
        "8xl": [
            "6rem",
            {
                lineHeight: "1"
            }
        ],
        "9xl": [
            "8rem",
            {
                lineHeight: "1"
            }
        ]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: ({ theme: e })=>e("spacing"),
    gradientColorStops: ({ theme: e })=>e("colors"),
    gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...s
    },
    grayscale: {
        0: "0",
        DEFAULT: "100%",
        ...s
    },
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...l
    },
    gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...l
    },
    gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1"
    },
    gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...l
    },
    gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...l
    },
    gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...U
    },
    gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...U
    },
    height: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...k
    },
    inset: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    invert: {
        0: "0",
        DEFAULT: "100%",
        ...s
    },
    keyframes: {
        spin: {
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "75%, 100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem"
    },
    listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal"
    },
    listStyleImage: {
        none: "none"
    },
    margin: ({ theme: e })=>({
            auto: "auto",
            ...e("spacing")
        }),
    lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        ...l
    },
    maxHeight: ({ theme: e })=>({
            none: "none",
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    maxWidth: ({ theme: e })=>({
            none: "none",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            prose: "65ch",
            ...e("spacing")
        }),
    minHeight: ({ theme: e })=>({
            full: "100%",
            screen: "100vh",
            svh: "100svh",
            lvh: "100lvh",
            dvh: "100dvh",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    minWidth: ({ theme: e })=>({
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
    },
    opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...s
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...l
    },
    outlineColor: ({ theme: e })=>e("colors"),
    outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    outlineWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    padding: ({ theme: e })=>e("spacing"),
    placeholderColor: ({ theme: e })=>e("colors"),
    placeholderOpacity: ({ theme: e })=>e("opacity"),
    ringColor: ({ theme: e })=>({
            DEFAULT: "currentcolor",
            ...e("colors")
        }),
    ringOffsetColor: ({ theme: e })=>e("colors"),
    ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    ringOpacity: ({ theme: e })=>({
            DEFAULT: "0.5",
            ...e("opacity")
        }),
    ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...k
    },
    saturate: {
        0: "0",
        50: ".5",
        100: "1",
        150: "1.5",
        200: "2",
        ...s
    },
    scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...s
    },
    screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem"
    },
    scrollMargin: ({ theme: e })=>e("spacing"),
    scrollPadding: ({ theme: e })=>e("spacing"),
    sepia: {
        0: "0",
        DEFAULT: "100%",
        ...s
    },
    skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...k
    },
    space: ({ theme: e })=>e("spacing"),
    spacing: {
        px: "1px",
        0: "0px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    stroke: ({ theme: e })=>({
            none: "none",
            ...e("colors")
        }),
    strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
        ...l
    },
    supports: {},
    data: {},
    textColor: ({ theme: e })=>e("colors"),
    textDecorationColor: ({ theme: e })=>e("colors"),
    textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    textIndent: ({ theme: e })=>e("spacing"),
    textOpacity: ({ theme: e })=>e("opacity"),
    textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...d
    },
    transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left"
    },
    transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...L
    },
    transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...L
    },
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e })=>({
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            ...e("spacing")
        }),
    size: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    width: ({ theme: e })=>({
            auto: "auto",
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            svw: "100svw",
            lvw: "100lvw",
            dvw: "100dvw",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            ...e("spacing")
        }),
    willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform"
    },
    zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...l
    }
};
;
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-FEUCFEMW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>dt),
    "b": (()=>Pe),
    "c": (()=>dn),
    "d": (()=>Aa),
    "e": (()=>Ca),
    "f": (()=>mn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-P5FH2LZE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs [app-client] (ecmascript)");
;
;
var Rt = "4.1.8";
var Ve = 92, Ie = 47, Fe = 42, ei = 34, ti = 39, ri = 58, Le = 59, ie = 10, ze = 13, Ne = 32, Me = 9, Ot = 123, at = 125, ft = 40, Kt = 41, ii = 91, ni = 93, _t = 45, st = 64, oi = 33;
function me(r, t) {
    let i = t?.from ? {
        file: t.from,
        code: r
    } : null;
    r[0] === "\uFEFF" && (r = " " + r.slice(1));
    let e = [], n = [], s = [], a = null, c = null, u = "", f = "", g = 0, d;
    for(let m = 0; m < r.length; m++){
        let w = r.charCodeAt(m);
        if (!(w === ze && (d = r.charCodeAt(m + 1), d === ie))) if (w === Ve) u === "" && (g = m), u += r.slice(m, m + 2), m += 1;
        else if (w === Ie && r.charCodeAt(m + 1) === Fe) {
            let v = m;
            for(let k1 = m + 2; k1 < r.length; k1++)if (d = r.charCodeAt(k1), d === Ve) k1 += 1;
            else if (d === Fe && r.charCodeAt(k1 + 1) === Ie) {
                m = k1 + 1;
                break;
            }
            let x = r.slice(v, m + 1);
            if (x.charCodeAt(2) === oi) {
                let k1 = We(x.slice(2, -2));
                n.push(k1), i && (k1.src = [
                    i,
                    v,
                    m + 1
                ], k1.dst = [
                    i,
                    v,
                    m + 1
                ]);
            }
        } else if (w === ti || w === ei) {
            let v = m;
            for(let x = m + 1; x < r.length; x++)if (d = r.charCodeAt(x), d === Ve) x += 1;
            else if (d === w) {
                m = x;
                break;
            } else {
                if (d === Le && (r.charCodeAt(x + 1) === ie || r.charCodeAt(x + 1) === ze && r.charCodeAt(x + 2) === ie)) throw new Error(`Unterminated string: ${r.slice(v, x + 1) + String.fromCharCode(w)}`);
                if (d === ie || d === ze && r.charCodeAt(x + 1) === ie) throw new Error(`Unterminated string: ${r.slice(v, x) + String.fromCharCode(w)}`);
            }
            u += r.slice(v, m + 1);
        } else {
            if ((w === Ne || w === ie || w === Me) && (d = r.charCodeAt(m + 1)) && (d === Ne || d === ie || d === Me || d === ze && (d = r.charCodeAt(m + 2)) && d == ie)) continue;
            if (w === ie) {
                if (u.length === 0) continue;
                d = u.charCodeAt(u.length - 1), d !== Ne && d !== ie && d !== Me && (u += " ");
            } else if (w === _t && r.charCodeAt(m + 1) === _t && u.length === 0) {
                let v = "", x = m, k1 = -1;
                for(let b = m + 2; b < r.length; b++)if (d = r.charCodeAt(b), d === Ve) b += 1;
                else if (d === Ie && r.charCodeAt(b + 1) === Fe) {
                    for(let S = b + 2; S < r.length; S++)if (d = r.charCodeAt(S), d === Ve) S += 1;
                    else if (d === Fe && r.charCodeAt(S + 1) === Ie) {
                        b = S + 1;
                        break;
                    }
                } else if (k1 === -1 && d === ri) k1 = u.length + b - x;
                else if (d === Le && v.length === 0) {
                    u += r.slice(x, b), m = b;
                    break;
                } else if (d === ft) v += ")";
                else if (d === ii) v += "]";
                else if (d === Ot) v += "}";
                else if ((d === at || r.length - 1 === b) && v.length === 0) {
                    m = b - 1, u += r.slice(x, b);
                    break;
                } else (d === Kt || d === ni || d === at) && v.length > 0 && r[b] === v[v.length - 1] && (v = v.slice(0, -1));
                let N = ut(u, k1);
                if (!N) throw new Error("Invalid custom property, expected a value");
                i && (N.src = [
                    i,
                    x,
                    m
                ], N.dst = [
                    i,
                    x,
                    m
                ]), a ? a.nodes.push(N) : e.push(N), u = "";
            } else if (w === Le && u.charCodeAt(0) === st) c = Se(u), i && (c.src = [
                i,
                g,
                m
            ], c.dst = [
                i,
                g,
                m
            ]), a ? a.nodes.push(c) : e.push(c), u = "", c = null;
            else if (w === Le && f[f.length - 1] !== ")") {
                let v = ut(u);
                if (!v) throw u.length === 0 ? new Error("Unexpected semicolon") : new Error(`Invalid declaration: \`${u.trim()}\``);
                i && (v.src = [
                    i,
                    g,
                    m
                ], v.dst = [
                    i,
                    g,
                    m
                ]), a ? a.nodes.push(v) : e.push(v), u = "";
            } else if (w === Ot && f[f.length - 1] !== ")") f += "}", c = H(u.trim()), i && (c.src = [
                i,
                g,
                m
            ], c.dst = [
                i,
                g,
                m
            ]), a && a.nodes.push(c), s.push(a), a = c, u = "", c = null;
            else if (w === at && f[f.length - 1] !== ")") {
                if (f === "") throw new Error("Missing opening {");
                if (f = f.slice(0, -1), u.length > 0) if (u.charCodeAt(0) === st) c = Se(u), i && (c.src = [
                    i,
                    g,
                    m
                ], c.dst = [
                    i,
                    g,
                    m
                ]), a ? a.nodes.push(c) : e.push(c), u = "", c = null;
                else {
                    let x = u.indexOf(":");
                    if (a) {
                        let k1 = ut(u, x);
                        if (!k1) throw new Error(`Invalid declaration: \`${u.trim()}\``);
                        i && (k1.src = [
                            i,
                            g,
                            m
                        ], k1.dst = [
                            i,
                            g,
                            m
                        ]), a.nodes.push(k1);
                    }
                }
                let v = s.pop() ?? null;
                v === null && a && e.push(a), a = v, u = "", c = null;
            } else if (w === ft) f += ")", u += "(";
            else if (w === Kt) {
                if (f[f.length - 1] !== ")") throw new Error("Missing opening (");
                f = f.slice(0, -1), u += ")";
            } else {
                if (u.length === 0 && (w === Ne || w === ie || w === Me)) continue;
                u === "" && (g = m), u += String.fromCharCode(w);
            }
        }
    }
    if (u.charCodeAt(0) === st) {
        let m = Se(u);
        i && (m.src = [
            i,
            g,
            r.length
        ], m.dst = [
            i,
            g,
            r.length
        ]), e.push(m);
    }
    if (f.length > 0 && a) {
        if (a.kind === "rule") throw new Error(`Missing closing } at ${a.selector}`);
        if (a.kind === "at-rule") throw new Error(`Missing closing } at ${a.name} ${a.params}`);
    }
    return n.length > 0 ? n.concat(e) : e;
}
function Se(r, t = []) {
    let i = r, e = "";
    for(let n = 5; n < r.length; n++){
        let s = r.charCodeAt(n);
        if (s === Ne || s === ft) {
            i = r.slice(0, n), e = r.slice(n);
            break;
        }
    }
    return z(i.trim(), e.trim(), t);
}
function ut(r, t = r.indexOf(":")) {
    if (t === -1) return null;
    let i = r.indexOf("!important", t + 1);
    return l(r.slice(0, t).trim(), r.slice(t + 1, i === -1 ? r.length : i).trim(), i !== -1);
}
function fe(r) {
    if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
    let t = String(r), i = t.length, e = -1, n, s = "", a = t.charCodeAt(0);
    if (i === 1 && a === 45) return "\\" + t;
    for(; ++e < i;){
        if (n = t.charCodeAt(e), n === 0) {
            s += "\uFFFD";
            continue;
        }
        if (n >= 1 && n <= 31 || n === 127 || e === 0 && n >= 48 && n <= 57 || e === 1 && n >= 48 && n <= 57 && a === 45) {
            s += "\\" + n.toString(16) + " ";
            continue;
        }
        if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            s += t.charAt(e);
            continue;
        }
        s += "\\" + t.charAt(e);
    }
    return s;
}
function ge(r) {
    return r.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (t)=>t.length > 2 ? String.fromCodePoint(Number.parseInt(t.slice(1).trim(), 16)) : t[1]);
}
var Dt = new Map([
    [
        "--font",
        [
            "--font-weight",
            "--font-size"
        ]
    ],
    [
        "--inset",
        [
            "--inset-shadow",
            "--inset-ring"
        ]
    ],
    [
        "--text",
        [
            "--text-color",
            "--text-decoration-color",
            "--text-decoration-thickness",
            "--text-indent",
            "--text-shadow",
            "--text-underline-offset"
        ]
    ]
]);
function jt(r, t) {
    return (Dt.get(t) ?? []).some((i)=>r === i || r.startsWith(`${i}-`));
}
var Be = class {
    constructor(t = new Map, i = new Set([])){
        this.values = t;
        this.keyframes = i;
    }
    prefix = null;
    get size() {
        return this.values.size;
    }
    add(t, i, e = 0, n) {
        if (t.endsWith("-*")) {
            if (i !== "initial") throw new Error(`Invalid theme value \`${i}\` for namespace \`${t}\``);
            t === "--*" ? this.values.clear() : this.clearNamespace(t.slice(0, -2), 0);
        }
        if (e & 4) {
            let s = this.values.get(t);
            if (s && !(s.options & 4)) return;
        }
        i === "initial" ? this.values.delete(t) : this.values.set(t, {
            value: i,
            options: e,
            src: n
        });
    }
    keysInNamespaces(t) {
        let i = [];
        for (let e of t){
            let n = `${e}-`;
            for (let s of this.values.keys())s.startsWith(n) && s.indexOf("--", 2) === -1 && (jt(s, e) || i.push(s.slice(n.length)));
        }
        return i;
    }
    get(t) {
        for (let i of t){
            let e = this.values.get(i);
            if (e) return e.value;
        }
        return null;
    }
    hasDefault(t) {
        return (this.getOptions(t) & 4) === 4;
    }
    getOptions(t) {
        return t = ge(this.#r(t)), this.values.get(t)?.options ?? 0;
    }
    entries() {
        return this.prefix ? Array.from(this.values, (t)=>(t[0] = this.prefixKey(t[0]), t)) : this.values.entries();
    }
    prefixKey(t) {
        return this.prefix ? `--${this.prefix}-${t.slice(2)}` : t;
    }
    #r(t) {
        return this.prefix ? `--${t.slice(3 + this.prefix.length)}` : t;
    }
    clearNamespace(t, i) {
        let e = Dt.get(t) ?? [];
        e: for (let n of this.values.keys())if (n.startsWith(t)) {
            if (i !== 0 && (this.getOptions(n) & i) !== i) continue;
            for (let s of e)if (n.startsWith(s)) continue e;
            this.values.delete(n);
        }
    }
    #e(t, i) {
        for (let e of i){
            let n = t !== null ? `${e}-${t}` : e;
            if (!this.values.has(n)) if (t !== null && t.includes(".")) {
                if (n = `${e}-${t.replaceAll(".", "_")}`, !this.values.has(n)) continue;
            } else continue;
            if (!jt(n, e)) return n;
        }
        return null;
    }
    #t(t) {
        let i = this.values.get(t);
        if (!i) return null;
        let e = null;
        return i.options & 2 && (e = i.value), `var(${fe(this.prefixKey(t))}${e ? `, ${e}` : ""})`;
    }
    markUsedVariable(t) {
        let i = ge(this.#r(t)), e = this.values.get(i);
        if (!e) return !1;
        let n = e.options & 16;
        return e.options |= 16, !n;
    }
    resolve(t, i, e = 0) {
        let n = this.#e(t, i);
        if (!n) return null;
        let s = this.values.get(n);
        return (e | s.options) & 1 ? s.value : this.#t(n);
    }
    resolveValue(t, i) {
        let e = this.#e(t, i);
        return e ? this.values.get(e).value : null;
    }
    resolveWith(t, i, e = []) {
        let n = this.#e(t, i);
        if (!n) return null;
        let s = {};
        for (let c of e){
            let u = `${n}${c}`, f = this.values.get(u);
            f && (f.options & 1 ? s[c] = f.value : s[c] = this.#t(u));
        }
        let a = this.values.get(n);
        return a.options & 1 ? [
            a.value,
            s
        ] : [
            this.#t(n),
            s
        ];
    }
    namespace(t) {
        let i = new Map, e = `${t}-`;
        for (let [n, s] of this.values)n === t ? i.set(null, s.value) : n.startsWith(`${e}-`) ? i.set(n.slice(t.length), s.value) : n.startsWith(e) && i.set(n.slice(e.length), s.value);
        return i;
    }
    addKeyframes(t) {
        this.keyframes.add(t);
    }
    getKeyframes() {
        return Array.from(this.keyframes);
    }
};
var B = class extends Map {
    constructor(i){
        super();
        this.factory = i;
    }
    get(i) {
        let e = super.get(i);
        return e === void 0 && (e = this.factory(i, this), this.set(i, e)), e;
    }
};
function pt(r) {
    return {
        kind: "word",
        value: r
    };
}
function li(r, t) {
    return {
        kind: "function",
        value: r,
        nodes: t
    };
}
function ai(r) {
    return {
        kind: "separator",
        value: r
    };
}
function ee(r, t, i = null) {
    for(let e = 0; e < r.length; e++){
        let n = r[e], s = !1, a = 0, c = t(n, {
            parent: i,
            replaceWith (u) {
                s || (s = !0, Array.isArray(u) ? u.length === 0 ? (r.splice(e, 1), a = 0) : u.length === 1 ? (r[e] = u[0], a = 1) : (r.splice(e, 1, ...u), a = u.length) : r[e] = u);
            }
        }) ?? 0;
        if (s) {
            c === 0 ? e-- : e += a - 1;
            continue;
        }
        if (c === 2) return 2;
        if (c !== 1 && n.kind === "function" && ee(n.nodes, t, n) === 2) return 2;
    }
}
function Y(r) {
    let t = "";
    for (let i of r)switch(i.kind){
        case "word":
        case "separator":
            {
                t += i.value;
                break;
            }
        case "function":
            t += i.value + "(" + Y(i.nodes) + ")";
    }
    return t;
}
var Ut = 92, si = 41, It = 58, Ft = 44, ui = 34, Lt = 61, zt = 62, Mt = 60, Wt = 10, fi = 40, ci = 39, Bt = 47, qt = 32, Gt = 9;
function q(r) {
    r = r.replaceAll(`\r
`, `
`);
    let t = [], i = [], e = null, n = "", s;
    for(let a = 0; a < r.length; a++){
        let c = r.charCodeAt(a);
        switch(c){
            case Ut:
                {
                    n += r[a] + r[a + 1], a++;
                    break;
                }
            case It:
            case Ft:
            case Lt:
            case zt:
            case Mt:
            case Wt:
            case Bt:
            case qt:
            case Gt:
                {
                    if (n.length > 0) {
                        let d = pt(n);
                        e ? e.nodes.push(d) : t.push(d), n = "";
                    }
                    let u = a, f = a + 1;
                    for(; f < r.length && (s = r.charCodeAt(f), !(s !== It && s !== Ft && s !== Lt && s !== zt && s !== Mt && s !== Wt && s !== Bt && s !== qt && s !== Gt)); f++);
                    a = f - 1;
                    let g = ai(r.slice(u, f));
                    e ? e.nodes.push(g) : t.push(g);
                    break;
                }
            case ci:
            case ui:
                {
                    let u = a;
                    for(let f = a + 1; f < r.length; f++)if (s = r.charCodeAt(f), s === Ut) f += 1;
                    else if (s === c) {
                        a = f;
                        break;
                    }
                    n += r.slice(u, a + 1);
                    break;
                }
            case fi:
                {
                    let u = li(n, []);
                    n = "", e ? e.nodes.push(u) : t.push(u), i.push(u), e = u;
                    break;
                }
            case si:
                {
                    let u = i.pop();
                    if (n.length > 0) {
                        let f = pt(n);
                        u?.nodes.push(f), n = "";
                    }
                    i.length > 0 ? e = i[i.length - 1] : e = null;
                    break;
                }
            default:
                n += String.fromCharCode(c);
        }
    }
    return n.length > 0 && t.push(pt(n)), t;
}
function qe(r) {
    let t = [];
    return ee(q(r), (i)=>{
        if (!(i.kind !== "function" || i.value !== "var")) return ee(i.nodes, (e)=>{
            e.kind !== "word" || e.value[0] !== "-" || e.value[1] !== "-" || t.push(e.value);
        }), 1;
    }), t;
}
var di = 64;
function M(r, t = []) {
    return {
        kind: "rule",
        selector: r,
        nodes: t
    };
}
function z(r, t = "", i = []) {
    return {
        kind: "at-rule",
        name: r,
        params: t,
        nodes: i
    };
}
function H(r, t = []) {
    return r.charCodeAt(0) === di ? Se(r, t) : M(r, t);
}
function l(r, t, i = !1) {
    return {
        kind: "declaration",
        property: r,
        value: t,
        important: i
    };
}
function We(r) {
    return {
        kind: "comment",
        value: r
    };
}
function le(r, t) {
    return {
        kind: "context",
        context: r,
        nodes: t
    };
}
function L(r) {
    return {
        kind: "at-root",
        nodes: r
    };
}
function F(r, t, i = [], e = {}) {
    for(let n = 0; n < r.length; n++){
        let s = r[n], a = i[i.length - 1] ?? null;
        if (s.kind === "context") {
            if (F(s.nodes, t, i, {
                ...e,
                ...s.context
            }) === 2) return 2;
            continue;
        }
        i.push(s);
        let c = !1, u = 0, f = t(s, {
            parent: a,
            context: e,
            path: i,
            replaceWith (g) {
                c || (c = !0, Array.isArray(g) ? g.length === 0 ? (r.splice(n, 1), u = 0) : g.length === 1 ? (r[n] = g[0], u = 1) : (r.splice(n, 1, ...g), u = g.length) : (r[n] = g, u = 1));
            }
        }) ?? 0;
        if (i.pop(), c) {
            f === 0 ? n-- : n += u - 1;
            continue;
        }
        if (f === 2) return 2;
        if (f !== 1 && "nodes" in s) {
            i.push(s);
            let g = F(s.nodes, t, i, e);
            if (i.pop(), g === 2) return 2;
        }
    }
}
function Ge(r, t, i = [], e = {}) {
    for(let n = 0; n < r.length; n++){
        let s = r[n], a = i[i.length - 1] ?? null;
        if (s.kind === "rule" || s.kind === "at-rule") i.push(s), Ge(s.nodes, t, i, e), i.pop();
        else if (s.kind === "context") {
            Ge(s.nodes, t, i, {
                ...e,
                ...s.context
            });
            continue;
        }
        i.push(s), t(s, {
            parent: a,
            context: e,
            path: i,
            replaceWith (c) {
                Array.isArray(c) ? c.length === 0 ? r.splice(n, 1) : c.length === 1 ? r[n] = c[0] : r.splice(n, 1, ...c) : r[n] = c, n += c.length - 1;
            }
        }), i.pop();
    }
}
function ve(r, t, i = 3) {
    let e = [], n = new Set, s = new B(()=>new Set), a = new B(()=>new Set), c = new Set, u = new Set, f = [], g = [], d = new B(()=>new Set);
    function m(v, x, k1 = {}, N = 0) {
        if (v.kind === "declaration") {
            if (v.property === "--tw-sort" || v.value === void 0 || v.value === null) return;
            if (k1.theme && v.property[0] === "-" && v.property[1] === "-") {
                if (v.value === "initial") {
                    v.value = void 0;
                    return;
                }
                k1.keyframes || s.get(x).add(v);
            }
            if (v.value.includes("var(")) if (k1.theme && v.property[0] === "-" && v.property[1] === "-") for (let b of qe(v.value))d.get(b).add(v.property);
            else t.trackUsedVariables(v.value);
            if (v.property === "animation") for (let b of Jt(v.value))u.add(b);
            i & 2 && v.value.includes("color-mix(") && a.get(x).add(v), x.push(v);
        } else if (v.kind === "rule") if (v.selector === "&") for (let b of v.nodes){
            let S = [];
            m(b, S, k1, N + 1), S.length > 0 && x.push(...S);
        }
        else {
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, k1, N + 1);
            b.nodes.length > 0 && x.push(b);
        }
        else if (v.kind === "at-rule" && v.name === "@property" && N === 0) {
            if (n.has(v.params)) return;
            if (i & 1) {
                let S = v.params, P = null, U = !1;
                for (let _ of v.nodes)_.kind === "declaration" && (_.property === "initial-value" ? P = _.value : _.property === "inherits" && (U = _.value === "true"));
                let R = l(S, P ?? "initial");
                R.src = v.src, U ? f.push(R) : g.push(R);
            }
            n.add(v.params);
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, k1, N + 1);
            x.push(b);
        } else if (v.kind === "at-rule") {
            v.name === "@keyframes" && (k1 = {
                ...k1,
                keyframes: !0
            });
            let b = {
                ...v,
                nodes: []
            };
            for (let S of v.nodes)m(S, b.nodes, k1, N + 1);
            v.name === "@keyframes" && k1.theme && c.add(b), (b.nodes.length > 0 || b.name === "@layer" || b.name === "@charset" || b.name === "@custom-media" || b.name === "@namespace" || b.name === "@import") && x.push(b);
        } else if (v.kind === "at-root") for (let b of v.nodes){
            let S = [];
            m(b, S, k1, 0);
            for (let P of S)e.push(P);
        }
        else if (v.kind === "context") {
            if (v.context.reference) return;
            for (let b of v.nodes)m(b, x, {
                ...k1,
                ...v.context
            }, N);
        } else v.kind === "comment" && x.push(v);
    }
    let w = [];
    for (let v of r)m(v, w, {}, 0);
    e: for (let [v, x] of s)for (let k1 of x){
        if (Ht(k1.property, t.theme, d)) {
            if (k1.property.startsWith(t.theme.prefixKey("--animate-"))) for (let S of Jt(k1.value))u.add(S);
            continue;
        }
        let b = v.indexOf(k1);
        if (v.splice(b, 1), v.length === 0) {
            let S = mi(w, (P)=>P.kind === "rule" && P.nodes === v);
            if (!S || S.length === 0) continue e;
            S.unshift({
                kind: "at-root",
                nodes: w
            });
            do {
                let P = S.pop();
                if (!P) break;
                let U = S[S.length - 1];
                if (!U || U.kind !== "at-root" && U.kind !== "at-rule") break;
                let R = U.nodes.indexOf(P);
                if (R === -1) break;
                U.nodes.splice(R, 1);
            }while (!0)
            continue e;
        }
    }
    for (let v of c)if (!u.has(v.params)) {
        let x = e.indexOf(v);
        e.splice(x, 1);
    }
    if (w = w.concat(e), i & 2) for (let [v, x] of a)for (let k1 of x){
        let N = v.indexOf(k1);
        if (N === -1 || k1.value == null) continue;
        let b = q(k1.value), S = !1;
        if (ee(b, (R, { replaceWith: _ })=>{
            if (R.kind !== "function" || R.value !== "color-mix") return;
            let K = !1, G = !1;
            if (ee(R.nodes, (I, { replaceWith: W })=>{
                if (I.kind == "word" && I.value.toLowerCase() === "currentcolor") {
                    G = !0, S = !0;
                    return;
                }
                let Z = I, re = null, o = new Set;
                do {
                    if (Z.kind !== "function" || Z.value !== "var") return;
                    let p = Z.nodes[0];
                    if (!p || p.kind !== "word") return;
                    let h = p.value;
                    if (o.has(h)) {
                        K = !0;
                        return;
                    }
                    if (o.add(h), S = !0, re = t.theme.resolveValue(null, [
                        p.value
                    ]), !re) {
                        K = !0;
                        return;
                    }
                    if (re.toLowerCase() === "currentcolor") {
                        G = !0;
                        return;
                    }
                    re.startsWith("var(") ? Z = q(re)[0] : Z = null;
                }while (Z)
                W({
                    kind: "word",
                    value: re
                });
            }), K || G) {
                let I = R.nodes.findIndex((Z)=>Z.kind === "separator" && Z.value.trim().includes(","));
                if (I === -1) return;
                let W = R.nodes.length > I ? R.nodes[I + 1] : null;
                if (!W) return;
                _(W);
            } else if (S) {
                let I = R.nodes[2];
                I.kind === "word" && (I.value === "oklab" || I.value === "oklch" || I.value === "lab" || I.value === "lch") && (I.value = "srgb");
            }
        }), !S) continue;
        let P = {
            ...k1,
            value: Y(b)
        }, U = H("@supports (color: color-mix(in lab, red, red))", [
            k1
        ]);
        U.src = k1.src, v.splice(N, 1, P, U);
    }
    if (i & 1) {
        let v = [];
        if (f.length > 0) {
            let x = H(":root, :host", f);
            x.src = f[0].src, v.push(x);
        }
        if (g.length > 0) {
            let x = H("*, ::before, ::after, ::backdrop", g);
            x.src = g[0].src, v.push(x);
        }
        if (v.length > 0) {
            let x = w.findIndex((b)=>!(b.kind === "comment" || b.kind === "at-rule" && (b.name === "@charset" || b.name === "@import"))), k1 = z("@layer", "properties", []);
            k1.src = v[0].src, w.splice(x < 0 ? w.length : x, 0, k1);
            let N = H("@layer properties", [
                z("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", v)
            ]);
            N.src = v[0].src, N.nodes[0].src = v[0].src, w.push(N);
        }
    }
    return w;
}
function ne(r, t) {
    let i = 0, e = {
        file: null,
        code: ""
    };
    function n(a, c = 0) {
        let u = "", f = "  ".repeat(c);
        if (a.kind === "declaration") {
            if (u += `${f}${a.property}: ${a.value}${a.important ? " !important" : ""};
`, t) {
                i += f.length;
                let g = i;
                i += a.property.length, i += 2, i += a.value?.length ?? 0, a.important && (i += 11);
                let d = i;
                i += 2, a.dst = [
                    e,
                    g,
                    d
                ];
            }
        } else if (a.kind === "rule") {
            if (u += `${f}${a.selector} {
`, t) {
                i += f.length;
                let g = i;
                i += a.selector.length, i += 1;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 2;
            }
            for (let g of a.nodes)u += n(g, c + 1);
            u += `${f}}
`, t && (i += f.length, i += 2);
        } else if (a.kind === "at-rule") {
            if (a.nodes.length === 0) {
                let g = `${f}${a.name} ${a.params};
`;
                if (t) {
                    i += f.length;
                    let d = i;
                    i += a.name.length, i += 1, i += a.params.length;
                    let m = i;
                    i += 2, a.dst = [
                        e,
                        d,
                        m
                    ];
                }
                return g;
            }
            if (u += `${f}${a.name}${a.params ? ` ${a.params} ` : " "}{
`, t) {
                i += f.length;
                let g = i;
                i += a.name.length, a.params && (i += 1, i += a.params.length), i += 1;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 2;
            }
            for (let g of a.nodes)u += n(g, c + 1);
            u += `${f}}
`, t && (i += f.length, i += 2);
        } else if (a.kind === "comment") {
            if (u += `${f}/*${a.value}*/
`, t) {
                i += f.length;
                let g = i;
                i += 2 + a.value.length + 2;
                let d = i;
                a.dst = [
                    e,
                    g,
                    d
                ], i += 1;
            }
        } else if (a.kind === "context" || a.kind === "at-root") return "";
        return u;
    }
    let s = "";
    for (let a of r)s += n(a, 0);
    return e.code = s, s;
}
function mi(r, t) {
    let i = [];
    return F(r, (e, { path: n })=>{
        if (t(e)) return i = [
            ...n
        ], 2;
    }), i;
}
function Ht(r, t, i, e = new Set) {
    if (e.has(r) || (e.add(r), t.getOptions(r) & 24)) return !0;
    {
        let s = i.get(r) ?? [];
        for (let a of s)if (Ht(a, t, i, e)) return !0;
    }
    return !1;
}
function Jt(r) {
    return r.split(/[\s,]+/);
}
function ce(r) {
    if (r.indexOf("(") === -1) return be(r);
    let t = q(r);
    return mt(t), r = Y(t), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r), r;
}
function be(r, t = !1) {
    let i = "";
    for(let e = 0; e < r.length; e++){
        let n = r[e];
        n === "\\" && r[e + 1] === "_" ? (i += "_", e += 1) : n === "_" && !t ? i += " " : i += n;
    }
    return i;
}
function mt(r) {
    for (let t of r)switch(t.kind){
        case "function":
            {
                if (t.value === "url" || t.value.endsWith("_url")) {
                    t.value = be(t.value);
                    break;
                }
                if (t.value === "var" || t.value.endsWith("_var") || t.value === "theme" || t.value.endsWith("_theme")) {
                    t.value = be(t.value);
                    for(let i = 0; i < t.nodes.length; i++){
                        if (i == 0 && t.nodes[i].kind === "word") {
                            t.nodes[i].value = be(t.nodes[i].value, !0);
                            continue;
                        }
                        mt([
                            t.nodes[i]
                        ]);
                    }
                    break;
                }
                t.value = be(t.value), mt(t.nodes);
                break;
            }
        case "separator":
        case "word":
            {
                t.value = be(t.value);
                break;
            }
        default:
            gi(t);
    }
}
function gi(r) {
    throw new Error(`Unexpected value: ${r}`);
}
var gt = new Uint8Array(256);
function se(r) {
    let t = 0, i = r.length;
    for(let e = 0; e < i; e++){
        let n = r.charCodeAt(e);
        switch(n){
            case 92:
                e += 1;
                break;
            case 39:
            case 34:
                for(; ++e < i;){
                    let s = r.charCodeAt(e);
                    if (s === 92) {
                        e += 1;
                        continue;
                    }
                    if (s === n) break;
                }
                break;
            case 40:
                gt[t] = 41, t++;
                break;
            case 91:
                gt[t] = 93, t++;
                break;
            case 123:
                break;
            case 93:
            case 125:
            case 41:
                if (t === 0) return !1;
                t > 0 && n === gt[t - 1] && t--;
                break;
            case 59:
                if (t === 0) return !1;
                break;
        }
    }
    return !0;
}
var hi = 58, Yt = 45, Zt = 97, Qt = 122;
function* Xt(r, t) {
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, ":");
    if (t.theme.prefix) {
        if (i.length === 1 || i[0] !== t.theme.prefix) return null;
        i.shift();
    }
    let e = i.pop(), n = [];
    for(let d = i.length - 1; d >= 0; --d){
        let m = t.parseVariant(i[d]);
        if (m === null) return;
        n.push(m);
    }
    let s = !1;
    e[e.length - 1] === "!" ? (s = !0, e = e.slice(0, -1)) : e[0] === "!" && (s = !0, e = e.slice(1)), t.utilities.has(e, "static") && !e.includes("[") && (yield {
        kind: "static",
        root: e,
        variants: n,
        important: s,
        raw: r
    });
    let [a, c = null, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e, "/");
    if (u) return;
    let f = c === null ? null : ht(c);
    if (c !== null && f === null) return;
    if (a[0] === "[") {
        if (a[a.length - 1] !== "]") return;
        let d = a.charCodeAt(1);
        if (d !== Yt && !(d >= Zt && d <= Qt)) return;
        a = a.slice(1, -1);
        let m = a.indexOf(":");
        if (m === -1 || m === 0 || m === a.length - 1) return;
        let w = a.slice(0, m), v = ce(a.slice(m + 1));
        if (!se(v)) return;
        yield {
            kind: "arbitrary",
            property: w,
            value: v,
            modifier: f,
            variants: n,
            important: s,
            raw: r
        };
        return;
    }
    let g;
    if (a[a.length - 1] === "]") {
        let d = a.indexOf("-[");
        if (d === -1) return;
        let m = a.slice(0, d);
        if (!t.utilities.has(m, "functional")) return;
        let w = a.slice(d + 1);
        g = [
            [
                m,
                w
            ]
        ];
    } else if (a[a.length - 1] === ")") {
        let d = a.indexOf("-(");
        if (d === -1) return;
        let m = a.slice(0, d);
        if (!t.utilities.has(m, "functional")) return;
        let w = a.slice(d + 2, -1), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(w, ":"), x = null;
        if (v.length === 2 && (x = v[0], w = v[1]), w[0] !== "-" || w[1] !== "-" || !se(w)) return;
        g = [
            [
                m,
                x === null ? `[var(${w})]` : `[${x}:var(${w})]`
            ]
        ];
    } else g = tr(a, (d)=>t.utilities.has(d, "functional"));
    for (let [d, m] of g){
        let w = {
            kind: "functional",
            root: d,
            modifier: f,
            value: null,
            variants: n,
            important: s,
            raw: r
        };
        if (m === null) {
            yield w;
            continue;
        }
        {
            let v = m.indexOf("[");
            if (v !== -1) {
                if (m[m.length - 1] !== "]") return;
                let k1 = ce(m.slice(v + 1, -1));
                if (!se(k1)) continue;
                let N = "";
                for(let b = 0; b < k1.length; b++){
                    let S = k1.charCodeAt(b);
                    if (S === hi) {
                        N = k1.slice(0, b), k1 = k1.slice(b + 1);
                        break;
                    }
                    if (!(S === Yt || S >= Zt && S <= Qt)) break;
                }
                if (k1.length === 0 || k1.trim().length === 0) continue;
                w.value = {
                    kind: "arbitrary",
                    dataType: N || null,
                    value: k1
                };
            } else {
                let k1 = c === null || w.modifier?.kind === "arbitrary" ? null : `${m}/${c}`;
                w.value = {
                    kind: "named",
                    value: m,
                    fraction: k1
                };
            }
        }
        yield w;
    }
}
function ht(r) {
    if (r[0] === "[" && r[r.length - 1] === "]") {
        let t = ce(r.slice(1, -1));
        return !se(t) || t.length === 0 || t.trim().length === 0 ? null : {
            kind: "arbitrary",
            value: t
        };
    }
    return r[0] === "(" && r[r.length - 1] === ")" ? (r = r.slice(1, -1), r[0] !== "-" || r[1] !== "-" || !se(r) ? null : (r = `var(${r})`, {
        kind: "arbitrary",
        value: ce(r)
    })) : {
        kind: "named",
        value: r
    };
}
function er(r, t) {
    if (r[0] === "[" && r[r.length - 1] === "]") {
        if (r[1] === "@" && r.includes("&")) return null;
        let i = ce(r.slice(1, -1));
        if (!se(i) || i.length === 0 || i.trim().length === 0) return null;
        let e = i[0] === ">" || i[0] === "+" || i[0] === "~";
        return !e && i[0] !== "@" && !i.includes("&") && (i = `&:is(${i})`), {
            kind: "arbitrary",
            selector: i,
            relative: e
        };
    }
    {
        let [i, e = null, n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, "/");
        if (n) return null;
        let s = tr(i, (a)=>t.variants.has(a));
        for (let [a, c] of s)switch(t.variants.kind(a)){
            case "static":
                return c !== null || e !== null ? null : {
                    kind: "static",
                    root: a
                };
            case "functional":
                {
                    let u = e === null ? null : ht(e);
                    if (e !== null && u === null) return null;
                    if (c === null) return {
                        kind: "functional",
                        root: a,
                        modifier: u,
                        value: null
                    };
                    if (c[c.length - 1] === "]") {
                        if (c[0] !== "[") continue;
                        let f = ce(c.slice(1, -1));
                        return !se(f) || f.length === 0 || f.trim().length === 0 ? null : {
                            kind: "functional",
                            root: a,
                            modifier: u,
                            value: {
                                kind: "arbitrary",
                                value: f
                            }
                        };
                    }
                    if (c[c.length - 1] === ")") {
                        if (c[0] !== "(") continue;
                        let f = ce(c.slice(1, -1));
                        return !se(f) || f.length === 0 || f.trim().length === 0 || f[0] !== "-" || f[1] !== "-" ? null : {
                            kind: "functional",
                            root: a,
                            modifier: u,
                            value: {
                                kind: "arbitrary",
                                value: `var(${f})`
                            }
                        };
                    }
                    return {
                        kind: "functional",
                        root: a,
                        modifier: u,
                        value: {
                            kind: "named",
                            value: c
                        }
                    };
                }
            case "compound":
                {
                    if (c === null) return null;
                    let u = t.parseVariant(c);
                    if (u === null || !t.variants.compoundsWith(a, u)) return null;
                    let f = e === null ? null : ht(e);
                    return e !== null && f === null ? null : {
                        kind: "compound",
                        root: a,
                        modifier: f,
                        variant: u
                    };
                }
        }
    }
    return null;
}
function* tr(r, t) {
    t(r) && (yield [
        r,
        null
    ]);
    let i = r.lastIndexOf("-");
    for(; i > 0;){
        let e = r.slice(0, i);
        if (t(e)) {
            let n = [
                e,
                r.slice(i + 1)
            ];
            if (n[1] === "") break;
            yield n;
        }
        i = r.lastIndexOf("-", i - 1);
    }
    r[0] === "@" && t("@") && (yield [
        "@",
        r.slice(1)
    ]);
}
function rr(r, t) {
    let i = [];
    for (let n of t.variants)i.unshift(He(n));
    r.theme.prefix && i.unshift(r.theme.prefix);
    let e = "";
    if (t.kind === "static" && (e += t.root), t.kind === "functional" && (e += t.root, t.value)) if (t.value.kind === "arbitrary") {
        if (t.value !== null) {
            let n = wt(t.value.value), s = n ? t.value.value.slice(4, -1) : t.value.value, [a, c] = n ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ];
            t.value.dataType ? e += `-${a}${t.value.dataType}:${ke(s)}${c}` : e += `-${a}${ke(s)}${c}`;
        }
    } else t.value.kind === "named" && (e += `-${t.value.value}`);
    return t.kind === "arbitrary" && (e += `[${t.property}:${ke(t.value)}]`), (t.kind === "arbitrary" || t.kind === "functional") && (e += ir(t.modifier)), t.important && (e += "!"), i.push(e), i.join(":");
}
function ir(r) {
    if (r === null) return "";
    let t = wt(r.value), i = t ? r.value.slice(4, -1) : r.value, [e, n] = t ? [
        "(",
        ")"
    ] : [
        "[",
        "]"
    ];
    return r.kind === "arbitrary" ? `/${e}${ke(i)}${n}` : r.kind === "named" ? `/${r.value}` : "";
}
function He(r) {
    if (r.kind === "static") return r.root;
    if (r.kind === "arbitrary") return `[${ke(yi(r.selector))}]`;
    let t = "";
    if (r.kind === "functional") {
        t += r.root;
        let i = r.root !== "@";
        if (r.value) if (r.value.kind === "arbitrary") {
            let e = wt(r.value.value), n = e ? r.value.value.slice(4, -1) : r.value.value, [s, a] = e ? [
                "(",
                ")"
            ] : [
                "[",
                "]"
            ];
            t += `${i ? "-" : ""}${s}${ke(n)}${a}`;
        } else r.value.kind === "named" && (t += `${i ? "-" : ""}${r.value.value}`);
    }
    return r.kind === "compound" && (t += r.root, t += "-", t += He(r.variant)), (r.kind === "functional" || r.kind === "compound") && (t += ir(r.modifier)), t;
}
var vi = new B((r)=>{
    let t = q(r), i = new Set;
    return ee(t, (e, { parent: n })=>{
        let s = n === null ? t : n.nodes ?? [];
        if (e.kind === "word" && (e.value === "+" || e.value === "-" || e.value === "*" || e.value === "/")) {
            let a = s.indexOf(e) ?? -1;
            if (a === -1) return;
            let c = s[a - 1];
            if (c?.kind !== "separator" || c.value !== " ") return;
            let u = s[a + 1];
            if (u?.kind !== "separator" || u.value !== " ") return;
            i.add(c), i.add(u);
        } else e.kind === "separator" && e.value.trim() === "/" ? e.value = "/" : e.kind === "separator" && e.value.length > 0 && e.value.trim() === "" ? (s[0] === e || s[s.length - 1] === e) && i.add(e) : e.kind === "separator" && e.value.trim() === "," && (e.value = ",");
    }), i.size > 0 && ee(t, (e, { replaceWith: n })=>{
        i.has(e) && (i.delete(e), n([]));
    }), vt(t), Y(t);
});
function ke(r) {
    return vi.get(r);
}
var wi = new B((r)=>{
    let t = q(r);
    return t.length === 3 && t[0].kind === "word" && t[0].value === "&" && t[1].kind === "separator" && t[1].value === ":" && t[2].kind === "function" && t[2].value === "is" ? Y(t[2].nodes) : r;
});
function yi(r) {
    return wi.get(r);
}
function vt(r) {
    for (let t of r)switch(t.kind){
        case "function":
            {
                if (t.value === "url" || t.value.endsWith("_url")) {
                    t.value = Te(t.value);
                    break;
                }
                if (t.value === "var" || t.value.endsWith("_var") || t.value === "theme" || t.value.endsWith("_theme")) {
                    t.value = Te(t.value);
                    for(let i = 0; i < t.nodes.length; i++)vt([
                        t.nodes[i]
                    ]);
                    break;
                }
                t.value = Te(t.value), vt(t.nodes);
                break;
            }
        case "separator":
            t.value = Te(t.value);
            break;
        case "word":
            {
                (t.value[0] !== "-" || t.value[1] !== "-") && (t.value = Te(t.value));
                break;
            }
        default:
            ki(t);
    }
}
var bi = new B((r)=>{
    let t = q(r);
    return t.length === 1 && t[0].kind === "function" && t[0].value === "var";
});
function wt(r) {
    return bi.get(r);
}
function ki(r) {
    throw new Error(`Unexpected value: ${r}`);
}
function Te(r) {
    return r.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
}
function we(r, t, i) {
    if (r === t) return 0;
    let e = r.indexOf("("), n = t.indexOf("("), s = e === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, e), a = n === -1 ? t.replace(/[\d.]+/g, "") : t.slice(0, n), c = (s === a ? 0 : s < a ? -1 : 1) || (i === "asc" ? parseInt(r) - parseInt(t) : parseInt(t) - parseInt(r));
    return Number.isNaN(c) ? r < t ? -1 : 1 : c;
}
var xi = new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
]), nr = /^-?(\d+|\.\d+)(.*?)$/g;
function Ee(r, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, ",").map((e)=>{
        e = e.trim();
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e, " ").filter((f)=>f.trim() !== ""), s = null, a = null, c = null;
        for (let f of n)xi.has(f) || (nr.test(f) ? (a === null ? a = f : c === null && (c = f), nr.lastIndex = 0) : s === null && (s = f));
        if (a === null || c === null) return e;
        let u = t(s ?? "currentcolor");
        return s !== null ? e.replace(s, u) : `${e} ${u}`;
    }).join(", ");
}
var Ai = /^-?[a-z][a-zA-Z0-9/%._-]*$/, Ci = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/, Ze = [
    "0",
    "0.5",
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "14",
    "16",
    "20",
    "24",
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52",
    "56",
    "60",
    "64",
    "72",
    "80",
    "96"
], yt = class {
    utilities = new B(()=>[]);
    completions = new Map;
    static(t, i) {
        this.utilities.get(t).push({
            kind: "static",
            compileFn: i
        });
    }
    functional(t, i, e) {
        this.utilities.get(t).push({
            kind: "functional",
            compileFn: i,
            options: e
        });
    }
    has(t, i) {
        return this.utilities.has(t) && this.utilities.get(t).some((e)=>e.kind === i);
    }
    get(t) {
        return this.utilities.has(t) ? this.utilities.get(t) : [];
    }
    getCompletions(t) {
        return this.completions.get(t)?.() ?? [];
    }
    suggest(t, i) {
        this.completions.set(t, i);
    }
    keys(t) {
        let i = [];
        for (let [e, n] of this.utilities.entries())for (let s of n)if (s.kind === t) {
            i.push(e);
            break;
        }
        return i;
    }
};
function $(r, t, i) {
    return z("@property", r, [
        l("syntax", i ? `"${i}"` : '"*"'),
        l("inherits", "false"),
        ...t ? [
            l("initial-value", t)
        ] : []
    ]);
}
function Q(r, t) {
    if (t === null) return r;
    let i = Number(t);
    return Number.isNaN(i) || (t = `${i * 100}%`), t === "100%" ? r : `color-mix(in oklab, ${r} ${t}, transparent)`;
}
function lr(r, t) {
    let i = Number(t);
    return Number.isNaN(i) || (t = `${i * 100}%`), `oklab(from ${r} l a b / ${t})`;
}
function X(r, t, i) {
    if (!t) return r;
    if (t.kind === "arbitrary") return Q(r, t.value);
    let e = i.resolve(t.value, [
        "--opacity"
    ]);
    return e ? Q(r, e) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(t.value) ? Q(r, `${t.value}%`) : null;
}
function te(r, t, i) {
    let e = null;
    switch(r.value.value){
        case "inherit":
            {
                e = "inherit";
                break;
            }
        case "transparent":
            {
                e = "transparent";
                break;
            }
        case "current":
            {
                e = "currentcolor";
                break;
            }
        default:
            {
                e = t.resolve(r.value.value, i);
                break;
            }
    }
    return e ? X(e, r.modifier, t) : null;
}
var ar = /(\d+)_(\d+)/g;
function sr(r) {
    let t = new yt;
    function i(o, p) {
        function* h(y) {
            for (let C of r.keysInNamespaces(y))yield C.replace(ar, (O, V, T)=>`${V}.${T}`);
        }
        let A = [
            "1/2",
            "1/3",
            "2/3",
            "1/4",
            "2/4",
            "3/4",
            "1/5",
            "2/5",
            "3/5",
            "4/5",
            "1/6",
            "2/6",
            "3/6",
            "4/6",
            "5/6",
            "1/12",
            "2/12",
            "3/12",
            "4/12",
            "5/12",
            "6/12",
            "7/12",
            "8/12",
            "9/12",
            "10/12",
            "11/12"
        ];
        t.suggest(o, ()=>{
            let y = [];
            for (let C of p()){
                if (typeof C == "string") {
                    y.push({
                        values: [
                            C
                        ],
                        modifiers: []
                    });
                    continue;
                }
                let O = [
                    ...C.values ?? [],
                    ...h(C.valueThemeKeys ?? [])
                ], V = [
                    ...C.modifiers ?? [],
                    ...h(C.modifierThemeKeys ?? [])
                ];
                C.supportsFractions && O.push(...A), C.hasDefaultValue && O.unshift(null), y.push({
                    supportsNegative: C.supportsNegative,
                    values: O,
                    modifiers: V
                });
            }
            return y;
        });
    }
    function e(o, p) {
        t.static(o, ()=>p.map((h)=>typeof h == "function" ? h() : l(h[0], h[1])));
    }
    function n(o, p) {
        function h({ negative: A }) {
            return (y)=>{
                let C = null, O = null;
                if (y.value) if (y.value.kind === "arbitrary") {
                    if (y.modifier) return;
                    C = y.value.value, O = y.value.dataType;
                } else {
                    if (C = r.resolve(y.value.fraction ?? y.value.value, p.themeKeys ?? []), C === null && p.supportsFractions && y.value.fraction) {
                        let [V, T] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(y.value.fraction, "/");
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(T)) return;
                        C = `calc(${y.value.fraction} * 100%)`;
                    }
                    if (C === null && A && p.handleNegativeBareValue) {
                        if (C = p.handleNegativeBareValue(y.value), !C?.includes("/") && y.modifier) return;
                        if (C !== null) return p.handle(C, null);
                    }
                    if (C === null && p.handleBareValue && (C = p.handleBareValue(y.value), !C?.includes("/") && y.modifier)) return;
                }
                else {
                    if (y.modifier) return;
                    C = p.defaultValue !== void 0 ? p.defaultValue : r.resolve(null, p.themeKeys ?? []);
                }
                if (C !== null) return p.handle(A ? `calc(${C} * -1)` : C, O);
            };
        }
        p.supportsNegative && t.functional(`-${o}`, h({
            negative: !0
        })), t.functional(o, h({
            negative: !1
        })), i(o, ()=>[
                {
                    supportsNegative: p.supportsNegative,
                    valueThemeKeys: p.themeKeys ?? [],
                    hasDefaultValue: p.defaultValue !== void 0 && p.defaultValue !== null,
                    supportsFractions: p.supportsFractions
                }
            ]);
    }
    function s(o, p) {
        t.functional(o, (h)=>{
            if (!h.value) return;
            let A = null;
            if (h.value.kind === "arbitrary" ? (A = h.value.value, A = X(A, h.modifier, r)) : A = te(h, r, p.themeKeys), A !== null) return p.handle(A);
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: p.themeKeys,
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                }
            ]);
    }
    function a(o, p, h, { supportsNegative: A = !1, supportsFractions: y = !1 } = {}) {
        A && t.static(`-${o}-px`, ()=>h("-1px")), t.static(`${o}-px`, ()=>h("1px")), n(o, {
            themeKeys: p,
            supportsFractions: y,
            supportsNegative: A,
            defaultValue: null,
            handleBareValue: ({ value: C })=>{
                let O = r.resolve(null, [
                    "--spacing"
                ]);
                return !O || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(C) ? null : `calc(${O} * ${C})`;
            },
            handleNegativeBareValue: ({ value: C })=>{
                let O = r.resolve(null, [
                    "--spacing"
                ]);
                return !O || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(C) ? null : `calc(${O} * -${C})`;
            },
            handle: h
        }), i(o, ()=>[
                {
                    values: r.get([
                        "--spacing"
                    ]) ? Ze : [],
                    supportsNegative: A,
                    supportsFractions: y,
                    valueThemeKeys: p
                }
            ]);
    }
    e("sr-only", [
        [
            "position",
            "absolute"
        ],
        [
            "width",
            "1px"
        ],
        [
            "height",
            "1px"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "-1px"
        ],
        [
            "overflow",
            "hidden"
        ],
        [
            "clip",
            "rect(0, 0, 0, 0)"
        ],
        [
            "white-space",
            "nowrap"
        ],
        [
            "border-width",
            "0"
        ]
    ]), e("not-sr-only", [
        [
            "position",
            "static"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ],
        [
            "padding",
            "0"
        ],
        [
            "margin",
            "0"
        ],
        [
            "overflow",
            "visible"
        ],
        [
            "clip",
            "auto"
        ],
        [
            "white-space",
            "normal"
        ]
    ]), e("pointer-events-none", [
        [
            "pointer-events",
            "none"
        ]
    ]), e("pointer-events-auto", [
        [
            "pointer-events",
            "auto"
        ]
    ]), e("visible", [
        [
            "visibility",
            "visible"
        ]
    ]), e("invisible", [
        [
            "visibility",
            "hidden"
        ]
    ]), e("collapse", [
        [
            "visibility",
            "collapse"
        ]
    ]), e("static", [
        [
            "position",
            "static"
        ]
    ]), e("fixed", [
        [
            "position",
            "fixed"
        ]
    ]), e("absolute", [
        [
            "position",
            "absolute"
        ]
    ]), e("relative", [
        [
            "position",
            "relative"
        ]
    ]), e("sticky", [
        [
            "position",
            "sticky"
        ]
    ]);
    for (let [o, p] of [
        [
            "inset",
            "inset"
        ],
        [
            "inset-x",
            "inset-inline"
        ],
        [
            "inset-y",
            "inset-block"
        ],
        [
            "start",
            "inset-inline-start"
        ],
        [
            "end",
            "inset-inline-end"
        ],
        [
            "top",
            "top"
        ],
        [
            "right",
            "right"
        ],
        [
            "bottom",
            "bottom"
        ],
        [
            "left",
            "left"
        ]
    ])e(`${o}-auto`, [
        [
            p,
            "auto"
        ]
    ]), e(`${o}-full`, [
        [
            p,
            "100%"
        ]
    ]), e(`-${o}-full`, [
        [
            p,
            "-100%"
        ]
    ]), a(o, [
        "--inset",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    e("isolate", [
        [
            "isolation",
            "isolate"
        ]
    ]), e("isolation-auto", [
        [
            "isolation",
            "auto"
        ]
    ]), e("z-auto", [
        [
            "z-index",
            "auto"
        ]
    ]), n("z", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--z-index"
        ],
        handle: (o)=>[
                l("z-index", o)
            ]
    }), i("z", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "10",
                    "20",
                    "30",
                    "40",
                    "50"
                ],
                valueThemeKeys: [
                    "--z-index"
                ]
            }
        ]), e("order-first", [
        [
            "order",
            "-9999"
        ]
    ]), e("order-last", [
        [
            "order",
            "9999"
        ]
    ]), n("order", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--order"
        ],
        handle: (o)=>[
                l("order", o)
            ]
    }), i("order", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--order"
                ]
            }
        ]), e("col-auto", [
        [
            "grid-column",
            "auto"
        ]
    ]), n("col", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-column"
        ],
        handle: (o)=>[
                l("grid-column", o)
            ]
    }), e("col-span-full", [
        [
            "grid-column",
            "1 / -1"
        ]
    ]), n("col-span", {
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("grid-column", `span ${o} / span ${o}`)
            ]
    }), e("col-start-auto", [
        [
            "grid-column-start",
            "auto"
        ]
    ]), n("col-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-column-start"
        ],
        handle: (o)=>[
                l("grid-column-start", o)
            ]
    }), e("col-end-auto", [
        [
            "grid-column-end",
            "auto"
        ]
    ]), n("col-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-column-end"
        ],
        handle: (o)=>[
                l("grid-column-end", o)
            ]
    }), i("col-span", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: []
            }
        ]), i("col-start", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-column-start"
                ]
            }
        ]), i("col-end", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-column-end"
                ]
            }
        ]), e("row-auto", [
        [
            "grid-row",
            "auto"
        ]
    ]), n("row", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-row"
        ],
        handle: (o)=>[
                l("grid-row", o)
            ]
    }), e("row-span-full", [
        [
            "grid-row",
            "1 / -1"
        ]
    ]), n("row-span", {
        themeKeys: [],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("grid-row", `span ${o} / span ${o}`)
            ]
    }), e("row-start-auto", [
        [
            "grid-row-start",
            "auto"
        ]
    ]), n("row-start", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-row-start"
        ],
        handle: (o)=>[
                l("grid-row-start", o)
            ]
    }), e("row-end-auto", [
        [
            "grid-row-end",
            "auto"
        ]
    ]), n("row-end", {
        supportsNegative: !0,
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        themeKeys: [
            "--grid-row-end"
        ],
        handle: (o)=>[
                l("grid-row-end", o)
            ]
    }), i("row-span", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: []
            }
        ]), i("row-start", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-row-start"
                ]
            }
        ]), i("row-end", ()=>[
            {
                supportsNegative: !0,
                values: Array.from({
                    length: 13
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-row-end"
                ]
            }
        ]), e("float-start", [
        [
            "float",
            "inline-start"
        ]
    ]), e("float-end", [
        [
            "float",
            "inline-end"
        ]
    ]), e("float-right", [
        [
            "float",
            "right"
        ]
    ]), e("float-left", [
        [
            "float",
            "left"
        ]
    ]), e("float-none", [
        [
            "float",
            "none"
        ]
    ]), e("clear-start", [
        [
            "clear",
            "inline-start"
        ]
    ]), e("clear-end", [
        [
            "clear",
            "inline-end"
        ]
    ]), e("clear-right", [
        [
            "clear",
            "right"
        ]
    ]), e("clear-left", [
        [
            "clear",
            "left"
        ]
    ]), e("clear-both", [
        [
            "clear",
            "both"
        ]
    ]), e("clear-none", [
        [
            "clear",
            "none"
        ]
    ]);
    for (let [o, p] of [
        [
            "m",
            "margin"
        ],
        [
            "mx",
            "margin-inline"
        ],
        [
            "my",
            "margin-block"
        ],
        [
            "ms",
            "margin-inline-start"
        ],
        [
            "me",
            "margin-inline-end"
        ],
        [
            "mt",
            "margin-top"
        ],
        [
            "mr",
            "margin-right"
        ],
        [
            "mb",
            "margin-bottom"
        ],
        [
            "ml",
            "margin-left"
        ]
    ])e(`${o}-auto`, [
        [
            p,
            "auto"
        ]
    ]), a(o, [
        "--margin",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0
    });
    e("box-border", [
        [
            "box-sizing",
            "border-box"
        ]
    ]), e("box-content", [
        [
            "box-sizing",
            "content-box"
        ]
    ]), e("line-clamp-none", [
        [
            "overflow",
            "visible"
        ],
        [
            "display",
            "block"
        ],
        [
            "-webkit-box-orient",
            "horizontal"
        ],
        [
            "-webkit-line-clamp",
            "unset"
        ]
    ]), n("line-clamp", {
        themeKeys: [
            "--line-clamp"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("overflow", "hidden"),
                l("display", "-webkit-box"),
                l("-webkit-box-orient", "vertical"),
                l("-webkit-line-clamp", o)
            ]
    }), i("line-clamp", ()=>[
            {
                values: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6"
                ],
                valueThemeKeys: [
                    "--line-clamp"
                ]
            }
        ]), e("block", [
        [
            "display",
            "block"
        ]
    ]), e("inline-block", [
        [
            "display",
            "inline-block"
        ]
    ]), e("inline", [
        [
            "display",
            "inline"
        ]
    ]), e("hidden", [
        [
            "display",
            "none"
        ]
    ]), e("inline-flex", [
        [
            "display",
            "inline-flex"
        ]
    ]), e("table", [
        [
            "display",
            "table"
        ]
    ]), e("inline-table", [
        [
            "display",
            "inline-table"
        ]
    ]), e("table-caption", [
        [
            "display",
            "table-caption"
        ]
    ]), e("table-cell", [
        [
            "display",
            "table-cell"
        ]
    ]), e("table-column", [
        [
            "display",
            "table-column"
        ]
    ]), e("table-column-group", [
        [
            "display",
            "table-column-group"
        ]
    ]), e("table-footer-group", [
        [
            "display",
            "table-footer-group"
        ]
    ]), e("table-header-group", [
        [
            "display",
            "table-header-group"
        ]
    ]), e("table-row-group", [
        [
            "display",
            "table-row-group"
        ]
    ]), e("table-row", [
        [
            "display",
            "table-row"
        ]
    ]), e("flow-root", [
        [
            "display",
            "flow-root"
        ]
    ]), e("flex", [
        [
            "display",
            "flex"
        ]
    ]), e("grid", [
        [
            "display",
            "grid"
        ]
    ]), e("inline-grid", [
        [
            "display",
            "inline-grid"
        ]
    ]), e("contents", [
        [
            "display",
            "contents"
        ]
    ]), e("list-item", [
        [
            "display",
            "list-item"
        ]
    ]), e("field-sizing-content", [
        [
            "field-sizing",
            "content"
        ]
    ]), e("field-sizing-fixed", [
        [
            "field-sizing",
            "fixed"
        ]
    ]), e("aspect-auto", [
        [
            "aspect-ratio",
            "auto"
        ]
    ]), e("aspect-square", [
        [
            "aspect-ratio",
            "1 / 1"
        ]
    ]), n("aspect", {
        themeKeys: [
            "--aspect"
        ],
        handleBareValue: ({ fraction: o })=>{
            if (o === null) return null;
            let [p, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(o, "/");
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? null : o;
        },
        handle: (o)=>[
                l("aspect-ratio", o)
            ]
    });
    for (let [o, p] of [
        [
            "full",
            "100%"
        ],
        [
            "svw",
            "100svw"
        ],
        [
            "lvw",
            "100lvw"
        ],
        [
            "dvw",
            "100dvw"
        ],
        [
            "svh",
            "100svh"
        ],
        [
            "lvh",
            "100lvh"
        ],
        [
            "dvh",
            "100dvh"
        ],
        [
            "min",
            "min-content"
        ],
        [
            "max",
            "max-content"
        ],
        [
            "fit",
            "fit-content"
        ]
    ])e(`size-${o}`, [
        [
            "--tw-sort",
            "size"
        ],
        [
            "width",
            p
        ],
        [
            "height",
            p
        ]
    ]), e(`w-${o}`, [
        [
            "width",
            p
        ]
    ]), e(`h-${o}`, [
        [
            "height",
            p
        ]
    ]), e(`min-w-${o}`, [
        [
            "min-width",
            p
        ]
    ]), e(`min-h-${o}`, [
        [
            "min-height",
            p
        ]
    ]), e(`max-w-${o}`, [
        [
            "max-width",
            p
        ]
    ]), e(`max-h-${o}`, [
        [
            "max-height",
            p
        ]
    ]);
    e("size-auto", [
        [
            "--tw-sort",
            "size"
        ],
        [
            "width",
            "auto"
        ],
        [
            "height",
            "auto"
        ]
    ]), e("w-auto", [
        [
            "width",
            "auto"
        ]
    ]), e("h-auto", [
        [
            "height",
            "auto"
        ]
    ]), e("min-w-auto", [
        [
            "min-width",
            "auto"
        ]
    ]), e("min-h-auto", [
        [
            "min-height",
            "auto"
        ]
    ]), e("h-lh", [
        [
            "height",
            "1lh"
        ]
    ]), e("min-h-lh", [
        [
            "min-height",
            "1lh"
        ]
    ]), e("max-h-lh", [
        [
            "max-height",
            "1lh"
        ]
    ]), e("w-screen", [
        [
            "width",
            "100vw"
        ]
    ]), e("min-w-screen", [
        [
            "min-width",
            "100vw"
        ]
    ]), e("max-w-screen", [
        [
            "max-width",
            "100vw"
        ]
    ]), e("h-screen", [
        [
            "height",
            "100vh"
        ]
    ]), e("min-h-screen", [
        [
            "min-height",
            "100vh"
        ]
    ]), e("max-h-screen", [
        [
            "max-height",
            "100vh"
        ]
    ]), e("max-w-none", [
        [
            "max-width",
            "none"
        ]
    ]), e("max-h-none", [
        [
            "max-height",
            "none"
        ]
    ]), a("size", [
        "--size",
        "--spacing"
    ], (o)=>[
            l("--tw-sort", "size"),
            l("width", o),
            l("height", o)
        ], {
        supportsFractions: !0
    });
    for (let [o, p, h] of [
        [
            "w",
            [
                "--width",
                "--spacing",
                "--container"
            ],
            "width"
        ],
        [
            "min-w",
            [
                "--min-width",
                "--spacing",
                "--container"
            ],
            "min-width"
        ],
        [
            "max-w",
            [
                "--max-width",
                "--spacing",
                "--container"
            ],
            "max-width"
        ],
        [
            "h",
            [
                "--height",
                "--spacing"
            ],
            "height"
        ],
        [
            "min-h",
            [
                "--min-height",
                "--height",
                "--spacing"
            ],
            "min-height"
        ],
        [
            "max-h",
            [
                "--max-height",
                "--height",
                "--spacing"
            ],
            "max-height"
        ]
    ])a(o, p, (A)=>[
            l(h, A)
        ], {
        supportsFractions: !0
    });
    t.static("container", ()=>{
        let o = [
            ...r.namespace("--breakpoint").values()
        ];
        o.sort((h, A)=>we(h, A, "asc"));
        let p = [
            l("--tw-sort", "--tw-container-component"),
            l("width", "100%")
        ];
        for (let h of o)p.push(z("@media", `(width >= ${h})`, [
            l("max-width", h)
        ]));
        return p;
    }), e("flex-auto", [
        [
            "flex",
            "auto"
        ]
    ]), e("flex-initial", [
        [
            "flex",
            "0 auto"
        ]
    ]), e("flex-none", [
        [
            "flex",
            "none"
        ]
    ]), t.functional("flex", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") return o.modifier ? void 0 : [
                l("flex", o.value.value)
            ];
            if (o.value.fraction) {
                let [p, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(o.value.fraction, "/");
                return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? void 0 : [
                    l("flex", `calc(${o.value.fraction} * 100%)`)
                ];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value.value)) return o.modifier ? void 0 : [
                l("flex", o.value.value)
            ];
        }
    }), i("flex", ()=>[
            {
                supportsFractions: !0
            }
        ]), n("shrink", {
        defaultValue: "1",
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("flex-shrink", o)
            ]
    }), n("grow", {
        defaultValue: "1",
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("flex-grow", o)
            ]
    }), i("shrink", ()=>[
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), i("grow", ()=>[
            {
                values: [
                    "0"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), e("basis-auto", [
        [
            "flex-basis",
            "auto"
        ]
    ]), e("basis-full", [
        [
            "flex-basis",
            "100%"
        ]
    ]), a("basis", [
        "--flex-basis",
        "--spacing",
        "--container"
    ], (o)=>[
            l("flex-basis", o)
        ], {
        supportsFractions: !0
    }), e("table-auto", [
        [
            "table-layout",
            "auto"
        ]
    ]), e("table-fixed", [
        [
            "table-layout",
            "fixed"
        ]
    ]), e("caption-top", [
        [
            "caption-side",
            "top"
        ]
    ]), e("caption-bottom", [
        [
            "caption-side",
            "bottom"
        ]
    ]), e("border-collapse", [
        [
            "border-collapse",
            "collapse"
        ]
    ]), e("border-separate", [
        [
            "border-collapse",
            "separate"
        ]
    ]);
    let c = ()=>L([
            $("--tw-border-spacing-x", "0", "<length>"),
            $("--tw-border-spacing-y", "0", "<length>")
        ]);
    a("border-spacing", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-x", o),
            l("--tw-border-spacing-y", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), a("border-spacing-x", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-x", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), a("border-spacing-y", [
        "--border-spacing",
        "--spacing"
    ], (o)=>[
            c(),
            l("--tw-border-spacing-y", o),
            l("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")
        ]), e("origin-center", [
        [
            "transform-origin",
            "center"
        ]
    ]), e("origin-top", [
        [
            "transform-origin",
            "top"
        ]
    ]), e("origin-top-right", [
        [
            "transform-origin",
            "top right"
        ]
    ]), e("origin-right", [
        [
            "transform-origin",
            "right"
        ]
    ]), e("origin-bottom-right", [
        [
            "transform-origin",
            "bottom right"
        ]
    ]), e("origin-bottom", [
        [
            "transform-origin",
            "bottom"
        ]
    ]), e("origin-bottom-left", [
        [
            "transform-origin",
            "bottom left"
        ]
    ]), e("origin-left", [
        [
            "transform-origin",
            "left"
        ]
    ]), e("origin-top-left", [
        [
            "transform-origin",
            "top left"
        ]
    ]), n("origin", {
        themeKeys: [
            "--transform-origin"
        ],
        handle: (o)=>[
                l("transform-origin", o)
            ]
    }), e("perspective-origin-center", [
        [
            "perspective-origin",
            "center"
        ]
    ]), e("perspective-origin-top", [
        [
            "perspective-origin",
            "top"
        ]
    ]), e("perspective-origin-top-right", [
        [
            "perspective-origin",
            "top right"
        ]
    ]), e("perspective-origin-right", [
        [
            "perspective-origin",
            "right"
        ]
    ]), e("perspective-origin-bottom-right", [
        [
            "perspective-origin",
            "bottom right"
        ]
    ]), e("perspective-origin-bottom", [
        [
            "perspective-origin",
            "bottom"
        ]
    ]), e("perspective-origin-bottom-left", [
        [
            "perspective-origin",
            "bottom left"
        ]
    ]), e("perspective-origin-left", [
        [
            "perspective-origin",
            "left"
        ]
    ]), e("perspective-origin-top-left", [
        [
            "perspective-origin",
            "top left"
        ]
    ]), n("perspective-origin", {
        themeKeys: [
            "--perspective-origin"
        ],
        handle: (o)=>[
                l("perspective-origin", o)
            ]
    }), e("perspective-none", [
        [
            "perspective",
            "none"
        ]
    ]), n("perspective", {
        themeKeys: [
            "--perspective"
        ],
        handle: (o)=>[
                l("perspective", o)
            ]
    });
    let u = ()=>L([
            $("--tw-translate-x", "0"),
            $("--tw-translate-y", "0"),
            $("--tw-translate-z", "0")
        ]);
    e("translate-none", [
        [
            "translate",
            "none"
        ]
    ]), e("-translate-full", [
        u,
        [
            "--tw-translate-x",
            "-100%"
        ],
        [
            "--tw-translate-y",
            "-100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), e("translate-full", [
        u,
        [
            "--tw-translate-x",
            "100%"
        ],
        [
            "--tw-translate-y",
            "100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), a("translate", [
        "--translate",
        "--spacing"
    ], (o)=>[
            u(),
            l("--tw-translate-x", o),
            l("--tw-translate-y", o),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y)")
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    for (let o of [
        "x",
        "y"
    ])e(`-translate-${o}-full`, [
        u,
        [
            `--tw-translate-${o}`,
            "-100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), e(`translate-${o}-full`, [
        u,
        [
            `--tw-translate-${o}`,
            "100%"
        ],
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y)"
        ]
    ]), a(`translate-${o}`, [
        "--translate",
        "--spacing"
    ], (p)=>[
            u(),
            l(`--tw-translate-${o}`, p),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y)")
        ], {
        supportsNegative: !0,
        supportsFractions: !0
    });
    a("translate-z", [
        "--translate",
        "--spacing"
    ], (o)=>[
            u(),
            l("--tw-translate-z", o),
            l("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")
        ], {
        supportsNegative: !0
    }), e("translate-3d", [
        u,
        [
            "translate",
            "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"
        ]
    ]);
    let f = ()=>L([
            $("--tw-scale-x", "1"),
            $("--tw-scale-y", "1"),
            $("--tw-scale-z", "1")
        ]);
    e("scale-none", [
        [
            "scale",
            "none"
        ]
    ]);
    function g({ negative: o }) {
        return (p)=>{
            if (!p.value || p.modifier) return;
            let h;
            return p.value.kind === "arbitrary" ? (h = p.value.value, h = o ? `calc(${h} * -1)` : h, [
                l("scale", h)
            ]) : (h = r.resolve(p.value.value, [
                "--scale"
            ]), !h && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p.value.value) && (h = `${p.value.value}%`), h ? (h = o ? `calc(${h} * -1)` : h, [
                f(),
                l("--tw-scale-x", h),
                l("--tw-scale-y", h),
                l("--tw-scale-z", h),
                l("scale", "var(--tw-scale-x) var(--tw-scale-y)")
            ]) : void 0);
        };
    }
    t.functional("-scale", g({
        negative: !0
    })), t.functional("scale", g({
        negative: !1
    })), i("scale", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "50",
                    "75",
                    "90",
                    "95",
                    "100",
                    "105",
                    "110",
                    "125",
                    "150",
                    "200"
                ],
                valueThemeKeys: [
                    "--scale"
                ]
            }
        ]);
    for (let o of [
        "x",
        "y",
        "z"
    ])n(`scale-${o}`, {
        supportsNegative: !0,
        themeKeys: [
            "--scale"
        ],
        handleBareValue: ({ value: p })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p) ? `${p}%` : null,
        handle: (p)=>[
                f(),
                l(`--tw-scale-${o}`, p),
                l("scale", `var(--tw-scale-x) var(--tw-scale-y)${o === "z" ? " var(--tw-scale-z)" : ""}`)
            ]
    }), i(`scale-${o}`, ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "50",
                    "75",
                    "90",
                    "95",
                    "100",
                    "105",
                    "110",
                    "125",
                    "150",
                    "200"
                ],
                valueThemeKeys: [
                    "--scale"
                ]
            }
        ]);
    e("scale-3d", [
        f,
        [
            "scale",
            "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"
        ]
    ]), e("rotate-none", [
        [
            "rotate",
            "none"
        ]
    ]);
    function d({ negative: o }) {
        return (p)=>{
            if (!p.value || p.modifier) return;
            let h;
            if (p.value.kind === "arbitrary") {
                h = p.value.value;
                let A = p.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(h, [
                    "angle",
                    "vector"
                ]);
                if (A === "vector") return [
                    l("rotate", `${h} var(--tw-rotate)`)
                ];
                if (A !== "angle") return [
                    l("rotate", o ? `calc(${h} * -1)` : h)
                ];
            } else if (h = r.resolve(p.value.value, [
                "--rotate"
            ]), !h && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p.value.value) && (h = `${p.value.value}deg`), !h) return;
            return [
                l("rotate", o ? `calc(${h} * -1)` : h)
            ];
        };
    }
    t.functional("-rotate", d({
        negative: !0
    })), t.functional("rotate", d({
        negative: !1
    })), i("rotate", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ],
                valueThemeKeys: [
                    "--rotate"
                ]
            }
        ]);
    {
        let o = [
            "var(--tw-rotate-x,)",
            "var(--tw-rotate-y,)",
            "var(--tw-rotate-z,)",
            "var(--tw-skew-x,)",
            "var(--tw-skew-y,)"
        ].join(" "), p = ()=>L([
                $("--tw-rotate-x"),
                $("--tw-rotate-y"),
                $("--tw-rotate-z"),
                $("--tw-skew-x"),
                $("--tw-skew-y")
            ]);
        for (let h of [
            "x",
            "y",
            "z"
        ])n(`rotate-${h}`, {
            supportsNegative: !0,
            themeKeys: [
                "--rotate"
            ],
            handleBareValue: ({ value: A })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(A) ? `${A}deg` : null,
            handle: (A)=>[
                    p(),
                    l(`--tw-rotate-${h}`, `rotate${h.toUpperCase()}(${A})`),
                    l("transform", o)
                ]
        }), i(`rotate-${h}`, ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12",
                        "45",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--rotate"
                    ]
                }
            ]);
        n("skew", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-x", `skewX(${h})`),
                    l("--tw-skew-y", `skewY(${h})`),
                    l("transform", o)
                ]
        }), n("skew-x", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-x", `skewX(${h})`),
                    l("transform", o)
                ]
        }), n("skew-y", {
            supportsNegative: !0,
            themeKeys: [
                "--skew"
            ],
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}deg` : null,
            handle: (h)=>[
                    p(),
                    l("--tw-skew-y", `skewY(${h})`),
                    l("transform", o)
                ]
        }), i("skew", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), i("skew-x", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), i("skew-y", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "6",
                        "12"
                    ],
                    valueThemeKeys: [
                        "--skew"
                    ]
                }
            ]), t.functional("transform", (h)=>{
            if (h.modifier) return;
            let A = null;
            if (h.value ? h.value.kind === "arbitrary" && (A = h.value.value) : A = o, A !== null) return [
                p(),
                l("transform", A)
            ];
        }), i("transform", ()=>[
                {
                    hasDefaultValue: !0
                }
            ]), e("transform-cpu", [
            [
                "transform",
                o
            ]
        ]), e("transform-gpu", [
            [
                "transform",
                `translateZ(0) ${o}`
            ]
        ]), e("transform-none", [
            [
                "transform",
                "none"
            ]
        ]);
    }
    e("transform-flat", [
        [
            "transform-style",
            "flat"
        ]
    ]), e("transform-3d", [
        [
            "transform-style",
            "preserve-3d"
        ]
    ]), e("transform-content", [
        [
            "transform-box",
            "content-box"
        ]
    ]), e("transform-border", [
        [
            "transform-box",
            "border-box"
        ]
    ]), e("transform-fill", [
        [
            "transform-box",
            "fill-box"
        ]
    ]), e("transform-stroke", [
        [
            "transform-box",
            "stroke-box"
        ]
    ]), e("transform-view", [
        [
            "transform-box",
            "view-box"
        ]
    ]), e("backface-visible", [
        [
            "backface-visibility",
            "visible"
        ]
    ]), e("backface-hidden", [
        [
            "backface-visibility",
            "hidden"
        ]
    ]);
    for (let o of [
        "auto",
        "default",
        "pointer",
        "wait",
        "text",
        "move",
        "help",
        "not-allowed",
        "none",
        "context-menu",
        "progress",
        "cell",
        "crosshair",
        "vertical-text",
        "alias",
        "copy",
        "no-drop",
        "grab",
        "grabbing",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "zoom-in",
        "zoom-out"
    ])e(`cursor-${o}`, [
        [
            "cursor",
            o
        ]
    ]);
    n("cursor", {
        themeKeys: [
            "--cursor"
        ],
        handle: (o)=>[
                l("cursor", o)
            ]
    });
    for (let o of [
        "auto",
        "none",
        "manipulation"
    ])e(`touch-${o}`, [
        [
            "touch-action",
            o
        ]
    ]);
    let m = ()=>L([
            $("--tw-pan-x"),
            $("--tw-pan-y"),
            $("--tw-pinch-zoom")
        ]);
    for (let o of [
        "x",
        "left",
        "right"
    ])e(`touch-pan-${o}`, [
        m,
        [
            "--tw-pan-x",
            `pan-${o}`
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    for (let o of [
        "y",
        "up",
        "down"
    ])e(`touch-pan-${o}`, [
        m,
        [
            "--tw-pan-y",
            `pan-${o}`
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    e("touch-pinch-zoom", [
        m,
        [
            "--tw-pinch-zoom",
            "pinch-zoom"
        ],
        [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"
        ]
    ]);
    for (let o of [
        "none",
        "text",
        "all",
        "auto"
    ])e(`select-${o}`, [
        [
            "-webkit-user-select",
            o
        ],
        [
            "user-select",
            o
        ]
    ]);
    e("resize-none", [
        [
            "resize",
            "none"
        ]
    ]), e("resize-x", [
        [
            "resize",
            "horizontal"
        ]
    ]), e("resize-y", [
        [
            "resize",
            "vertical"
        ]
    ]), e("resize", [
        [
            "resize",
            "both"
        ]
    ]), e("snap-none", [
        [
            "scroll-snap-type",
            "none"
        ]
    ]);
    let w = ()=>L([
            $("--tw-scroll-snap-strictness", "proximity", "*")
        ]);
    for (let o of [
        "x",
        "y",
        "both"
    ])e(`snap-${o}`, [
        w,
        [
            "scroll-snap-type",
            `${o} var(--tw-scroll-snap-strictness)`
        ]
    ]);
    e("snap-mandatory", [
        w,
        [
            "--tw-scroll-snap-strictness",
            "mandatory"
        ]
    ]), e("snap-proximity", [
        w,
        [
            "--tw-scroll-snap-strictness",
            "proximity"
        ]
    ]), e("snap-align-none", [
        [
            "scroll-snap-align",
            "none"
        ]
    ]), e("snap-start", [
        [
            "scroll-snap-align",
            "start"
        ]
    ]), e("snap-end", [
        [
            "scroll-snap-align",
            "end"
        ]
    ]), e("snap-center", [
        [
            "scroll-snap-align",
            "center"
        ]
    ]), e("snap-normal", [
        [
            "scroll-snap-stop",
            "normal"
        ]
    ]), e("snap-always", [
        [
            "scroll-snap-stop",
            "always"
        ]
    ]);
    for (let [o, p] of [
        [
            "scroll-m",
            "scroll-margin"
        ],
        [
            "scroll-mx",
            "scroll-margin-inline"
        ],
        [
            "scroll-my",
            "scroll-margin-block"
        ],
        [
            "scroll-ms",
            "scroll-margin-inline-start"
        ],
        [
            "scroll-me",
            "scroll-margin-inline-end"
        ],
        [
            "scroll-mt",
            "scroll-margin-top"
        ],
        [
            "scroll-mr",
            "scroll-margin-right"
        ],
        [
            "scroll-mb",
            "scroll-margin-bottom"
        ],
        [
            "scroll-ml",
            "scroll-margin-left"
        ]
    ])a(o, [
        "--scroll-margin",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ], {
        supportsNegative: !0
    });
    for (let [o, p] of [
        [
            "scroll-p",
            "scroll-padding"
        ],
        [
            "scroll-px",
            "scroll-padding-inline"
        ],
        [
            "scroll-py",
            "scroll-padding-block"
        ],
        [
            "scroll-ps",
            "scroll-padding-inline-start"
        ],
        [
            "scroll-pe",
            "scroll-padding-inline-end"
        ],
        [
            "scroll-pt",
            "scroll-padding-top"
        ],
        [
            "scroll-pr",
            "scroll-padding-right"
        ],
        [
            "scroll-pb",
            "scroll-padding-bottom"
        ],
        [
            "scroll-pl",
            "scroll-padding-left"
        ]
    ])a(o, [
        "--scroll-padding",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ]);
    e("list-inside", [
        [
            "list-style-position",
            "inside"
        ]
    ]), e("list-outside", [
        [
            "list-style-position",
            "outside"
        ]
    ]), e("list-none", [
        [
            "list-style-type",
            "none"
        ]
    ]), e("list-disc", [
        [
            "list-style-type",
            "disc"
        ]
    ]), e("list-decimal", [
        [
            "list-style-type",
            "decimal"
        ]
    ]), n("list", {
        themeKeys: [
            "--list-style-type"
        ],
        handle: (o)=>[
                l("list-style-type", o)
            ]
    }), e("list-image-none", [
        [
            "list-style-image",
            "none"
        ]
    ]), n("list-image", {
        themeKeys: [
            "--list-style-image"
        ],
        handle: (o)=>[
                l("list-style-image", o)
            ]
    }), e("appearance-none", [
        [
            "appearance",
            "none"
        ]
    ]), e("appearance-auto", [
        [
            "appearance",
            "auto"
        ]
    ]), e("scheme-normal", [
        [
            "color-scheme",
            "normal"
        ]
    ]), e("scheme-dark", [
        [
            "color-scheme",
            "dark"
        ]
    ]), e("scheme-light", [
        [
            "color-scheme",
            "light"
        ]
    ]), e("scheme-light-dark", [
        [
            "color-scheme",
            "light dark"
        ]
    ]), e("scheme-only-dark", [
        [
            "color-scheme",
            "only dark"
        ]
    ]), e("scheme-only-light", [
        [
            "color-scheme",
            "only light"
        ]
    ]), e("columns-auto", [
        [
            "columns",
            "auto"
        ]
    ]), n("columns", {
        themeKeys: [
            "--columns",
            "--container"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? o : null,
        handle: (o)=>[
                l("columns", o)
            ]
    }), i("columns", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--columns",
                    "--container"
                ]
            }
        ]);
    for (let o of [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ])e(`break-before-${o}`, [
        [
            "break-before",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "avoid",
        "avoid-page",
        "avoid-column"
    ])e(`break-inside-${o}`, [
        [
            "break-inside",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column"
    ])e(`break-after-${o}`, [
        [
            "break-after",
            o
        ]
    ]);
    e("grid-flow-row", [
        [
            "grid-auto-flow",
            "row"
        ]
    ]), e("grid-flow-col", [
        [
            "grid-auto-flow",
            "column"
        ]
    ]), e("grid-flow-dense", [
        [
            "grid-auto-flow",
            "dense"
        ]
    ]), e("grid-flow-row-dense", [
        [
            "grid-auto-flow",
            "row dense"
        ]
    ]), e("grid-flow-col-dense", [
        [
            "grid-auto-flow",
            "column dense"
        ]
    ]), e("auto-cols-auto", [
        [
            "grid-auto-columns",
            "auto"
        ]
    ]), e("auto-cols-min", [
        [
            "grid-auto-columns",
            "min-content"
        ]
    ]), e("auto-cols-max", [
        [
            "grid-auto-columns",
            "max-content"
        ]
    ]), e("auto-cols-fr", [
        [
            "grid-auto-columns",
            "minmax(0, 1fr)"
        ]
    ]), n("auto-cols", {
        themeKeys: [
            "--grid-auto-columns"
        ],
        handle: (o)=>[
                l("grid-auto-columns", o)
            ]
    }), e("auto-rows-auto", [
        [
            "grid-auto-rows",
            "auto"
        ]
    ]), e("auto-rows-min", [
        [
            "grid-auto-rows",
            "min-content"
        ]
    ]), e("auto-rows-max", [
        [
            "grid-auto-rows",
            "max-content"
        ]
    ]), e("auto-rows-fr", [
        [
            "grid-auto-rows",
            "minmax(0, 1fr)"
        ]
    ]), n("auto-rows", {
        themeKeys: [
            "--grid-auto-rows"
        ],
        handle: (o)=>[
                l("grid-auto-rows", o)
            ]
    }), e("grid-cols-none", [
        [
            "grid-template-columns",
            "none"
        ]
    ]), e("grid-cols-subgrid", [
        [
            "grid-template-columns",
            "subgrid"
        ]
    ]), n("grid-cols", {
        themeKeys: [
            "--grid-template-columns"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o) ? `repeat(${o}, minmax(0, 1fr))` : null,
        handle: (o)=>[
                l("grid-template-columns", o)
            ]
    }), e("grid-rows-none", [
        [
            "grid-template-rows",
            "none"
        ]
    ]), e("grid-rows-subgrid", [
        [
            "grid-template-rows",
            "subgrid"
        ]
    ]), n("grid-rows", {
        themeKeys: [
            "--grid-template-rows"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o) ? `repeat(${o}, minmax(0, 1fr))` : null,
        handle: (o)=>[
                l("grid-template-rows", o)
            ]
    }), i("grid-cols", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-template-columns"
                ]
            }
        ]), i("grid-rows", ()=>[
            {
                values: Array.from({
                    length: 12
                }, (o, p)=>`${p + 1}`),
                valueThemeKeys: [
                    "--grid-template-rows"
                ]
            }
        ]), e("flex-row", [
        [
            "flex-direction",
            "row"
        ]
    ]), e("flex-row-reverse", [
        [
            "flex-direction",
            "row-reverse"
        ]
    ]), e("flex-col", [
        [
            "flex-direction",
            "column"
        ]
    ]), e("flex-col-reverse", [
        [
            "flex-direction",
            "column-reverse"
        ]
    ]), e("flex-wrap", [
        [
            "flex-wrap",
            "wrap"
        ]
    ]), e("flex-nowrap", [
        [
            "flex-wrap",
            "nowrap"
        ]
    ]), e("flex-wrap-reverse", [
        [
            "flex-wrap",
            "wrap-reverse"
        ]
    ]), e("place-content-center", [
        [
            "place-content",
            "center"
        ]
    ]), e("place-content-start", [
        [
            "place-content",
            "start"
        ]
    ]), e("place-content-end", [
        [
            "place-content",
            "end"
        ]
    ]), e("place-content-center-safe", [
        [
            "place-content",
            "safe center"
        ]
    ]), e("place-content-end-safe", [
        [
            "place-content",
            "safe end"
        ]
    ]), e("place-content-between", [
        [
            "place-content",
            "space-between"
        ]
    ]), e("place-content-around", [
        [
            "place-content",
            "space-around"
        ]
    ]), e("place-content-evenly", [
        [
            "place-content",
            "space-evenly"
        ]
    ]), e("place-content-baseline", [
        [
            "place-content",
            "baseline"
        ]
    ]), e("place-content-stretch", [
        [
            "place-content",
            "stretch"
        ]
    ]), e("place-items-center", [
        [
            "place-items",
            "center"
        ]
    ]), e("place-items-start", [
        [
            "place-items",
            "start"
        ]
    ]), e("place-items-end", [
        [
            "place-items",
            "end"
        ]
    ]), e("place-items-center-safe", [
        [
            "place-items",
            "safe center"
        ]
    ]), e("place-items-end-safe", [
        [
            "place-items",
            "safe end"
        ]
    ]), e("place-items-baseline", [
        [
            "place-items",
            "baseline"
        ]
    ]), e("place-items-stretch", [
        [
            "place-items",
            "stretch"
        ]
    ]), e("content-normal", [
        [
            "align-content",
            "normal"
        ]
    ]), e("content-center", [
        [
            "align-content",
            "center"
        ]
    ]), e("content-start", [
        [
            "align-content",
            "flex-start"
        ]
    ]), e("content-end", [
        [
            "align-content",
            "flex-end"
        ]
    ]), e("content-center-safe", [
        [
            "align-content",
            "safe center"
        ]
    ]), e("content-end-safe", [
        [
            "align-content",
            "safe flex-end"
        ]
    ]), e("content-between", [
        [
            "align-content",
            "space-between"
        ]
    ]), e("content-around", [
        [
            "align-content",
            "space-around"
        ]
    ]), e("content-evenly", [
        [
            "align-content",
            "space-evenly"
        ]
    ]), e("content-baseline", [
        [
            "align-content",
            "baseline"
        ]
    ]), e("content-stretch", [
        [
            "align-content",
            "stretch"
        ]
    ]), e("items-center", [
        [
            "align-items",
            "center"
        ]
    ]), e("items-start", [
        [
            "align-items",
            "flex-start"
        ]
    ]), e("items-end", [
        [
            "align-items",
            "flex-end"
        ]
    ]), e("items-center-safe", [
        [
            "align-items",
            "safe center"
        ]
    ]), e("items-end-safe", [
        [
            "align-items",
            "safe flex-end"
        ]
    ]), e("items-baseline", [
        [
            "align-items",
            "baseline"
        ]
    ]), e("items-baseline-last", [
        [
            "align-items",
            "last baseline"
        ]
    ]), e("items-stretch", [
        [
            "align-items",
            "stretch"
        ]
    ]), e("justify-normal", [
        [
            "justify-content",
            "normal"
        ]
    ]), e("justify-center", [
        [
            "justify-content",
            "center"
        ]
    ]), e("justify-start", [
        [
            "justify-content",
            "flex-start"
        ]
    ]), e("justify-end", [
        [
            "justify-content",
            "flex-end"
        ]
    ]), e("justify-center-safe", [
        [
            "justify-content",
            "safe center"
        ]
    ]), e("justify-end-safe", [
        [
            "justify-content",
            "safe flex-end"
        ]
    ]), e("justify-between", [
        [
            "justify-content",
            "space-between"
        ]
    ]), e("justify-around", [
        [
            "justify-content",
            "space-around"
        ]
    ]), e("justify-evenly", [
        [
            "justify-content",
            "space-evenly"
        ]
    ]), e("justify-baseline", [
        [
            "justify-content",
            "baseline"
        ]
    ]), e("justify-stretch", [
        [
            "justify-content",
            "stretch"
        ]
    ]), e("justify-items-normal", [
        [
            "justify-items",
            "normal"
        ]
    ]), e("justify-items-center", [
        [
            "justify-items",
            "center"
        ]
    ]), e("justify-items-start", [
        [
            "justify-items",
            "start"
        ]
    ]), e("justify-items-end", [
        [
            "justify-items",
            "end"
        ]
    ]), e("justify-items-center-safe", [
        [
            "justify-items",
            "safe center"
        ]
    ]), e("justify-items-end-safe", [
        [
            "justify-items",
            "safe end"
        ]
    ]), e("justify-items-stretch", [
        [
            "justify-items",
            "stretch"
        ]
    ]), a("gap", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("gap", o)
        ]), a("gap-x", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("column-gap", o)
        ]), a("gap-y", [
        "--gap",
        "--spacing"
    ], (o)=>[
            l("row-gap", o)
        ]), a("space-x", [
        "--space",
        "--spacing"
    ], (o)=>[
            L([
                $("--tw-space-x-reverse", "0")
            ]),
            M(":where(& > :not(:last-child))", [
                l("--tw-sort", "row-gap"),
                l("--tw-space-x-reverse", "0"),
                l("margin-inline-start", `calc(${o} * var(--tw-space-x-reverse))`),
                l("margin-inline-end", `calc(${o} * calc(1 - var(--tw-space-x-reverse)))`)
            ])
        ], {
        supportsNegative: !0
    }), a("space-y", [
        "--space",
        "--spacing"
    ], (o)=>[
            L([
                $("--tw-space-y-reverse", "0")
            ]),
            M(":where(& > :not(:last-child))", [
                l("--tw-sort", "column-gap"),
                l("--tw-space-y-reverse", "0"),
                l("margin-block-start", `calc(${o} * var(--tw-space-y-reverse))`),
                l("margin-block-end", `calc(${o} * calc(1 - var(--tw-space-y-reverse)))`)
            ])
        ], {
        supportsNegative: !0
    }), e("space-x-reverse", [
        ()=>L([
                $("--tw-space-x-reverse", "0")
            ]),
        ()=>M(":where(& > :not(:last-child))", [
                l("--tw-sort", "row-gap"),
                l("--tw-space-x-reverse", "1")
            ])
    ]), e("space-y-reverse", [
        ()=>L([
                $("--tw-space-y-reverse", "0")
            ]),
        ()=>M(":where(& > :not(:last-child))", [
                l("--tw-sort", "column-gap"),
                l("--tw-space-y-reverse", "1")
            ])
    ]), e("accent-auto", [
        [
            "accent-color",
            "auto"
        ]
    ]), s("accent", {
        themeKeys: [
            "--accent-color",
            "--color"
        ],
        handle: (o)=>[
                l("accent-color", o)
            ]
    }), s("caret", {
        themeKeys: [
            "--caret-color",
            "--color"
        ],
        handle: (o)=>[
                l("caret-color", o)
            ]
    }), s("divide", {
        themeKeys: [
            "--divide-color",
            "--color"
        ],
        handle: (o)=>[
                M(":where(& > :not(:last-child))", [
                    l("--tw-sort", "divide-color"),
                    l("border-color", o)
                ])
            ]
    }), e("place-self-auto", [
        [
            "place-self",
            "auto"
        ]
    ]), e("place-self-start", [
        [
            "place-self",
            "start"
        ]
    ]), e("place-self-end", [
        [
            "place-self",
            "end"
        ]
    ]), e("place-self-center", [
        [
            "place-self",
            "center"
        ]
    ]), e("place-self-end-safe", [
        [
            "place-self",
            "safe end"
        ]
    ]), e("place-self-center-safe", [
        [
            "place-self",
            "safe center"
        ]
    ]), e("place-self-stretch", [
        [
            "place-self",
            "stretch"
        ]
    ]), e("self-auto", [
        [
            "align-self",
            "auto"
        ]
    ]), e("self-start", [
        [
            "align-self",
            "flex-start"
        ]
    ]), e("self-end", [
        [
            "align-self",
            "flex-end"
        ]
    ]), e("self-center", [
        [
            "align-self",
            "center"
        ]
    ]), e("self-end-safe", [
        [
            "align-self",
            "safe flex-end"
        ]
    ]), e("self-center-safe", [
        [
            "align-self",
            "safe center"
        ]
    ]), e("self-stretch", [
        [
            "align-self",
            "stretch"
        ]
    ]), e("self-baseline", [
        [
            "align-self",
            "baseline"
        ]
    ]), e("self-baseline-last", [
        [
            "align-self",
            "last baseline"
        ]
    ]), e("justify-self-auto", [
        [
            "justify-self",
            "auto"
        ]
    ]), e("justify-self-start", [
        [
            "justify-self",
            "flex-start"
        ]
    ]), e("justify-self-end", [
        [
            "justify-self",
            "flex-end"
        ]
    ]), e("justify-self-center", [
        [
            "justify-self",
            "center"
        ]
    ]), e("justify-self-end-safe", [
        [
            "justify-self",
            "safe flex-end"
        ]
    ]), e("justify-self-center-safe", [
        [
            "justify-self",
            "safe center"
        ]
    ]), e("justify-self-stretch", [
        [
            "justify-self",
            "stretch"
        ]
    ]);
    for (let o of [
        "auto",
        "hidden",
        "clip",
        "visible",
        "scroll"
    ])e(`overflow-${o}`, [
        [
            "overflow",
            o
        ]
    ]), e(`overflow-x-${o}`, [
        [
            "overflow-x",
            o
        ]
    ]), e(`overflow-y-${o}`, [
        [
            "overflow-y",
            o
        ]
    ]);
    for (let o of [
        "auto",
        "contain",
        "none"
    ])e(`overscroll-${o}`, [
        [
            "overscroll-behavior",
            o
        ]
    ]), e(`overscroll-x-${o}`, [
        [
            "overscroll-behavior-x",
            o
        ]
    ]), e(`overscroll-y-${o}`, [
        [
            "overscroll-behavior-y",
            o
        ]
    ]);
    e("scroll-auto", [
        [
            "scroll-behavior",
            "auto"
        ]
    ]), e("scroll-smooth", [
        [
            "scroll-behavior",
            "smooth"
        ]
    ]), e("truncate", [
        [
            "overflow",
            "hidden"
        ],
        [
            "text-overflow",
            "ellipsis"
        ],
        [
            "white-space",
            "nowrap"
        ]
    ]), e("text-ellipsis", [
        [
            "text-overflow",
            "ellipsis"
        ]
    ]), e("text-clip", [
        [
            "text-overflow",
            "clip"
        ]
    ]), e("hyphens-none", [
        [
            "-webkit-hyphens",
            "none"
        ],
        [
            "hyphens",
            "none"
        ]
    ]), e("hyphens-manual", [
        [
            "-webkit-hyphens",
            "manual"
        ],
        [
            "hyphens",
            "manual"
        ]
    ]), e("hyphens-auto", [
        [
            "-webkit-hyphens",
            "auto"
        ],
        [
            "hyphens",
            "auto"
        ]
    ]), e("whitespace-normal", [
        [
            "white-space",
            "normal"
        ]
    ]), e("whitespace-nowrap", [
        [
            "white-space",
            "nowrap"
        ]
    ]), e("whitespace-pre", [
        [
            "white-space",
            "pre"
        ]
    ]), e("whitespace-pre-line", [
        [
            "white-space",
            "pre-line"
        ]
    ]), e("whitespace-pre-wrap", [
        [
            "white-space",
            "pre-wrap"
        ]
    ]), e("whitespace-break-spaces", [
        [
            "white-space",
            "break-spaces"
        ]
    ]), e("text-wrap", [
        [
            "text-wrap",
            "wrap"
        ]
    ]), e("text-nowrap", [
        [
            "text-wrap",
            "nowrap"
        ]
    ]), e("text-balance", [
        [
            "text-wrap",
            "balance"
        ]
    ]), e("text-pretty", [
        [
            "text-wrap",
            "pretty"
        ]
    ]), e("break-normal", [
        [
            "overflow-wrap",
            "normal"
        ],
        [
            "word-break",
            "normal"
        ]
    ]), e("break-words", [
        [
            "overflow-wrap",
            "break-word"
        ]
    ]), e("break-all", [
        [
            "word-break",
            "break-all"
        ]
    ]), e("break-keep", [
        [
            "word-break",
            "keep-all"
        ]
    ]), e("wrap-anywhere", [
        [
            "overflow-wrap",
            "anywhere"
        ]
    ]), e("wrap-break-word", [
        [
            "overflow-wrap",
            "break-word"
        ]
    ]), e("wrap-normal", [
        [
            "overflow-wrap",
            "normal"
        ]
    ]);
    for (let [o, p] of [
        [
            "rounded",
            [
                "border-radius"
            ]
        ],
        [
            "rounded-s",
            [
                "border-start-start-radius",
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-e",
            [
                "border-start-end-radius",
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-t",
            [
                "border-top-left-radius",
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-r",
            [
                "border-top-right-radius",
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-b",
            [
                "border-bottom-right-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-l",
            [
                "border-top-left-radius",
                "border-bottom-left-radius"
            ]
        ],
        [
            "rounded-ss",
            [
                "border-start-start-radius"
            ]
        ],
        [
            "rounded-se",
            [
                "border-start-end-radius"
            ]
        ],
        [
            "rounded-ee",
            [
                "border-end-end-radius"
            ]
        ],
        [
            "rounded-es",
            [
                "border-end-start-radius"
            ]
        ],
        [
            "rounded-tl",
            [
                "border-top-left-radius"
            ]
        ],
        [
            "rounded-tr",
            [
                "border-top-right-radius"
            ]
        ],
        [
            "rounded-br",
            [
                "border-bottom-right-radius"
            ]
        ],
        [
            "rounded-bl",
            [
                "border-bottom-left-radius"
            ]
        ]
    ])e(`${o}-none`, p.map((h)=>[
            h,
            "0"
        ])), e(`${o}-full`, p.map((h)=>[
            h,
            "calc(infinity * 1px)"
        ])), n(o, {
        themeKeys: [
            "--radius"
        ],
        handle: (h)=>p.map((A)=>l(A, h))
    });
    e("border-solid", [
        [
            "--tw-border-style",
            "solid"
        ],
        [
            "border-style",
            "solid"
        ]
    ]), e("border-dashed", [
        [
            "--tw-border-style",
            "dashed"
        ],
        [
            "border-style",
            "dashed"
        ]
    ]), e("border-dotted", [
        [
            "--tw-border-style",
            "dotted"
        ],
        [
            "border-style",
            "dotted"
        ]
    ]), e("border-double", [
        [
            "--tw-border-style",
            "double"
        ],
        [
            "border-style",
            "double"
        ]
    ]), e("border-hidden", [
        [
            "--tw-border-style",
            "hidden"
        ],
        [
            "border-style",
            "hidden"
        ]
    ]), e("border-none", [
        [
            "--tw-border-style",
            "none"
        ],
        [
            "border-style",
            "none"
        ]
    ]);
    {
        let p = function(h, A) {
            t.functional(h, (y)=>{
                if (!y.value) {
                    if (y.modifier) return;
                    let C = r.get([
                        "--default-border-width"
                    ]) ?? "1px", O = A.width(C);
                    return O ? [
                        o(),
                        ...O
                    ] : void 0;
                }
                if (y.value.kind === "arbitrary") {
                    let C = y.value.value;
                    switch(y.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(C, [
                        "color",
                        "line-width",
                        "length"
                    ])){
                        case "line-width":
                        case "length":
                            {
                                if (y.modifier) return;
                                let V = A.width(C);
                                return V ? [
                                    o(),
                                    ...V
                                ] : void 0;
                            }
                        default:
                            return C = X(C, y.modifier, r), C === null ? void 0 : A.color(C);
                    }
                }
                {
                    let C = te(y, r, [
                        "--border-color",
                        "--color"
                    ]);
                    if (C) return A.color(C);
                }
                {
                    if (y.modifier) return;
                    let C = r.resolve(y.value.value, [
                        "--border-width"
                    ]);
                    if (C) {
                        let O = A.width(C);
                        return O ? [
                            o(),
                            ...O
                        ] : void 0;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y.value.value)) {
                        let O = A.width(`${y.value.value}px`);
                        return O ? [
                            o(),
                            ...O
                        ] : void 0;
                    }
                }
            }), i(h, ()=>[
                    {
                        values: [
                            "current",
                            "inherit",
                            "transparent"
                        ],
                        valueThemeKeys: [
                            "--border-color",
                            "--color"
                        ],
                        modifiers: Array.from({
                            length: 21
                        }, (y, C)=>`${C * 5}`),
                        hasDefaultValue: !0
                    },
                    {
                        values: [
                            "0",
                            "2",
                            "4",
                            "8"
                        ],
                        valueThemeKeys: [
                            "--border-width"
                        ]
                    }
                ]);
        };
        var K = p;
        let o = ()=>L([
                $("--tw-border-style", "solid")
            ]);
        p("border", {
            width: (h)=>[
                    l("border-style", "var(--tw-border-style)"),
                    l("border-width", h)
                ],
            color: (h)=>[
                    l("border-color", h)
                ]
        }), p("border-x", {
            width: (h)=>[
                    l("border-inline-style", "var(--tw-border-style)"),
                    l("border-inline-width", h)
                ],
            color: (h)=>[
                    l("border-inline-color", h)
                ]
        }), p("border-y", {
            width: (h)=>[
                    l("border-block-style", "var(--tw-border-style)"),
                    l("border-block-width", h)
                ],
            color: (h)=>[
                    l("border-block-color", h)
                ]
        }), p("border-s", {
            width: (h)=>[
                    l("border-inline-start-style", "var(--tw-border-style)"),
                    l("border-inline-start-width", h)
                ],
            color: (h)=>[
                    l("border-inline-start-color", h)
                ]
        }), p("border-e", {
            width: (h)=>[
                    l("border-inline-end-style", "var(--tw-border-style)"),
                    l("border-inline-end-width", h)
                ],
            color: (h)=>[
                    l("border-inline-end-color", h)
                ]
        }), p("border-t", {
            width: (h)=>[
                    l("border-top-style", "var(--tw-border-style)"),
                    l("border-top-width", h)
                ],
            color: (h)=>[
                    l("border-top-color", h)
                ]
        }), p("border-r", {
            width: (h)=>[
                    l("border-right-style", "var(--tw-border-style)"),
                    l("border-right-width", h)
                ],
            color: (h)=>[
                    l("border-right-color", h)
                ]
        }), p("border-b", {
            width: (h)=>[
                    l("border-bottom-style", "var(--tw-border-style)"),
                    l("border-bottom-width", h)
                ],
            color: (h)=>[
                    l("border-bottom-color", h)
                ]
        }), p("border-l", {
            width: (h)=>[
                    l("border-left-style", "var(--tw-border-style)"),
                    l("border-left-width", h)
                ],
            color: (h)=>[
                    l("border-left-color", h)
                ]
        }), n("divide-x", {
            defaultValue: r.get([
                "--default-border-width"
            ]) ?? "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}px` : null,
            handle: (h)=>[
                    L([
                        $("--tw-divide-x-reverse", "0")
                    ]),
                    M(":where(& > :not(:last-child))", [
                        l("--tw-sort", "divide-x-width"),
                        o(),
                        l("--tw-divide-x-reverse", "0"),
                        l("border-inline-style", "var(--tw-border-style)"),
                        l("border-inline-start-width", `calc(${h} * var(--tw-divide-x-reverse))`),
                        l("border-inline-end-width", `calc(${h} * calc(1 - var(--tw-divide-x-reverse)))`)
                    ])
                ]
        }), n("divide-y", {
            defaultValue: r.get([
                "--default-border-width"
            ]) ?? "1px",
            themeKeys: [
                "--divide-width",
                "--border-width"
            ],
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}px` : null,
            handle: (h)=>[
                    L([
                        $("--tw-divide-y-reverse", "0")
                    ]),
                    M(":where(& > :not(:last-child))", [
                        l("--tw-sort", "divide-y-width"),
                        o(),
                        l("--tw-divide-y-reverse", "0"),
                        l("border-bottom-style", "var(--tw-border-style)"),
                        l("border-top-style", "var(--tw-border-style)"),
                        l("border-top-width", `calc(${h} * var(--tw-divide-y-reverse))`),
                        l("border-bottom-width", `calc(${h} * calc(1 - var(--tw-divide-y-reverse)))`)
                    ])
                ]
        }), i("divide-x", ()=>[
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("divide-y", ()=>[
                {
                    values: [
                        "0",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--divide-width",
                        "--border-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), e("divide-x-reverse", [
            ()=>L([
                    $("--tw-divide-x-reverse", "0")
                ]),
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-divide-x-reverse", "1")
                ])
        ]), e("divide-y-reverse", [
            ()=>L([
                    $("--tw-divide-y-reverse", "0")
                ]),
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-divide-y-reverse", "1")
                ])
        ]);
        for (let h of [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ])e(`divide-${h}`, [
            ()=>M(":where(& > :not(:last-child))", [
                    l("--tw-sort", "divide-style"),
                    l("--tw-border-style", h),
                    l("border-style", h)
                ])
        ]);
    }
    e("bg-auto", [
        [
            "background-size",
            "auto"
        ]
    ]), e("bg-cover", [
        [
            "background-size",
            "cover"
        ]
    ]), e("bg-contain", [
        [
            "background-size",
            "contain"
        ]
    ]), n("bg-size", {
        handle (o) {
            if (o) return [
                l("background-size", o)
            ];
        }
    }), e("bg-fixed", [
        [
            "background-attachment",
            "fixed"
        ]
    ]), e("bg-local", [
        [
            "background-attachment",
            "local"
        ]
    ]), e("bg-scroll", [
        [
            "background-attachment",
            "scroll"
        ]
    ]), e("bg-top", [
        [
            "background-position",
            "top"
        ]
    ]), e("bg-top-left", [
        [
            "background-position",
            "left top"
        ]
    ]), e("bg-top-right", [
        [
            "background-position",
            "right top"
        ]
    ]), e("bg-bottom", [
        [
            "background-position",
            "bottom"
        ]
    ]), e("bg-bottom-left", [
        [
            "background-position",
            "left bottom"
        ]
    ]), e("bg-bottom-right", [
        [
            "background-position",
            "right bottom"
        ]
    ]), e("bg-left", [
        [
            "background-position",
            "left"
        ]
    ]), e("bg-right", [
        [
            "background-position",
            "right"
        ]
    ]), e("bg-center", [
        [
            "background-position",
            "center"
        ]
    ]), n("bg-position", {
        handle (o) {
            if (o) return [
                l("background-position", o)
            ];
        }
    }), e("bg-repeat", [
        [
            "background-repeat",
            "repeat"
        ]
    ]), e("bg-no-repeat", [
        [
            "background-repeat",
            "no-repeat"
        ]
    ]), e("bg-repeat-x", [
        [
            "background-repeat",
            "repeat-x"
        ]
    ]), e("bg-repeat-y", [
        [
            "background-repeat",
            "repeat-y"
        ]
    ]), e("bg-repeat-round", [
        [
            "background-repeat",
            "round"
        ]
    ]), e("bg-repeat-space", [
        [
            "background-repeat",
            "space"
        ]
    ]), e("bg-none", [
        [
            "background-image",
            "none"
        ]
    ]);
    {
        let h = function(C) {
            let O = "in oklab";
            if (C?.kind === "named") switch(C.value){
                case "longer":
                case "shorter":
                case "increasing":
                case "decreasing":
                    O = `in oklch ${C.value} hue`;
                    break;
                default:
                    O = `in ${C.value}`;
            }
            else C?.kind === "arbitrary" && (O = C.value);
            return O;
        }, A = function({ negative: C }) {
            return (O)=>{
                if (!O.value) return;
                if (O.value.kind === "arbitrary") {
                    if (O.modifier) return;
                    let j = O.value.value;
                    switch(O.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(j, [
                        "angle"
                    ])){
                        case "angle":
                            return j = C ? `calc(${j} * -1)` : `${j}`, [
                                l("--tw-gradient-position", j),
                                l("background-image", `linear-gradient(var(--tw-gradient-stops,${j}))`)
                            ];
                        default:
                            return C ? void 0 : [
                                l("--tw-gradient-position", j),
                                l("background-image", `linear-gradient(var(--tw-gradient-stops,${j}))`)
                            ];
                    }
                }
                let V = O.value.value;
                if (!C && p.has(V)) V = p.get(V);
                else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V)) V = C ? `calc(${V}deg * -1)` : `${V}deg`;
                else return;
                let T = h(O.modifier);
                return [
                    l("--tw-gradient-position", `${V}`),
                    H("@supports (background-image: linear-gradient(in lab, red, red))", [
                        l("--tw-gradient-position", `${V} ${T}`)
                    ]),
                    l("background-image", "linear-gradient(var(--tw-gradient-stops))")
                ];
            };
        }, y = function({ negative: C }) {
            return (O)=>{
                if (O.value?.kind === "arbitrary") {
                    if (O.modifier) return;
                    let j = O.value.value;
                    return [
                        l("--tw-gradient-position", j),
                        l("background-image", `conic-gradient(var(--tw-gradient-stops,${j}))`)
                    ];
                }
                let V = h(O.modifier);
                if (!O.value) return [
                    l("--tw-gradient-position", V),
                    l("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
                let T = O.value.value;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(T)) return T = C ? `calc(${T}deg * -1)` : `${T}deg`, [
                    l("--tw-gradient-position", `from ${T} ${V}`),
                    l("background-image", "conic-gradient(var(--tw-gradient-stops))")
                ];
            };
        };
        var G = h, I = A, W = y;
        let o = [
            "oklab",
            "oklch",
            "srgb",
            "hsl",
            "longer",
            "shorter",
            "increasing",
            "decreasing"
        ], p = new Map([
            [
                "to-t",
                "to top"
            ],
            [
                "to-tr",
                "to top right"
            ],
            [
                "to-r",
                "to right"
            ],
            [
                "to-br",
                "to bottom right"
            ],
            [
                "to-b",
                "to bottom"
            ],
            [
                "to-bl",
                "to bottom left"
            ],
            [
                "to-l",
                "to left"
            ],
            [
                "to-tl",
                "to top left"
            ]
        ]);
        t.functional("-bg-linear", A({
            negative: !0
        })), t.functional("bg-linear", A({
            negative: !1
        })), i("bg-linear", ()=>[
                {
                    values: [
                        ...p.keys()
                    ],
                    modifiers: o
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: o
                }
            ]), t.functional("-bg-conic", y({
            negative: !0
        })), t.functional("bg-conic", y({
            negative: !1
        })), i("bg-conic", ()=>[
                {
                    hasDefaultValue: !0,
                    modifiers: o
                },
                {
                    values: [
                        "0",
                        "30",
                        "60",
                        "90",
                        "120",
                        "150",
                        "180",
                        "210",
                        "240",
                        "270",
                        "300",
                        "330"
                    ],
                    supportsNegative: !0,
                    modifiers: o
                }
            ]), t.functional("bg-radial", (C)=>{
            if (!C.value) {
                let O = h(C.modifier);
                return [
                    l("--tw-gradient-position", O),
                    l("background-image", "radial-gradient(var(--tw-gradient-stops))")
                ];
            }
            if (C.value.kind === "arbitrary") {
                if (C.modifier) return;
                let O = C.value.value;
                return [
                    l("--tw-gradient-position", O),
                    l("background-image", `radial-gradient(var(--tw-gradient-stops,${O}))`)
                ];
            }
        }), i("bg-radial", ()=>[
                {
                    hasDefaultValue: !0,
                    modifiers: o
                }
            ]);
    }
    t.functional("bg", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
                    "image",
                    "color",
                    "percentage",
                    "position",
                    "bg-size",
                    "length",
                    "url"
                ])){
                    case "percentage":
                    case "position":
                        return o.modifier ? void 0 : [
                            l("background-position", p)
                        ];
                    case "bg-size":
                    case "length":
                    case "size":
                        return o.modifier ? void 0 : [
                            l("background-size", p)
                        ];
                    case "image":
                    case "url":
                        return o.modifier ? void 0 : [
                            l("background-image", p)
                        ];
                    default:
                        return p = X(p, o.modifier, r), p === null ? void 0 : [
                            l("background-color", p)
                        ];
                }
            }
            {
                let p = te(o, r, [
                    "--background-color",
                    "--color"
                ]);
                if (p) return [
                    l("background-color", p)
                ];
            }
            {
                if (o.modifier) return;
                let p = r.resolve(o.value.value, [
                    "--background-image"
                ]);
                if (p) return [
                    l("background-image", p)
                ];
            }
        }
    }), i("bg", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--background-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [],
                valueThemeKeys: [
                    "--background-image"
                ]
            }
        ]);
    let v = ()=>L([
            $("--tw-gradient-position"),
            $("--tw-gradient-from", "#0000", "<color>"),
            $("--tw-gradient-via", "#0000", "<color>"),
            $("--tw-gradient-to", "#0000", "<color>"),
            $("--tw-gradient-stops"),
            $("--tw-gradient-via-stops"),
            $("--tw-gradient-from-position", "0%", "<length-percentage>"),
            $("--tw-gradient-via-position", "50%", "<length-percentage>"),
            $("--tw-gradient-to-position", "100%", "<length-percentage>")
        ]);
    function x(o, p) {
        t.functional(o, (h)=>{
            if (h.value) {
                if (h.value.kind === "arbitrary") {
                    let A = h.value.value;
                    switch(h.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(A, [
                        "color",
                        "length",
                        "percentage"
                    ])){
                        case "length":
                        case "percentage":
                            return h.modifier ? void 0 : p.position(A);
                        default:
                            return A = X(A, h.modifier, r), A === null ? void 0 : p.color(A);
                    }
                }
                {
                    let A = te(h, r, [
                        "--background-color",
                        "--color"
                    ]);
                    if (A) return p.color(A);
                }
                {
                    if (h.modifier) return;
                    let A = r.resolve(h.value.value, [
                        "--gradient-color-stop-positions"
                    ]);
                    if (A) return p.position(A);
                    if (h.value.value[h.value.value.length - 1] === "%" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h.value.value.slice(0, -1))) return p.position(h.value.value);
                }
            }
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                },
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ]);
    }
    x("from", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-from"),
                l("--tw-gradient-from", o),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-from-position", o)
            ]
    }), e("via-none", [
        [
            "--tw-gradient-via-stops",
            "initial"
        ]
    ]), x("via", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-via"),
                l("--tw-gradient-via", o),
                l("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops)")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-via-position", o)
            ]
    }), x("to", {
        color: (o)=>[
                v(),
                l("--tw-sort", "--tw-gradient-to"),
                l("--tw-gradient-to", o),
                l("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")
            ],
        position: (o)=>[
                v(),
                l("--tw-gradient-to-position", o)
            ]
    }), e("mask-none", [
        [
            "mask-image",
            "none"
        ]
    ]), t.functional("mask", (o)=>{
        if (!o.value || o.modifier || o.value.kind !== "arbitrary") return;
        let p = o.value.value;
        switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
            "image",
            "percentage",
            "position",
            "bg-size",
            "length",
            "url"
        ])){
            case "percentage":
            case "position":
                return o.modifier ? void 0 : [
                    l("mask-position", p)
                ];
            case "bg-size":
            case "length":
            case "size":
                return [
                    l("mask-size", p)
                ];
            case "image":
            case "url":
            default:
                return [
                    l("mask-image", p)
                ];
        }
    }), e("mask-add", [
        [
            "mask-composite",
            "add"
        ]
    ]), e("mask-subtract", [
        [
            "mask-composite",
            "subtract"
        ]
    ]), e("mask-intersect", [
        [
            "mask-composite",
            "intersect"
        ]
    ]), e("mask-exclude", [
        [
            "mask-composite",
            "exclude"
        ]
    ]), e("mask-alpha", [
        [
            "mask-mode",
            "alpha"
        ]
    ]), e("mask-luminance", [
        [
            "mask-mode",
            "luminance"
        ]
    ]), e("mask-match", [
        [
            "mask-mode",
            "match-source"
        ]
    ]), e("mask-type-alpha", [
        [
            "mask-type",
            "alpha"
        ]
    ]), e("mask-type-luminance", [
        [
            "mask-type",
            "luminance"
        ]
    ]), e("mask-auto", [
        [
            "mask-size",
            "auto"
        ]
    ]), e("mask-cover", [
        [
            "mask-size",
            "cover"
        ]
    ]), e("mask-contain", [
        [
            "mask-size",
            "contain"
        ]
    ]), n("mask-size", {
        handle (o) {
            if (o) return [
                l("mask-size", o)
            ];
        }
    }), e("mask-top", [
        [
            "mask-position",
            "top"
        ]
    ]), e("mask-top-left", [
        [
            "mask-position",
            "left top"
        ]
    ]), e("mask-top-right", [
        [
            "mask-position",
            "right top"
        ]
    ]), e("mask-bottom", [
        [
            "mask-position",
            "bottom"
        ]
    ]), e("mask-bottom-left", [
        [
            "mask-position",
            "left bottom"
        ]
    ]), e("mask-bottom-right", [
        [
            "mask-position",
            "right bottom"
        ]
    ]), e("mask-left", [
        [
            "mask-position",
            "left"
        ]
    ]), e("mask-right", [
        [
            "mask-position",
            "right"
        ]
    ]), e("mask-center", [
        [
            "mask-position",
            "center"
        ]
    ]), n("mask-position", {
        handle (o) {
            if (o) return [
                l("mask-position", o)
            ];
        }
    }), e("mask-repeat", [
        [
            "mask-repeat",
            "repeat"
        ]
    ]), e("mask-no-repeat", [
        [
            "mask-repeat",
            "no-repeat"
        ]
    ]), e("mask-repeat-x", [
        [
            "mask-repeat",
            "repeat-x"
        ]
    ]), e("mask-repeat-y", [
        [
            "mask-repeat",
            "repeat-y"
        ]
    ]), e("mask-repeat-round", [
        [
            "mask-repeat",
            "round"
        ]
    ]), e("mask-repeat-space", [
        [
            "mask-repeat",
            "space"
        ]
    ]), e("mask-clip-border", [
        [
            "mask-clip",
            "border-box"
        ]
    ]), e("mask-clip-padding", [
        [
            "mask-clip",
            "padding-box"
        ]
    ]), e("mask-clip-content", [
        [
            "mask-clip",
            "content-box"
        ]
    ]), e("mask-clip-fill", [
        [
            "mask-clip",
            "fill-box"
        ]
    ]), e("mask-clip-stroke", [
        [
            "mask-clip",
            "stroke-box"
        ]
    ]), e("mask-clip-view", [
        [
            "mask-clip",
            "view-box"
        ]
    ]), e("mask-no-clip", [
        [
            "mask-clip",
            "no-clip"
        ]
    ]), e("mask-origin-border", [
        [
            "mask-origin",
            "border-box"
        ]
    ]), e("mask-origin-padding", [
        [
            "mask-origin",
            "padding-box"
        ]
    ]), e("mask-origin-content", [
        [
            "mask-origin",
            "content-box"
        ]
    ]), e("mask-origin-fill", [
        [
            "mask-origin",
            "fill-box"
        ]
    ]), e("mask-origin-stroke", [
        [
            "mask-origin",
            "stroke-box"
        ]
    ]), e("mask-origin-view", [
        [
            "mask-origin",
            "view-box"
        ]
    ]);
    let k1 = ()=>L([
            $("--tw-mask-linear", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-radial", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-conic", "linear-gradient(#fff, #fff)")
        ]);
    function N(o, p) {
        t.functional(o, (h)=>{
            if (h.value) {
                if (h.value.kind === "arbitrary") {
                    let A = h.value.value;
                    switch(h.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(A, [
                        "length",
                        "percentage",
                        "color"
                    ])){
                        case "color":
                            return A = X(A, h.modifier, r), A === null ? void 0 : p.color(A);
                        case "percentage":
                            return h.modifier || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(A.slice(0, -1)) ? void 0 : p.position(A);
                        default:
                            return h.modifier ? void 0 : p.position(A);
                    }
                }
                {
                    let A = te(h, r, [
                        "--background-color",
                        "--color"
                    ]);
                    if (A) return p.color(A);
                }
                {
                    if (h.modifier) return;
                    let A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(h.value.value, [
                        "number",
                        "percentage"
                    ]);
                    if (!A) return;
                    switch(A){
                        case "number":
                            {
                                let y = r.resolve(null, [
                                    "--spacing"
                                ]);
                                return !y || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(h.value.value) ? void 0 : p.position(`calc(${y} * ${h.value.value})`);
                            }
                        case "percentage":
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h.value.value.slice(0, -1)) ? p.position(h.value.value) : void 0;
                        default:
                            return;
                    }
                }
            }
        }), i(o, ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                },
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`),
                    valueThemeKeys: [
                        "--gradient-color-stop-positions"
                    ]
                }
            ]), i(o, ()=>[
                {
                    values: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}%`)
                },
                {
                    values: r.get([
                        "--spacing"
                    ]) ? Ze : []
                },
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--background-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (h, A)=>`${A * 5}`)
                }
            ]);
    }
    let b = ()=>L([
            $("--tw-mask-left", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-right", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-bottom", "linear-gradient(#fff, #fff)"),
            $("--tw-mask-top", "linear-gradient(#fff, #fff)")
        ]);
    function S(o, p, h) {
        N(o, {
            color (A) {
                let y = [
                    k1(),
                    b(),
                    l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    l("mask-composite", "intersect"),
                    l("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for (let C of [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ])h[C] && (y.push(l(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), y.push(L([
                    $(`--tw-mask-${C}-from-position`, "0%"),
                    $(`--tw-mask-${C}-to-position`, "100%"),
                    $(`--tw-mask-${C}-from-color`, "black"),
                    $(`--tw-mask-${C}-to-color`, "transparent")
                ])), y.push(l(`--tw-mask-${C}-${p}-color`, A)));
                return y;
            },
            position (A) {
                let y = [
                    k1(),
                    b(),
                    l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                    l("mask-composite", "intersect"),
                    l("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")
                ];
                for (let C of [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ])h[C] && (y.push(l(`--tw-mask-${C}`, `linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)), y.push(L([
                    $(`--tw-mask-${C}-from-position`, "0%"),
                    $(`--tw-mask-${C}-to-position`, "100%"),
                    $(`--tw-mask-${C}-from-color`, "black"),
                    $(`--tw-mask-${C}-to-color`, "transparent")
                ])), y.push(l(`--tw-mask-${C}-${p}-position`, A)));
                return y;
            }
        });
    }
    S("mask-x-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), S("mask-x-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !0
    }), S("mask-y-from", "from", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-y-to", "to", {
        top: !0,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-t-from", "from", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), S("mask-t-to", "to", {
        top: !0,
        right: !1,
        bottom: !1,
        left: !1
    }), S("mask-r-from", "from", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), S("mask-r-to", "to", {
        top: !1,
        right: !0,
        bottom: !1,
        left: !1
    }), S("mask-b-from", "from", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-b-to", "to", {
        top: !1,
        right: !1,
        bottom: !0,
        left: !1
    }), S("mask-l-from", "from", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    }), S("mask-l-to", "to", {
        top: !1,
        right: !1,
        bottom: !1,
        left: !0
    });
    let P = ()=>L([
            $("--tw-mask-linear-position", "0deg"),
            $("--tw-mask-linear-from-position", "0%"),
            $("--tw-mask-linear-to-position", "100%"),
            $("--tw-mask-linear-from-color", "black"),
            $("--tw-mask-linear-to-color", "transparent")
        ]);
    n("mask-linear", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue (o) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value) ? `calc(1deg * ${o.value})` : null;
        },
        handleNegativeBareValue (o) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value) ? `calc(1deg * -${o.value})` : null;
        },
        handle: (o)=>[
                k1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"),
                l("--tw-mask-linear-position", o)
            ]
    }), i("mask-linear", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ]), N("mask-linear-from", {
        color: (o)=>[
                k1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-from-color", o)
            ],
        position: (o)=>[
                k1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-from-position", o)
            ]
    }), N("mask-linear-to", {
        color: (o)=>[
                k1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-to-color", o)
            ],
        position: (o)=>[
                k1(),
                P(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),
                l("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"),
                l("--tw-mask-linear-to-position", o)
            ]
    });
    let U = ()=>L([
            $("--tw-mask-radial-from-position", "0%"),
            $("--tw-mask-radial-to-position", "100%"),
            $("--tw-mask-radial-from-color", "black"),
            $("--tw-mask-radial-to-color", "transparent"),
            $("--tw-mask-radial-shape", "ellipse"),
            $("--tw-mask-radial-size", "farthest-corner"),
            $("--tw-mask-radial-position", "center")
        ]);
    e("mask-circle", [
        [
            "--tw-mask-radial-shape",
            "circle"
        ]
    ]), e("mask-ellipse", [
        [
            "--tw-mask-radial-shape",
            "ellipse"
        ]
    ]), e("mask-radial-closest-side", [
        [
            "--tw-mask-radial-size",
            "closest-side"
        ]
    ]), e("mask-radial-farthest-side", [
        [
            "--tw-mask-radial-size",
            "farthest-side"
        ]
    ]), e("mask-radial-closest-corner", [
        [
            "--tw-mask-radial-size",
            "closest-corner"
        ]
    ]), e("mask-radial-farthest-corner", [
        [
            "--tw-mask-radial-size",
            "farthest-corner"
        ]
    ]), e("mask-radial-at-top", [
        [
            "--tw-mask-radial-position",
            "top"
        ]
    ]), e("mask-radial-at-top-left", [
        [
            "--tw-mask-radial-position",
            "top left"
        ]
    ]), e("mask-radial-at-top-right", [
        [
            "--tw-mask-radial-position",
            "top right"
        ]
    ]), e("mask-radial-at-bottom", [
        [
            "--tw-mask-radial-position",
            "bottom"
        ]
    ]), e("mask-radial-at-bottom-left", [
        [
            "--tw-mask-radial-position",
            "bottom left"
        ]
    ]), e("mask-radial-at-bottom-right", [
        [
            "--tw-mask-radial-position",
            "bottom right"
        ]
    ]), e("mask-radial-at-left", [
        [
            "--tw-mask-radial-position",
            "left"
        ]
    ]), e("mask-radial-at-right", [
        [
            "--tw-mask-radial-position",
            "right"
        ]
    ]), e("mask-radial-at-center", [
        [
            "--tw-mask-radial-position",
            "center"
        ]
    ]), n("mask-radial-at", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: (o)=>[
                l("--tw-mask-radial-position", o)
            ]
    }), n("mask-radial", {
        defaultValue: null,
        supportsNegative: !1,
        supportsFractions: !1,
        handle: (o)=>[
                k1(),
                U(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"),
                l("--tw-mask-radial-size", o)
            ]
    }), N("mask-radial-from", {
        color: (o)=>[
                k1(),
                U(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-from-color", o)
            ],
        position: (o)=>[
                k1(),
                U(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-from-position", o)
            ]
    }), N("mask-radial-to", {
        color: (o)=>[
                k1(),
                U(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-to-color", o)
            ],
        position: (o)=>[
                k1(),
                U(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),
                l("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"),
                l("--tw-mask-radial-to-position", o)
            ]
    });
    let R = ()=>L([
            $("--tw-mask-conic-position", "0deg"),
            $("--tw-mask-conic-from-position", "0%"),
            $("--tw-mask-conic-to-position", "100%"),
            $("--tw-mask-conic-from-color", "black"),
            $("--tw-mask-conic-to-color", "transparent")
        ]);
    n("mask-conic", {
        defaultValue: null,
        supportsNegative: !0,
        supportsFractions: !1,
        handleBareValue (o) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value) ? `calc(1deg * ${o.value})` : null;
        },
        handleNegativeBareValue (o) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value) ? `calc(1deg * -${o.value})` : null;
        },
        handle: (o)=>[
                k1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"),
                l("--tw-mask-conic-position", o)
            ]
    }), i("mask-conic", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "6",
                    "12",
                    "45",
                    "90",
                    "180"
                ]
            }
        ]), N("mask-conic-from", {
        color: (o)=>[
                k1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-from-color", o)
            ],
        position: (o)=>[
                k1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-from-position", o)
            ]
    }), N("mask-conic-to", {
        color: (o)=>[
                k1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-to-color", o)
            ],
        position: (o)=>[
                k1(),
                R(),
                l("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),
                l("mask-composite", "intersect"),
                l("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),
                l("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"),
                l("--tw-mask-conic-to-position", o)
            ]
    }), e("box-decoration-slice", [
        [
            "-webkit-box-decoration-break",
            "slice"
        ],
        [
            "box-decoration-break",
            "slice"
        ]
    ]), e("box-decoration-clone", [
        [
            "-webkit-box-decoration-break",
            "clone"
        ],
        [
            "box-decoration-break",
            "clone"
        ]
    ]), e("bg-clip-text", [
        [
            "background-clip",
            "text"
        ]
    ]), e("bg-clip-border", [
        [
            "background-clip",
            "border-box"
        ]
    ]), e("bg-clip-padding", [
        [
            "background-clip",
            "padding-box"
        ]
    ]), e("bg-clip-content", [
        [
            "background-clip",
            "content-box"
        ]
    ]), e("bg-origin-border", [
        [
            "background-origin",
            "border-box"
        ]
    ]), e("bg-origin-padding", [
        [
            "background-origin",
            "padding-box"
        ]
    ]), e("bg-origin-content", [
        [
            "background-origin",
            "content-box"
        ]
    ]);
    for (let o of [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity"
    ])e(`bg-blend-${o}`, [
        [
            "background-blend-mode",
            o
        ]
    ]), e(`mix-blend-${o}`, [
        [
            "mix-blend-mode",
            o
        ]
    ]);
    e("mix-blend-plus-darker", [
        [
            "mix-blend-mode",
            "plus-darker"
        ]
    ]), e("mix-blend-plus-lighter", [
        [
            "mix-blend-mode",
            "plus-lighter"
        ]
    ]), e("fill-none", [
        [
            "fill",
            "none"
        ]
    ]), t.functional("fill", (o)=>{
        if (!o.value) return;
        if (o.value.kind === "arbitrary") {
            let h = X(o.value.value, o.modifier, r);
            return h === null ? void 0 : [
                l("fill", h)
            ];
        }
        let p = te(o, r, [
            "--fill",
            "--color"
        ]);
        if (p) return [
            l("fill", p)
        ];
    }), i("fill", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--fill",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            }
        ]), e("stroke-none", [
        [
            "stroke",
            "none"
        ]
    ]), t.functional("stroke", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
                    "color",
                    "number",
                    "length",
                    "percentage"
                ])){
                    case "number":
                    case "length":
                    case "percentage":
                        return o.modifier ? void 0 : [
                            l("stroke-width", p)
                        ];
                    default:
                        return p = X(o.value.value, o.modifier, r), p === null ? void 0 : [
                            l("stroke", p)
                        ];
                }
            }
            {
                let p = te(o, r, [
                    "--stroke",
                    "--color"
                ]);
                if (p) return [
                    l("stroke", p)
                ];
            }
            {
                let p = r.resolve(o.value.value, [
                    "--stroke-width"
                ]);
                if (p) return [
                    l("stroke-width", p)
                ];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value.value)) return [
                    l("stroke-width", o.value.value)
                ];
            }
        }
    }), i("stroke", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--stroke",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                valueThemeKeys: [
                    "--stroke-width"
                ]
            }
        ]), e("object-contain", [
        [
            "object-fit",
            "contain"
        ]
    ]), e("object-cover", [
        [
            "object-fit",
            "cover"
        ]
    ]), e("object-fill", [
        [
            "object-fit",
            "fill"
        ]
    ]), e("object-none", [
        [
            "object-fit",
            "none"
        ]
    ]), e("object-scale-down", [
        [
            "object-fit",
            "scale-down"
        ]
    ]), e("object-top", [
        [
            "object-position",
            "top"
        ]
    ]), e("object-top-left", [
        [
            "object-position",
            "left top"
        ]
    ]), e("object-top-right", [
        [
            "object-position",
            "right top"
        ]
    ]), e("object-bottom", [
        [
            "object-position",
            "bottom"
        ]
    ]), e("object-bottom-left", [
        [
            "object-position",
            "left bottom"
        ]
    ]), e("object-bottom-right", [
        [
            "object-position",
            "right bottom"
        ]
    ]), e("object-left", [
        [
            "object-position",
            "left"
        ]
    ]), e("object-right", [
        [
            "object-position",
            "right"
        ]
    ]), e("object-center", [
        [
            "object-position",
            "center"
        ]
    ]), n("object", {
        themeKeys: [
            "--object-position"
        ],
        handle: (o)=>[
                l("object-position", o)
            ]
    });
    for (let [o, p] of [
        [
            "p",
            "padding"
        ],
        [
            "px",
            "padding-inline"
        ],
        [
            "py",
            "padding-block"
        ],
        [
            "ps",
            "padding-inline-start"
        ],
        [
            "pe",
            "padding-inline-end"
        ],
        [
            "pt",
            "padding-top"
        ],
        [
            "pr",
            "padding-right"
        ],
        [
            "pb",
            "padding-bottom"
        ],
        [
            "pl",
            "padding-left"
        ]
    ])a(o, [
        "--padding",
        "--spacing"
    ], (h)=>[
            l(p, h)
        ]);
    e("text-left", [
        [
            "text-align",
            "left"
        ]
    ]), e("text-center", [
        [
            "text-align",
            "center"
        ]
    ]), e("text-right", [
        [
            "text-align",
            "right"
        ]
    ]), e("text-justify", [
        [
            "text-align",
            "justify"
        ]
    ]), e("text-start", [
        [
            "text-align",
            "start"
        ]
    ]), e("text-end", [
        [
            "text-align",
            "end"
        ]
    ]), a("indent", [
        "--text-indent",
        "--spacing"
    ], (o)=>[
            l("text-indent", o)
        ], {
        supportsNegative: !0
    }), e("align-baseline", [
        [
            "vertical-align",
            "baseline"
        ]
    ]), e("align-top", [
        [
            "vertical-align",
            "top"
        ]
    ]), e("align-middle", [
        [
            "vertical-align",
            "middle"
        ]
    ]), e("align-bottom", [
        [
            "vertical-align",
            "bottom"
        ]
    ]), e("align-text-top", [
        [
            "vertical-align",
            "text-top"
        ]
    ]), e("align-text-bottom", [
        [
            "vertical-align",
            "text-bottom"
        ]
    ]), e("align-sub", [
        [
            "vertical-align",
            "sub"
        ]
    ]), e("align-super", [
        [
            "vertical-align",
            "super"
        ]
    ]), n("align", {
        themeKeys: [],
        handle: (o)=>[
                l("vertical-align", o)
            ]
    }), t.functional("font", (o)=>{
        if (!(!o.value || o.modifier)) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
                    "number",
                    "generic-name",
                    "family-name"
                ])){
                    case "generic-name":
                    case "family-name":
                        return [
                            l("font-family", p)
                        ];
                    default:
                        return [
                            L([
                                $("--tw-font-weight")
                            ]),
                            l("--tw-font-weight", p),
                            l("font-weight", p)
                        ];
                }
            }
            {
                let p = r.resolveWith(o.value.value, [
                    "--font"
                ], [
                    "--font-feature-settings",
                    "--font-variation-settings"
                ]);
                if (p) {
                    let [h, A = {}] = p;
                    return [
                        l("font-family", h),
                        l("font-feature-settings", A["--font-feature-settings"]),
                        l("font-variation-settings", A["--font-variation-settings"])
                    ];
                }
            }
            {
                let p = r.resolve(o.value.value, [
                    "--font-weight"
                ]);
                if (p) return [
                    L([
                        $("--tw-font-weight")
                    ]),
                    l("--tw-font-weight", p),
                    l("font-weight", p)
                ];
            }
        }
    }), i("font", ()=>[
            {
                values: [],
                valueThemeKeys: [
                    "--font"
                ]
            },
            {
                values: [],
                valueThemeKeys: [
                    "--font-weight"
                ]
            }
        ]), e("uppercase", [
        [
            "text-transform",
            "uppercase"
        ]
    ]), e("lowercase", [
        [
            "text-transform",
            "lowercase"
        ]
    ]), e("capitalize", [
        [
            "text-transform",
            "capitalize"
        ]
    ]), e("normal-case", [
        [
            "text-transform",
            "none"
        ]
    ]), e("italic", [
        [
            "font-style",
            "italic"
        ]
    ]), e("not-italic", [
        [
            "font-style",
            "normal"
        ]
    ]), e("underline", [
        [
            "text-decoration-line",
            "underline"
        ]
    ]), e("overline", [
        [
            "text-decoration-line",
            "overline"
        ]
    ]), e("line-through", [
        [
            "text-decoration-line",
            "line-through"
        ]
    ]), e("no-underline", [
        [
            "text-decoration-line",
            "none"
        ]
    ]), e("font-stretch-normal", [
        [
            "font-stretch",
            "normal"
        ]
    ]), e("font-stretch-ultra-condensed", [
        [
            "font-stretch",
            "ultra-condensed"
        ]
    ]), e("font-stretch-extra-condensed", [
        [
            "font-stretch",
            "extra-condensed"
        ]
    ]), e("font-stretch-condensed", [
        [
            "font-stretch",
            "condensed"
        ]
    ]), e("font-stretch-semi-condensed", [
        [
            "font-stretch",
            "semi-condensed"
        ]
    ]), e("font-stretch-semi-expanded", [
        [
            "font-stretch",
            "semi-expanded"
        ]
    ]), e("font-stretch-expanded", [
        [
            "font-stretch",
            "expanded"
        ]
    ]), e("font-stretch-extra-expanded", [
        [
            "font-stretch",
            "extra-expanded"
        ]
    ]), e("font-stretch-ultra-expanded", [
        [
            "font-stretch",
            "ultra-expanded"
        ]
    ]), n("font-stretch", {
        handleBareValue: ({ value: o })=>{
            if (!o.endsWith("%")) return null;
            let p = Number(o.slice(0, -1));
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p) || Number.isNaN(p) || p < 50 || p > 200 ? null : o;
        },
        handle: (o)=>[
                l("font-stretch", o)
            ]
    }), i("font-stretch", ()=>[
            {
                values: [
                    "50%",
                    "75%",
                    "90%",
                    "95%",
                    "100%",
                    "105%",
                    "110%",
                    "125%",
                    "150%",
                    "200%"
                ]
            }
        ]), s("placeholder", {
        themeKeys: [
            "--background-color",
            "--color"
        ],
        handle: (o)=>[
                M("&::placeholder", [
                    l("--tw-sort", "placeholder-color"),
                    l("color", o)
                ])
            ]
    }), e("decoration-solid", [
        [
            "text-decoration-style",
            "solid"
        ]
    ]), e("decoration-double", [
        [
            "text-decoration-style",
            "double"
        ]
    ]), e("decoration-dotted", [
        [
            "text-decoration-style",
            "dotted"
        ]
    ]), e("decoration-dashed", [
        [
            "text-decoration-style",
            "dashed"
        ]
    ]), e("decoration-wavy", [
        [
            "text-decoration-style",
            "wavy"
        ]
    ]), e("decoration-auto", [
        [
            "text-decoration-thickness",
            "auto"
        ]
    ]), e("decoration-from-font", [
        [
            "text-decoration-thickness",
            "from-font"
        ]
    ]), t.functional("decoration", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
                    "color",
                    "length",
                    "percentage"
                ])){
                    case "length":
                    case "percentage":
                        return o.modifier ? void 0 : [
                            l("text-decoration-thickness", p)
                        ];
                    default:
                        return p = X(p, o.modifier, r), p === null ? void 0 : [
                            l("text-decoration-color", p)
                        ];
                }
            }
            {
                let p = r.resolve(o.value.value, [
                    "--text-decoration-thickness"
                ]);
                if (p) return o.modifier ? void 0 : [
                    l("text-decoration-thickness", p)
                ];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.value.value)) return o.modifier ? void 0 : [
                    l("text-decoration-thickness", `${o.value.value}px`)
                ];
            }
            {
                let p = te(o, r, [
                    "--text-decoration-color",
                    "--color"
                ]);
                if (p) return [
                    l("text-decoration-color", p)
                ];
            }
        }
    }), i("decoration", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-decoration-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2"
                ],
                valueThemeKeys: [
                    "--text-decoration-thickness"
                ]
            }
        ]), e("animate-none", [
        [
            "animation",
            "none"
        ]
    ]), n("animate", {
        themeKeys: [
            "--animate"
        ],
        handle: (o)=>[
                l("animation", o)
            ]
    });
    {
        let o = [
            "var(--tw-blur,)",
            "var(--tw-brightness,)",
            "var(--tw-contrast,)",
            "var(--tw-grayscale,)",
            "var(--tw-hue-rotate,)",
            "var(--tw-invert,)",
            "var(--tw-saturate,)",
            "var(--tw-sepia,)",
            "var(--tw-drop-shadow,)"
        ].join(" "), p = [
            "var(--tw-backdrop-blur,)",
            "var(--tw-backdrop-brightness,)",
            "var(--tw-backdrop-contrast,)",
            "var(--tw-backdrop-grayscale,)",
            "var(--tw-backdrop-hue-rotate,)",
            "var(--tw-backdrop-invert,)",
            "var(--tw-backdrop-opacity,)",
            "var(--tw-backdrop-saturate,)",
            "var(--tw-backdrop-sepia,)"
        ].join(" "), h = ()=>L([
                $("--tw-blur"),
                $("--tw-brightness"),
                $("--tw-contrast"),
                $("--tw-grayscale"),
                $("--tw-hue-rotate"),
                $("--tw-invert"),
                $("--tw-opacity"),
                $("--tw-saturate"),
                $("--tw-sepia"),
                $("--tw-drop-shadow"),
                $("--tw-drop-shadow-color"),
                $("--tw-drop-shadow-alpha", "100%", "<percentage>"),
                $("--tw-drop-shadow-size")
            ]), A = ()=>L([
                $("--tw-backdrop-blur"),
                $("--tw-backdrop-brightness"),
                $("--tw-backdrop-contrast"),
                $("--tw-backdrop-grayscale"),
                $("--tw-backdrop-hue-rotate"),
                $("--tw-backdrop-invert"),
                $("--tw-backdrop-opacity"),
                $("--tw-backdrop-saturate"),
                $("--tw-backdrop-sepia")
            ]);
        t.functional("filter", (y)=>{
            if (!y.modifier) {
                if (y.value === null) return [
                    h(),
                    l("filter", o)
                ];
                if (y.value.kind === "arbitrary") return [
                    l("filter", y.value.value)
                ];
                switch(y.value.value){
                    case "none":
                        return [
                            l("filter", "none")
                        ];
                }
            }
        }), t.functional("backdrop-filter", (y)=>{
            if (!y.modifier) {
                if (y.value === null) return [
                    A(),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ];
                if (y.value.kind === "arbitrary") return [
                    l("-webkit-backdrop-filter", y.value.value),
                    l("backdrop-filter", y.value.value)
                ];
                switch(y.value.value){
                    case "none":
                        return [
                            l("-webkit-backdrop-filter", "none"),
                            l("backdrop-filter", "none")
                        ];
                }
            }
        }), n("blur", {
            themeKeys: [
                "--blur"
            ],
            handle: (y)=>[
                    h(),
                    l("--tw-blur", `blur(${y})`),
                    l("filter", o)
                ]
        }), e("blur-none", [
            h,
            [
                "--tw-blur",
                " "
            ],
            [
                "filter",
                o
            ]
        ]), n("backdrop-blur", {
            themeKeys: [
                "--backdrop-blur",
                "--blur"
            ],
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-blur", `blur(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), e("backdrop-blur-none", [
            A,
            [
                "--tw-backdrop-blur",
                " "
            ],
            [
                "-webkit-backdrop-filter",
                p
            ],
            [
                "backdrop-filter",
                p
            ]
        ]), n("brightness", {
            themeKeys: [
                "--brightness"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    h(),
                    l("--tw-brightness", `brightness(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-brightness", {
            themeKeys: [
                "--backdrop-brightness",
                "--brightness"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-brightness", `brightness(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("brightness", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--brightness"
                    ]
                }
            ]), i("backdrop-brightness", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "90",
                        "95",
                        "100",
                        "105",
                        "110",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-brightness",
                        "--brightness"
                    ]
                }
            ]), n("contrast", {
            themeKeys: [
                "--contrast"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    h(),
                    l("--tw-contrast", `contrast(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-contrast", {
            themeKeys: [
                "--backdrop-contrast",
                "--contrast"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-contrast", `contrast(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("contrast", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--contrast"
                    ]
                }
            ]), i("backdrop-contrast", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "75",
                        "100",
                        "125",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-contrast",
                        "--contrast"
                    ]
                }
            ]), n("grayscale", {
            themeKeys: [
                "--grayscale"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    h(),
                    l("--tw-grayscale", `grayscale(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-grayscale", {
            themeKeys: [
                "--backdrop-grayscale",
                "--grayscale"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-grayscale", `grayscale(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("grayscale", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-grayscale", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-grayscale",
                        "--grayscale"
                    ],
                    hasDefaultValue: !0
                }
            ]), n("hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--hue-rotate"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}deg` : null,
            handle: (y)=>[
                    h(),
                    l("--tw-hue-rotate", `hue-rotate(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-hue-rotate", {
            supportsNegative: !0,
            themeKeys: [
                "--backdrop-hue-rotate",
                "--hue-rotate"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}deg` : null,
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-hue-rotate", `hue-rotate(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("hue-rotate", ()=>[
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--hue-rotate"
                    ]
                }
            ]), i("backdrop-hue-rotate", ()=>[
                {
                    values: [
                        "0",
                        "15",
                        "30",
                        "60",
                        "90",
                        "180"
                    ],
                    valueThemeKeys: [
                        "--backdrop-hue-rotate",
                        "--hue-rotate"
                    ]
                }
            ]), n("invert", {
            themeKeys: [
                "--invert"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    h(),
                    l("--tw-invert", `invert(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-invert", {
            themeKeys: [
                "--backdrop-invert",
                "--invert"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-invert", `invert(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("invert", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-invert", ()=>[
                {
                    values: [
                        "0",
                        "25",
                        "50",
                        "75",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-invert",
                        "--invert"
                    ],
                    hasDefaultValue: !0
                }
            ]), n("saturate", {
            themeKeys: [
                "--saturate"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    h(),
                    l("--tw-saturate", `saturate(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-saturate", {
            themeKeys: [
                "--backdrop-saturate",
                "--saturate"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-saturate", `saturate(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("saturate", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--saturate"
                    ]
                }
            ]), i("backdrop-saturate", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100",
                        "150",
                        "200"
                    ],
                    valueThemeKeys: [
                        "--backdrop-saturate",
                        "--saturate"
                    ]
                }
            ]), n("sepia", {
            themeKeys: [
                "--sepia"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    h(),
                    l("--tw-sepia", `sepia(${y})`),
                    l("filter", o)
                ]
        }), n("backdrop-sepia", {
            themeKeys: [
                "--backdrop-sepia",
                "--sepia"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y) ? `${y}%` : null,
            defaultValue: "100%",
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-sepia", `sepia(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("sepia", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ]), i("backdrop-sepia", ()=>[
                {
                    values: [
                        "0",
                        "50",
                        "100"
                    ],
                    valueThemeKeys: [
                        "--backdrop-sepia",
                        "--sepia"
                    ],
                    hasDefaultValue: !0
                }
            ]), e("drop-shadow-none", [
            h,
            [
                "--tw-drop-shadow",
                " "
            ],
            [
                "filter",
                o
            ]
        ]), t.functional("drop-shadow", (y)=>{
            let C;
            if (y.modifier && (y.modifier.kind === "arbitrary" ? C = y.modifier.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(y.modifier.value) && (C = `${y.modifier.value}%`)), !y.value) {
                let O = r.get([
                    "--drop-shadow"
                ]), V = r.resolve(null, [
                    "--drop-shadow"
                ]);
                return O === null || V === null ? void 0 : [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...Ye("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(V, ",").map((T)=>`drop-shadow(${T})`).join(" ")),
                    l("filter", o)
                ];
            }
            if (y.value.kind === "arbitrary") {
                let O = y.value.value;
                switch(y.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(O, [
                    "color"
                ])){
                    case "color":
                        return O = X(O, y.modifier, r), O === null ? void 0 : [
                            h(),
                            l("--tw-drop-shadow-color", Q(O, "var(--tw-drop-shadow-alpha)")),
                            l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                        ];
                    default:
                        return y.modifier && !C ? void 0 : [
                            h(),
                            l("--tw-drop-shadow-alpha", C),
                            ...Ye("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                            l("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                            l("filter", o)
                        ];
                }
            }
            {
                let O = r.get([
                    `--drop-shadow-${y.value.value}`
                ]), V = r.resolve(y.value.value, [
                    "--drop-shadow"
                ]);
                if (O && V) return y.modifier && !C ? void 0 : C ? [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...Ye("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                    l("filter", o)
                ] : [
                    h(),
                    l("--tw-drop-shadow-alpha", C),
                    ...Ye("--tw-drop-shadow-size", O, C, (T)=>`var(--tw-drop-shadow-color, ${T})`),
                    l("--tw-drop-shadow", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(V, ",").map((T)=>`drop-shadow(${T})`).join(" ")),
                    l("filter", o)
                ];
            }
            {
                let O = te(y, r, [
                    "--drop-shadow-color",
                    "--color"
                ]);
                if (O) return O === "inherit" ? [
                    h(),
                    l("--tw-drop-shadow-color", "inherit"),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ] : [
                    h(),
                    l("--tw-drop-shadow-color", Q(O, "var(--tw-drop-shadow-alpha)")),
                    l("--tw-drop-shadow", "var(--tw-drop-shadow-size)")
                ];
            }
        }), i("drop-shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--drop-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (y, C)=>`${C * 5}`)
                },
                {
                    valueThemeKeys: [
                        "--drop-shadow"
                    ]
                }
            ]), n("backdrop-opacity", {
            themeKeys: [
                "--backdrop-opacity",
                "--opacity"
            ],
            handleBareValue: ({ value: y })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(y) ? `${y}%` : null,
            handle: (y)=>[
                    A(),
                    l("--tw-backdrop-opacity", `opacity(${y})`),
                    l("-webkit-backdrop-filter", p),
                    l("backdrop-filter", p)
                ]
        }), i("backdrop-opacity", ()=>[
                {
                    values: Array.from({
                        length: 21
                    }, (y, C)=>`${C * 5}`),
                    valueThemeKeys: [
                        "--backdrop-opacity",
                        "--opacity"
                    ]
                }
            ]);
    }
    {
        let o = `var(--tw-ease, ${r.resolve(null, [
            "--default-transition-timing-function"
        ]) ?? "ease"})`, p = `var(--tw-duration, ${r.resolve(null, [
            "--default-transition-duration"
        ]) ?? "0s"})`;
        e("transition-none", [
            [
                "transition-property",
                "none"
            ]
        ]), e("transition-all", [
            [
                "transition-property",
                "all"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-colors", [
            [
                "transition-property",
                "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-opacity", [
            [
                "transition-property",
                "opacity"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-shadow", [
            [
                "transition-property",
                "box-shadow"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), e("transition-transform", [
            [
                "transition-property",
                "transform, translate, scale, rotate"
            ],
            [
                "transition-timing-function",
                o
            ],
            [
                "transition-duration",
                p
            ]
        ]), n("transition", {
            defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events",
            themeKeys: [
                "--transition-property"
            ],
            handle: (h)=>[
                    l("transition-property", h),
                    l("transition-timing-function", o),
                    l("transition-duration", p)
                ]
        }), e("transition-discrete", [
            [
                "transition-behavior",
                "allow-discrete"
            ]
        ]), e("transition-normal", [
            [
                "transition-behavior",
                "normal"
            ]
        ]), n("delay", {
            handleBareValue: ({ value: h })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(h) ? `${h}ms` : null,
            themeKeys: [
                "--transition-delay"
            ],
            handle: (h)=>[
                    l("transition-delay", h)
                ]
        });
        {
            let h = ()=>L([
                    $("--tw-duration")
                ]);
            e("duration-initial", [
                h,
                [
                    "--tw-duration",
                    "initial"
                ]
            ]), t.functional("duration", (A)=>{
                if (A.modifier || !A.value) return;
                let y = null;
                if (A.value.kind === "arbitrary" ? y = A.value.value : (y = r.resolve(A.value.fraction ?? A.value.value, [
                    "--transition-duration"
                ]), y === null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(A.value.value) && (y = `${A.value.value}ms`)), y !== null) return [
                    h(),
                    l("--tw-duration", y),
                    l("transition-duration", y)
                ];
            });
        }
        i("delay", ()=>[
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-delay"
                    ]
                }
            ]), i("duration", ()=>[
                {
                    values: [
                        "75",
                        "100",
                        "150",
                        "200",
                        "300",
                        "500",
                        "700",
                        "1000"
                    ],
                    valueThemeKeys: [
                        "--transition-duration"
                    ]
                }
            ]);
    }
    {
        let o = ()=>L([
                $("--tw-ease")
            ]);
        e("ease-initial", [
            o,
            [
                "--tw-ease",
                "initial"
            ]
        ]), e("ease-linear", [
            o,
            [
                "--tw-ease",
                "linear"
            ],
            [
                "transition-timing-function",
                "linear"
            ]
        ]), n("ease", {
            themeKeys: [
                "--ease"
            ],
            handle: (p)=>[
                    o(),
                    l("--tw-ease", p),
                    l("transition-timing-function", p)
                ]
        });
    }
    e("will-change-auto", [
        [
            "will-change",
            "auto"
        ]
    ]), e("will-change-scroll", [
        [
            "will-change",
            "scroll-position"
        ]
    ]), e("will-change-contents", [
        [
            "will-change",
            "contents"
        ]
    ]), e("will-change-transform", [
        [
            "will-change",
            "transform"
        ]
    ]), n("will-change", {
        themeKeys: [],
        handle: (o)=>[
                l("will-change", o)
            ]
    }), e("content-none", [
        [
            "--tw-content",
            "none"
        ],
        [
            "content",
            "none"
        ]
    ]), n("content", {
        themeKeys: [],
        handle: (o)=>[
                L([
                    $("--tw-content", '""')
                ]),
                l("--tw-content", o),
                l("content", "var(--tw-content)")
            ]
    });
    {
        let o = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", p = ()=>L([
                $("--tw-contain-size"),
                $("--tw-contain-layout"),
                $("--tw-contain-paint"),
                $("--tw-contain-style")
            ]);
        e("contain-none", [
            [
                "contain",
                "none"
            ]
        ]), e("contain-content", [
            [
                "contain",
                "content"
            ]
        ]), e("contain-strict", [
            [
                "contain",
                "strict"
            ]
        ]), e("contain-size", [
            p,
            [
                "--tw-contain-size",
                "size"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-inline-size", [
            p,
            [
                "--tw-contain-size",
                "inline-size"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-layout", [
            p,
            [
                "--tw-contain-layout",
                "layout"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-paint", [
            p,
            [
                "--tw-contain-paint",
                "paint"
            ],
            [
                "contain",
                o
            ]
        ]), e("contain-style", [
            p,
            [
                "--tw-contain-style",
                "style"
            ],
            [
                "contain",
                o
            ]
        ]), n("contain", {
            themeKeys: [],
            handle: (h)=>[
                    l("contain", h)
                ]
        });
    }
    e("forced-color-adjust-none", [
        [
            "forced-color-adjust",
            "none"
        ]
    ]), e("forced-color-adjust-auto", [
        [
            "forced-color-adjust",
            "auto"
        ]
    ]), e("leading-none", [
        ()=>L([
                $("--tw-leading")
            ]),
        [
            "--tw-leading",
            "1"
        ],
        [
            "line-height",
            "1"
        ]
    ]), a("leading", [
        "--leading",
        "--spacing"
    ], (o)=>[
            L([
                $("--tw-leading")
            ]),
            l("--tw-leading", o),
            l("line-height", o)
        ]), n("tracking", {
        supportsNegative: !0,
        themeKeys: [
            "--tracking"
        ],
        handle: (o)=>[
                L([
                    $("--tw-tracking")
                ]),
                l("--tw-tracking", o),
                l("letter-spacing", o)
            ]
    }), e("antialiased", [
        [
            "-webkit-font-smoothing",
            "antialiased"
        ],
        [
            "-moz-osx-font-smoothing",
            "grayscale"
        ]
    ]), e("subpixel-antialiased", [
        [
            "-webkit-font-smoothing",
            "auto"
        ],
        [
            "-moz-osx-font-smoothing",
            "auto"
        ]
    ]);
    {
        let o = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", p = ()=>L([
                $("--tw-ordinal"),
                $("--tw-slashed-zero"),
                $("--tw-numeric-figure"),
                $("--tw-numeric-spacing"),
                $("--tw-numeric-fraction")
            ]);
        e("normal-nums", [
            [
                "font-variant-numeric",
                "normal"
            ]
        ]), e("ordinal", [
            p,
            [
                "--tw-ordinal",
                "ordinal"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("slashed-zero", [
            p,
            [
                "--tw-slashed-zero",
                "slashed-zero"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("lining-nums", [
            p,
            [
                "--tw-numeric-figure",
                "lining-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("oldstyle-nums", [
            p,
            [
                "--tw-numeric-figure",
                "oldstyle-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("proportional-nums", [
            p,
            [
                "--tw-numeric-spacing",
                "proportional-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("tabular-nums", [
            p,
            [
                "--tw-numeric-spacing",
                "tabular-nums"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("diagonal-fractions", [
            p,
            [
                "--tw-numeric-fraction",
                "diagonal-fractions"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]), e("stacked-fractions", [
            p,
            [
                "--tw-numeric-fraction",
                "stacked-fractions"
            ],
            [
                "font-variant-numeric",
                o
            ]
        ]);
    }
    {
        let o = ()=>L([
                $("--tw-outline-style", "solid")
            ]);
        t.static("outline-hidden", ()=>[
                l("--tw-outline-style", "none"),
                l("outline-style", "none"),
                z("@media", "(forced-colors: active)", [
                    l("outline", "2px solid transparent"),
                    l("outline-offset", "2px")
                ])
            ]), e("outline-none", [
            [
                "--tw-outline-style",
                "none"
            ],
            [
                "outline-style",
                "none"
            ]
        ]), e("outline-solid", [
            [
                "--tw-outline-style",
                "solid"
            ],
            [
                "outline-style",
                "solid"
            ]
        ]), e("outline-dashed", [
            [
                "--tw-outline-style",
                "dashed"
            ],
            [
                "outline-style",
                "dashed"
            ]
        ]), e("outline-dotted", [
            [
                "--tw-outline-style",
                "dotted"
            ],
            [
                "outline-style",
                "dotted"
            ]
        ]), e("outline-double", [
            [
                "--tw-outline-style",
                "double"
            ],
            [
                "outline-style",
                "double"
            ]
        ]), t.functional("outline", (p)=>{
            if (p.value === null) {
                if (p.modifier) return;
                let h = r.get([
                    "--default-outline-width"
                ]) ?? "1px";
                return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", h)
                ];
            }
            if (p.value.kind === "arbitrary") {
                let h = p.value.value;
                switch(p.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(h, [
                    "color",
                    "length",
                    "number",
                    "percentage"
                ])){
                    case "length":
                    case "number":
                    case "percentage":
                        return p.modifier ? void 0 : [
                            o(),
                            l("outline-style", "var(--tw-outline-style)"),
                            l("outline-width", h)
                        ];
                    default:
                        return h = X(h, p.modifier, r), h === null ? void 0 : [
                            l("outline-color", h)
                        ];
                }
            }
            {
                let h = te(p, r, [
                    "--outline-color",
                    "--color"
                ]);
                if (h) return [
                    l("outline-color", h)
                ];
            }
            {
                if (p.modifier) return;
                let h = r.resolve(p.value.value, [
                    "--outline-width"
                ]);
                if (h) return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", h)
                ];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p.value.value)) return [
                    o(),
                    l("outline-style", "var(--tw-outline-style)"),
                    l("outline-width", `${p.value.value}px`)
                ];
            }
        }), i("outline", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--outline-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (p, h)=>`${h * 5}`),
                    hasDefaultValue: !0
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-width"
                    ]
                }
            ]), n("outline-offset", {
            supportsNegative: !0,
            themeKeys: [
                "--outline-offset"
            ],
            handleBareValue: ({ value: p })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(p) ? `${p}px` : null,
            handle: (p)=>[
                    l("outline-offset", p)
                ]
        }), i("outline-offset", ()=>[
                {
                    supportsNegative: !0,
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--outline-offset"
                    ]
                }
            ]);
    }
    n("opacity", {
        themeKeys: [
            "--opacity"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(o) ? `${o}%` : null,
        handle: (o)=>[
                l("opacity", o)
            ]
    }), i("opacity", ()=>[
            {
                values: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`),
                valueThemeKeys: [
                    "--opacity"
                ]
            }
        ]), e("underline-offset-auto", [
        [
            "text-underline-offset",
            "auto"
        ]
    ]), n("underline-offset", {
        supportsNegative: !0,
        themeKeys: [
            "--text-underline-offset"
        ],
        handleBareValue: ({ value: o })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o) ? `${o}px` : null,
        handle: (o)=>[
                l("text-underline-offset", o)
            ]
    }), i("underline-offset", ()=>[
            {
                supportsNegative: !0,
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--text-underline-offset"
                ]
            }
        ]), t.functional("text", (o)=>{
        if (o.value) {
            if (o.value.kind === "arbitrary") {
                let p = o.value.value;
                switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(p, [
                    "color",
                    "length",
                    "percentage",
                    "absolute-size",
                    "relative-size"
                ])){
                    case "size":
                    case "length":
                    case "percentage":
                    case "absolute-size":
                    case "relative-size":
                        {
                            if (o.modifier) {
                                let A = o.modifier.kind === "arbitrary" ? o.modifier.value : r.resolve(o.modifier.value, [
                                    "--leading"
                                ]);
                                if (!A && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(o.modifier.value)) {
                                    let y = r.resolve(null, [
                                        "--spacing"
                                    ]);
                                    if (!y) return null;
                                    A = `calc(${y} * ${o.modifier.value})`;
                                }
                                return !A && o.modifier.value === "none" && (A = "1"), A ? [
                                    l("font-size", p),
                                    l("line-height", A)
                                ] : null;
                            }
                            return [
                                l("font-size", p)
                            ];
                        }
                    default:
                        return p = X(p, o.modifier, r), p === null ? void 0 : [
                            l("color", p)
                        ];
                }
            }
            {
                let p = te(o, r, [
                    "--text-color",
                    "--color"
                ]);
                if (p) return [
                    l("color", p)
                ];
            }
            {
                let p = r.resolveWith(o.value.value, [
                    "--text"
                ], [
                    "--line-height",
                    "--letter-spacing",
                    "--font-weight"
                ]);
                if (p) {
                    let [h, A = {}] = Array.isArray(p) ? p : [
                        p
                    ];
                    if (o.modifier) {
                        let y = o.modifier.kind === "arbitrary" ? o.modifier.value : r.resolve(o.modifier.value, [
                            "--leading"
                        ]);
                        if (!y && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(o.modifier.value)) {
                            let O = r.resolve(null, [
                                "--spacing"
                            ]);
                            if (!O) return null;
                            y = `calc(${O} * ${o.modifier.value})`;
                        }
                        if (!y && o.modifier.value === "none" && (y = "1"), !y) return null;
                        let C = [
                            l("font-size", h)
                        ];
                        return y && C.push(l("line-height", y)), C;
                    }
                    return typeof A == "string" ? [
                        l("font-size", h),
                        l("line-height", A)
                    ] : [
                        l("font-size", h),
                        l("line-height", A["--line-height"] ? `var(--tw-leading, ${A["--line-height"]})` : void 0),
                        l("letter-spacing", A["--letter-spacing"] ? `var(--tw-tracking, ${A["--letter-spacing"]})` : void 0),
                        l("font-weight", A["--font-weight"] ? `var(--tw-font-weight, ${A["--font-weight"]})` : void 0)
                    ];
                }
            }
        }
    }), i("text", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [],
                valueThemeKeys: [
                    "--text"
                ],
                modifiers: [],
                modifierThemeKeys: [
                    "--leading"
                ]
            }
        ]);
    let _ = ()=>L([
            $("--tw-text-shadow-color"),
            $("--tw-text-shadow-alpha", "100%", "<percentage>")
        ]);
    e("text-shadow-initial", [
        _,
        [
            "--tw-text-shadow-color",
            "initial"
        ]
    ]), t.functional("text-shadow", (o)=>{
        let p;
        if (o.modifier && (o.modifier.kind === "arbitrary" ? p = o.modifier.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o.modifier.value) && (p = `${o.modifier.value}%`)), !o.value) {
            let h = r.get([
                "--text-shadow"
            ]);
            return h === null ? void 0 : [
                _(),
                l("--tw-text-shadow-alpha", p),
                ...ue("text-shadow", h, p, (A)=>`var(--tw-text-shadow-color, ${A})`)
            ];
        }
        if (o.value.kind === "arbitrary") {
            let h = o.value.value;
            switch(o.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(h, [
                "color"
            ])){
                case "color":
                    return h = X(h, o.modifier, r), h === null ? void 0 : [
                        _(),
                        l("--tw-text-shadow-color", Q(h, "var(--tw-text-shadow-alpha)"))
                    ];
                default:
                    return [
                        _(),
                        l("--tw-text-shadow-alpha", p),
                        ...ue("text-shadow", h, p, (y)=>`var(--tw-text-shadow-color, ${y})`)
                    ];
            }
        }
        switch(o.value.value){
            case "none":
                return o.modifier ? void 0 : [
                    _(),
                    l("text-shadow", "none")
                ];
            case "inherit":
                return o.modifier ? void 0 : [
                    _(),
                    l("--tw-text-shadow-color", "inherit")
                ];
        }
        {
            let h = r.get([
                `--text-shadow-${o.value.value}`
            ]);
            if (h) return [
                _(),
                l("--tw-text-shadow-alpha", p),
                ...ue("text-shadow", h, p, (A)=>`var(--tw-text-shadow-color, ${A})`)
            ];
        }
        {
            let h = te(o, r, [
                "--text-shadow-color",
                "--color"
            ]);
            if (h) return [
                _(),
                l("--tw-text-shadow-color", Q(h, "var(--tw-text-shadow-alpha)"))
            ];
        }
    }), i("text-shadow", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--text-shadow-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "none"
                ]
            },
            {
                valueThemeKeys: [
                    "--text-shadow"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`),
                hasDefaultValue: r.get([
                    "--text-shadow"
                ]) !== null
            }
        ]);
    {
        let y = function(V) {
            return `var(--tw-ring-inset,) 0 0 0 calc(${V} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${A})`;
        }, C = function(V) {
            return `inset 0 0 0 ${V} var(--tw-inset-ring-color, currentcolor)`;
        };
        var Z = y, re = C;
        let o = [
            "var(--tw-inset-shadow)",
            "var(--tw-inset-ring-shadow)",
            "var(--tw-ring-offset-shadow)",
            "var(--tw-ring-shadow)",
            "var(--tw-shadow)"
        ].join(", "), p = "0 0 #0000", h = ()=>L([
                $("--tw-shadow", p),
                $("--tw-shadow-color"),
                $("--tw-shadow-alpha", "100%", "<percentage>"),
                $("--tw-inset-shadow", p),
                $("--tw-inset-shadow-color"),
                $("--tw-inset-shadow-alpha", "100%", "<percentage>"),
                $("--tw-ring-color"),
                $("--tw-ring-shadow", p),
                $("--tw-inset-ring-color"),
                $("--tw-inset-ring-shadow", p),
                $("--tw-ring-inset"),
                $("--tw-ring-offset-width", "0px", "<length>"),
                $("--tw-ring-offset-color", "#fff"),
                $("--tw-ring-offset-shadow", p)
            ]);
        e("shadow-initial", [
            h,
            [
                "--tw-shadow-color",
                "initial"
            ]
        ]), t.functional("shadow", (V)=>{
            let T;
            if (V.modifier && (V.modifier.kind === "arbitrary" ? T = V.modifier.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V.modifier.value) && (T = `${V.modifier.value}%`)), !V.value) {
                let j = r.get([
                    "--shadow"
                ]);
                return j === null ? void 0 : [
                    h(),
                    l("--tw-shadow-alpha", T),
                    ...ue("--tw-shadow", j, T, (oe)=>`var(--tw-shadow-color, ${oe})`),
                    l("box-shadow", o)
                ];
            }
            if (V.value.kind === "arbitrary") {
                let j = V.value.value;
                switch(V.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(j, [
                    "color"
                ])){
                    case "color":
                        return j = X(j, V.modifier, r), j === null ? void 0 : [
                            h(),
                            l("--tw-shadow-color", Q(j, "var(--tw-shadow-alpha)"))
                        ];
                    default:
                        return [
                            h(),
                            l("--tw-shadow-alpha", T),
                            ...ue("--tw-shadow", j, T, (ot)=>`var(--tw-shadow-color, ${ot})`),
                            l("box-shadow", o)
                        ];
                }
            }
            switch(V.value.value){
                case "none":
                    return V.modifier ? void 0 : [
                        h(),
                        l("--tw-shadow", p),
                        l("box-shadow", o)
                    ];
                case "inherit":
                    return V.modifier ? void 0 : [
                        h(),
                        l("--tw-shadow-color", "inherit")
                    ];
            }
            {
                let j = r.get([
                    `--shadow-${V.value.value}`
                ]);
                if (j) return [
                    h(),
                    l("--tw-shadow-alpha", T),
                    ...ue("--tw-shadow", j, T, (oe)=>`var(--tw-shadow-color, ${oe})`),
                    l("box-shadow", o)
                ];
            }
            {
                let j = te(V, r, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (j) return [
                    h(),
                    l("--tw-shadow-color", Q(j, "var(--tw-shadow-alpha)"))
                ];
            }
        }), i("shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`),
                    hasDefaultValue: r.get([
                        "--shadow"
                    ]) !== null
                }
            ]), e("inset-shadow-initial", [
            h,
            [
                "--tw-inset-shadow-color",
                "initial"
            ]
        ]), t.functional("inset-shadow", (V)=>{
            let T;
            if (V.modifier && (V.modifier.kind === "arbitrary" ? T = V.modifier.value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V.modifier.value) && (T = `${V.modifier.value}%`)), !V.value) {
                let j = r.get([
                    "--inset-shadow"
                ]);
                return j === null ? void 0 : [
                    h(),
                    l("--tw-inset-shadow-alpha", T),
                    ...ue("--tw-inset-shadow", j, T, (oe)=>`var(--tw-inset-shadow-color, ${oe})`),
                    l("box-shadow", o)
                ];
            }
            if (V.value.kind === "arbitrary") {
                let j = V.value.value;
                switch(V.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(j, [
                    "color"
                ])){
                    case "color":
                        return j = X(j, V.modifier, r), j === null ? void 0 : [
                            h(),
                            l("--tw-inset-shadow-color", Q(j, "var(--tw-inset-shadow-alpha)"))
                        ];
                    default:
                        return [
                            h(),
                            l("--tw-inset-shadow-alpha", T),
                            ...ue("--tw-inset-shadow", j, T, (ot)=>`var(--tw-inset-shadow-color, ${ot})`, "inset "),
                            l("box-shadow", o)
                        ];
                }
            }
            switch(V.value.value){
                case "none":
                    return V.modifier ? void 0 : [
                        h(),
                        l("--tw-inset-shadow", p),
                        l("box-shadow", o)
                    ];
                case "inherit":
                    return V.modifier ? void 0 : [
                        h(),
                        l("--tw-inset-shadow-color", "inherit")
                    ];
            }
            {
                let j = r.get([
                    `--inset-shadow-${V.value.value}`
                ]);
                if (j) return [
                    h(),
                    l("--tw-inset-shadow-alpha", T),
                    ...ue("--tw-inset-shadow", j, T, (oe)=>`var(--tw-inset-shadow-color, ${oe})`),
                    l("box-shadow", o)
                ];
            }
            {
                let j = te(V, r, [
                    "--box-shadow-color",
                    "--color"
                ]);
                if (j) return [
                    h(),
                    l("--tw-inset-shadow-color", Q(j, "var(--tw-inset-shadow-alpha)"))
                ];
            }
        }), i("inset-shadow", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--box-shadow-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "none"
                    ]
                },
                {
                    valueThemeKeys: [
                        "--inset-shadow"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`),
                    hasDefaultValue: r.get([
                        "--inset-shadow"
                    ]) !== null
                }
            ]), e("ring-inset", [
            h,
            [
                "--tw-ring-inset",
                "inset"
            ]
        ]);
        let A = r.get([
            "--default-ring-color"
        ]) ?? "currentcolor";
        t.functional("ring", (V)=>{
            if (!V.value) {
                if (V.modifier) return;
                let T = r.get([
                    "--default-ring-width"
                ]) ?? "1px";
                return [
                    h(),
                    l("--tw-ring-shadow", y(T)),
                    l("box-shadow", o)
                ];
            }
            if (V.value.kind === "arbitrary") {
                let T = V.value.value;
                switch(V.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(T, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return V.modifier ? void 0 : [
                            h(),
                            l("--tw-ring-shadow", y(T)),
                            l("box-shadow", o)
                        ];
                    default:
                        return T = X(T, V.modifier, r), T === null ? void 0 : [
                            l("--tw-ring-color", T)
                        ];
                }
            }
            {
                let T = te(V, r, [
                    "--ring-color",
                    "--color"
                ]);
                if (T) return [
                    l("--tw-ring-color", T)
                ];
            }
            {
                if (V.modifier) return;
                let T = r.resolve(V.value.value, [
                    "--ring-width"
                ]);
                if (T === null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V.value.value) && (T = `${V.value.value}px`), T) return [
                    h(),
                    l("--tw-ring-shadow", y(T)),
                    l("box-shadow", o)
                ];
            }
        }), i("ring", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ]), t.functional("inset-ring", (V)=>{
            if (!V.value) return V.modifier ? void 0 : [
                h(),
                l("--tw-inset-ring-shadow", C("1px")),
                l("box-shadow", o)
            ];
            if (V.value.kind === "arbitrary") {
                let T = V.value.value;
                switch(V.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(T, [
                    "color",
                    "length"
                ])){
                    case "length":
                        return V.modifier ? void 0 : [
                            h(),
                            l("--tw-inset-ring-shadow", C(T)),
                            l("box-shadow", o)
                        ];
                    default:
                        return T = X(T, V.modifier, r), T === null ? void 0 : [
                            l("--tw-inset-ring-color", T)
                        ];
                }
            }
            {
                let T = te(V, r, [
                    "--ring-color",
                    "--color"
                ]);
                if (T) return [
                    l("--tw-inset-ring-color", T)
                ];
            }
            {
                if (V.modifier) return;
                let T = r.resolve(V.value.value, [
                    "--ring-width"
                ]);
                if (T === null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V.value.value) && (T = `${V.value.value}px`), T) return [
                    h(),
                    l("--tw-inset-ring-shadow", C(T)),
                    l("box-shadow", o)
                ];
            }
        }), i("inset-ring", ()=>[
                {
                    values: [
                        "current",
                        "inherit",
                        "transparent"
                    ],
                    valueThemeKeys: [
                        "--ring-color",
                        "--color"
                    ],
                    modifiers: Array.from({
                        length: 21
                    }, (V, T)=>`${T * 5}`)
                },
                {
                    values: [
                        "0",
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    valueThemeKeys: [
                        "--ring-width"
                    ],
                    hasDefaultValue: !0
                }
            ]);
        let O = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
        t.functional("ring-offset", (V)=>{
            if (V.value) {
                if (V.value.kind === "arbitrary") {
                    let T = V.value.value;
                    switch(V.value.dataType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(T, [
                        "color",
                        "length"
                    ])){
                        case "length":
                            return V.modifier ? void 0 : [
                                l("--tw-ring-offset-width", T),
                                l("--tw-ring-offset-shadow", O)
                            ];
                        default:
                            return T = X(T, V.modifier, r), T === null ? void 0 : [
                                l("--tw-ring-offset-color", T)
                            ];
                    }
                }
                {
                    let T = r.resolve(V.value.value, [
                        "--ring-offset-width"
                    ]);
                    if (T) return V.modifier ? void 0 : [
                        l("--tw-ring-offset-width", T),
                        l("--tw-ring-offset-shadow", O)
                    ];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(V.value.value)) return V.modifier ? void 0 : [
                        l("--tw-ring-offset-width", `${V.value.value}px`),
                        l("--tw-ring-offset-shadow", O)
                    ];
                }
                {
                    let T = te(V, r, [
                        "--ring-offset-color",
                        "--color"
                    ]);
                    if (T) return [
                        l("--tw-ring-offset-color", T)
                    ];
                }
            }
        });
    }
    return i("ring-offset", ()=>[
            {
                values: [
                    "current",
                    "inherit",
                    "transparent"
                ],
                valueThemeKeys: [
                    "--ring-offset-color",
                    "--color"
                ],
                modifiers: Array.from({
                    length: 21
                }, (o, p)=>`${p * 5}`)
            },
            {
                values: [
                    "0",
                    "1",
                    "2",
                    "4",
                    "8"
                ],
                valueThemeKeys: [
                    "--ring-offset-width"
                ]
            }
        ]), t.functional("@container", (o)=>{
        let p = null;
        if (o.value === null ? p = "inline-size" : o.value.kind === "arbitrary" ? p = o.value.value : o.value.kind === "named" && o.value.value === "normal" && (p = "normal"), p !== null) return o.modifier ? [
            l("container-type", p),
            l("container-name", o.modifier.value)
        ] : [
            l("container-type", p)
        ];
    }), i("@container", ()=>[
            {
                values: [
                    "normal"
                ],
                valueThemeKeys: [],
                hasDefaultValue: !0
            }
        ]), t;
}
var bt = [
    "number",
    "integer",
    "ratio",
    "percentage"
];
function ur(r) {
    let t = r.params;
    return Ci.test(t) ? (i)=>{
        let e = {
            "--value": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            },
            "--modifier": {
                usedSpacingInteger: !1,
                usedSpacingNumber: !1,
                themeKeys: new Set,
                literals: new Set
            }
        };
        F(r.nodes, (n)=>{
            if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
            let s = q(n.value);
            ee(s, (a)=>{
                if (a.kind !== "function") return;
                if (a.value === "--spacing" && !(e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return ee(a.nodes, (u)=>{
                    if (u.kind !== "function" || u.value !== "--value" && u.value !== "--modifier") return;
                    let f = u.value;
                    for (let g of u.nodes)if (g.kind === "word") {
                        if (g.value === "integer") e[f].usedSpacingInteger ||= !0;
                        else if (g.value === "number" && (e[f].usedSpacingNumber ||= !0, e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return 2;
                    }
                }), 0;
                if (a.value !== "--value" && a.value !== "--modifier") return;
                let c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(Y(a.nodes), ",");
                for (let [u, f] of c.entries())f = f.replace(/\\\*/g, "*"), f = f.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), f = f.replace(/\s+/g, ""), f = f.replace(/(-\*){2,}/g, "-*"), f[0] === "-" && f[1] === "-" && !f.includes("-*") && (f += "-*"), c[u] = f;
                a.nodes = q(c.join(","));
                for (let u of a.nodes)if (u.kind === "word" && (u.value[0] === '"' || u.value[0] === "'") && u.value[0] === u.value[u.value.length - 1]) {
                    let f = u.value.slice(1, -1);
                    e[a.value].literals.add(f);
                } else if (u.kind === "word" && u.value[0] === "-" && u.value[1] === "-") {
                    let f = u.value.replace(/-\*.*$/g, "");
                    e[a.value].themeKeys.add(f);
                } else if (u.kind === "word" && !(u.value[0] === "[" && u.value[u.value.length - 1] === "]") && !bt.includes(u.value)) {
                    console.warn(`Unsupported bare value data type: "${u.value}".
Only valid data types are: ${bt.map((x)=>`"${x}"`).join(", ")}.
`);
                    let f = u.value, g = structuredClone(a), d = "\xB6";
                    ee(g.nodes, (x, { replaceWith: k1 })=>{
                        x.kind === "word" && x.value === f && k1({
                            kind: "word",
                            value: d
                        });
                    });
                    let m = "^".repeat(Y([
                        u
                    ]).length), w = Y([
                        g
                    ]).indexOf(d), v = [
                        "```css",
                        Y([
                            a
                        ]),
                        " ".repeat(w) + m,
                        "```"
                    ].join(`
`);
                    console.warn(v);
                }
            }), n.value = Y(s);
        }), i.utilities.functional(t.slice(0, -2), (n)=>{
            let s = structuredClone(r), a = n.value, c = n.modifier;
            if (a === null) return;
            let u = !1, f = !1, g = !1, d = !1, m = new Map, w = !1;
            if (F([
                s
            ], (v, { parent: x, replaceWith: k1 })=>{
                if (x?.kind !== "rule" && x?.kind !== "at-rule" || v.kind !== "declaration" || !v.value) return;
                let N = q(v.value);
                (ee(N, (S, { replaceWith: P })=>{
                    if (S.kind === "function") {
                        if (S.value === "--value") {
                            u = !0;
                            let U = or(a, S, i);
                            return U ? (f = !0, U.ratio ? w = !0 : m.set(v, x), P(U.nodes), 1) : (u ||= !1, k1([]), 2);
                        } else if (S.value === "--modifier") {
                            if (c === null) return k1([]), 2;
                            g = !0;
                            let U = or(c, S, i);
                            return U ? (d = !0, P(U.nodes), 1) : (g ||= !1, k1([]), 2);
                        }
                    }
                }) ?? 0) === 0 && (v.value = Y(N));
            }), u && !f || g && !d || w && d || c && !w && !d) return null;
            if (w) for (let [v, x] of m){
                let k1 = x.nodes.indexOf(v);
                k1 !== -1 && x.nodes.splice(k1, 1);
            }
            return s.nodes;
        }), i.utilities.suggest(t.slice(0, -2), ()=>{
            let n = [], s = [];
            for (let [a, { literals: c, usedSpacingNumber: u, usedSpacingInteger: f, themeKeys: g }] of [
                [
                    n,
                    e["--value"]
                ],
                [
                    s,
                    e["--modifier"]
                ]
            ]){
                for (let d of c)a.push(d);
                if (u) a.push(...Ze);
                else if (f) for (let d of Ze)(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(d) && a.push(d);
                for (let d of i.theme.keysInNamespaces(g))a.push(d.replace(ar, (m, w, v)=>`${w}.${v}`));
            }
            return [
                {
                    values: n,
                    modifiers: s
                }
            ];
        });
    } : Ai.test(t) ? (i)=>{
        i.utilities.static(t, ()=>structuredClone(r.nodes));
    } : null;
}
function or(r, t, i) {
    for (let e of t.nodes){
        if (r.kind === "named" && e.kind === "word" && (e.value[0] === "'" || e.value[0] === '"') && e.value[e.value.length - 1] === e.value[0] && e.value.slice(1, -1) === r.value) return {
            nodes: q(r.value)
        };
        if (r.kind === "named" && e.kind === "word" && e.value[0] === "-" && e.value[1] === "-") {
            let n = e.value;
            if (n.endsWith("-*")) {
                n = n.slice(0, -2);
                let s = i.theme.resolve(r.value, [
                    n
                ]);
                if (s) return {
                    nodes: q(s)
                };
            } else {
                let s = n.split("-*");
                if (s.length <= 1) continue;
                let a = [
                    s.shift()
                ], c = i.theme.resolveWith(r.value, a, s);
                if (c) {
                    let [, u = {}] = c;
                    {
                        let f = u[s.pop()];
                        if (f) return {
                            nodes: q(f)
                        };
                    }
                }
            }
        } else if (r.kind === "named" && e.kind === "word") {
            if (!bt.includes(e.value)) continue;
            let n = e.value === "ratio" && "fraction" in r ? r.fraction : r.value;
            if (!n) continue;
            let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(n, [
                e.value
            ]);
            if (s === null) continue;
            if (s === "ratio") {
                let [a, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(n, "/");
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(a) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(c)) continue;
            } else {
                if (s === "number" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(n)) continue;
                if (s === "percentage" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(n.slice(0, -1))) continue;
            }
            return {
                nodes: q(n),
                ratio: s === "ratio"
            };
        } else if (r.kind === "arbitrary" && e.kind === "word" && e.value[0] === "[" && e.value[e.value.length - 1] === "]") {
            let n = e.value.slice(1, -1);
            if (n === "*") return {
                nodes: q(r.value)
            };
            if ("dataType" in r && r.dataType && r.dataType !== n) continue;
            if ("dataType" in r && r.dataType) return {
                nodes: q(r.value)
            };
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(r.value, [
                n
            ]) !== null) return {
                nodes: q(r.value)
            };
        }
    }
}
function ue(r, t, i, e, n = "") {
    let s = !1, a = Ee(t, (u)=>i == null ? e(u) : u.startsWith("current") ? e(Q(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (s = !0), e(lr(u, i))));
    function c(u) {
        return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(u, ",").map((f)=>n + f).join(",") : u;
    }
    return s ? [
        l(r, c(Ee(t, e))),
        H("@supports (color: lab(from red l a b))", [
            l(r, c(a))
        ])
    ] : [
        l(r, c(a))
    ];
}
function Ye(r, t, i, e, n = "") {
    let s = !1, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(t, ",").map((c)=>Ee(c, (u)=>i == null ? e(u) : u.startsWith("current") ? e(Q(u, i)) : ((u.startsWith("var(") || i.startsWith("var(")) && (s = !0), e(lr(u, i))))).map((c)=>`drop-shadow(${c})`).join(" ");
    return s ? [
        l(r, n + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(t, ",").map((c)=>`drop-shadow(${Ee(c, e)})`).join(" ")),
        H("@supports (color: lab(from red l a b))", [
            l(r, n + a)
        ])
    ] : [
        l(r, n + a)
    ];
}
var kt = {
    "--alpha": $i,
    "--spacing": Vi,
    "--theme": Ni,
    theme: Si
};
function $i(r, t, i, ...e) {
    let [n, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(i, "/").map((a)=>a.trim());
    if (!n || !s) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    if (e.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    return Q(n, s);
}
function Vi(r, t, i, ...e) {
    if (!i) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (e.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${e.length + 1}.`);
    let n = r.theme.resolve(null, [
        "--spacing"
    ]);
    if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${n} * ${i})`;
}
function Ni(r, t, i, ...e) {
    if (!i.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let n = !1;
    i.endsWith(" inline") && (n = !0, i = i.slice(0, -7)), t.kind === "at-rule" && (n = !0);
    let s = r.resolveThemeValue(i, n);
    if (!s) {
        if (e.length > 0) return e.join(", ");
        throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (e.length === 0) return s;
    let a = e.join(", ");
    if (a === "initial") return s;
    if (s === "initial") return a;
    if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
        let c = q(s);
        return Ei(c, a), Y(c);
    }
    return s;
}
function Si(r, t, i, ...e) {
    i = Ti(i);
    let n = r.resolveThemeValue(i);
    if (!n && e.length > 0) return e.join(", ");
    if (!n) throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return n;
}
var fr = new RegExp(Object.keys(kt).map((r)=>`${r}\\(`).join("|"));
function xe(r, t) {
    let i = 0;
    return F(r, (e)=>{
        if (e.kind === "declaration" && e.value && fr.test(e.value)) {
            i |= 8, e.value = cr(e.value, e, t);
            return;
        }
        e.kind === "at-rule" && (e.name === "@media" || e.name === "@custom-media" || e.name === "@container" || e.name === "@supports") && fr.test(e.params) && (i |= 8, e.params = cr(e.params, e, t));
    }), i;
}
function cr(r, t, i) {
    let e = q(r);
    return ee(e, (n, { replaceWith: s })=>{
        if (n.kind === "function" && n.value in kt) {
            let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(Y(n.nodes).trim(), ",").map((u)=>u.trim()), c = kt[n.value](i, t, ...a);
            return s(q(c));
        }
    }), Y(e);
}
function Ti(r) {
    if (r[0] !== "'" && r[0] !== '"') return r;
    let t = "", i = r[0];
    for(let e = 1; e < r.length - 1; e++){
        let n = r[e], s = r[e + 1];
        n === "\\" && (s === i || s === "\\") ? (t += s, e++) : t += n;
    }
    return t;
}
function Ei(r, t) {
    ee(r, (i)=>{
        if (i.kind === "function" && !(i.value !== "var" && i.value !== "theme" && i.value !== "--theme")) if (i.nodes.length === 1) i.nodes.push({
            kind: "word",
            value: `, ${t}`
        });
        else {
            let e = i.nodes[i.nodes.length - 1];
            e.kind === "word" && e.value === "initial" && (e.value = t);
        }
    });
}
function Qe(r, t) {
    let i = r.length, e = t.length, n = i < e ? i : e;
    for(let s = 0; s < n; s++){
        let a = r.charCodeAt(s), c = t.charCodeAt(s);
        if (a >= 48 && a <= 57 && c >= 48 && c <= 57) {
            let u = s, f = s + 1, g = s, d = s + 1;
            for(a = r.charCodeAt(f); a >= 48 && a <= 57;)a = r.charCodeAt(++f);
            for(c = t.charCodeAt(d); c >= 48 && c <= 57;)c = t.charCodeAt(++d);
            let m = r.slice(u, f), w = t.slice(g, d), v = Number(m) - Number(w);
            if (v) return v;
            if (m < w) return -1;
            if (m > w) return 1;
            continue;
        }
        if (a !== c) return a - c;
    }
    return r.length - t.length;
}
var Pi = /^\d+\/\d+$/;
function pr(r) {
    let t = new B((n)=>({
            name: n,
            utility: n,
            fraction: !1,
            modifiers: []
        }));
    for (let n of r.utilities.keys("static")){
        let s = t.get(n);
        s.fraction = !1, s.modifiers = [];
    }
    for (let n of r.utilities.keys("functional")){
        let s = r.utilities.getCompletions(n);
        for (let a of s)for (let c of a.values){
            let u = c !== null && Pi.test(c), f = c === null ? n : `${n}-${c}`, g = t.get(f);
            if (g.utility = n, g.fraction ||= u, g.modifiers.push(...a.modifiers), a.supportsNegative) {
                let d = t.get(`-${f}`);
                d.utility = `-${n}`, d.fraction ||= u, d.modifiers.push(...a.modifiers);
            }
        }
    }
    if (t.size === 0) return [];
    let i = Array.from(t.values());
    return i.sort((n, s)=>Qe(n.name, s.name)), Ri(i);
}
function Ri(r) {
    let t = [], i = null, e = new Map, n = new B(()=>[]);
    for (let a of r){
        let { utility: c, fraction: u } = a;
        i || (i = {
            utility: c,
            items: []
        }, e.set(c, i)), c !== i.utility && (t.push(i), i = {
            utility: c,
            items: []
        }, e.set(c, i)), u ? n.get(c).push(a) : i.items.push(a);
    }
    i && t[t.length - 1] !== i && t.push(i);
    for (let [a, c] of n){
        let u = e.get(a);
        u && u.items.push(...c);
    }
    let s = [];
    for (let a of t)for (let c of a.items)s.push([
        c.name,
        {
            modifiers: c.modifiers
        }
    ]);
    return s;
}
function dr(r) {
    let t = [];
    for (let [e, n] of r.variants.entries()){
        let c = function({ value: u, modifier: f } = {}) {
            let g = e;
            u && (g += s ? `-${u}` : u), f && (g += `/${f}`);
            let d = r.parseVariant(g);
            if (!d) return [];
            let m = M(".__placeholder__", []);
            if (Ae(m, d, r.variants) === null) return [];
            let w = [];
            return Ge(m.nodes, (v, { path: x })=>{
                if (v.kind !== "rule" && v.kind !== "at-rule" || v.nodes.length > 0) return;
                x.sort((b, S)=>{
                    let P = b.kind === "at-rule", U = S.kind === "at-rule";
                    return P && !U ? -1 : !P && U ? 1 : 0;
                });
                let k1 = x.flatMap((b)=>b.kind === "rule" ? b.selector === "&" ? [] : [
                        b.selector
                    ] : b.kind === "at-rule" ? [
                        `${b.name} ${b.params}`
                    ] : []), N = "";
                for(let b = k1.length - 1; b >= 0; b--)N = N === "" ? k1[b] : `${k1[b]} { ${N} }`;
                w.push(N);
            }), w;
        };
        var i = c;
        if (n.kind === "arbitrary") continue;
        let s = e !== "@", a = r.variants.getCompletions(e);
        switch(n.kind){
            case "static":
                {
                    t.push({
                        name: e,
                        values: a,
                        isArbitrary: !1,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
            case "functional":
                {
                    t.push({
                        name: e,
                        values: a,
                        isArbitrary: !0,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
            case "compound":
                {
                    t.push({
                        name: e,
                        values: a,
                        isArbitrary: !0,
                        hasDash: s,
                        selectors: c
                    });
                    break;
                }
        }
    }
    return t;
}
function mr(r, t) {
    let { astNodes: i, nodeSorting: e } = pe(Array.from(t), r), n = new Map(t.map((a)=>[
            a,
            null
        ])), s = 0n;
    for (let a of i){
        let c = e.get(a)?.candidate;
        c && n.set(c, n.get(c) ?? s++);
    }
    return t.map((a)=>[
            a,
            n.get(a) ?? null
        ]);
}
var Xe = /^@?[a-zA-Z0-9_-]*$/;
var xt = class {
    compareFns = new Map;
    variants = new Map;
    completions = new Map;
    groupOrder = null;
    lastOrder = 0;
    static(t, i, { compounds: e, order: n } = {}) {
        this.set(t, {
            kind: "static",
            applyFn: i,
            compoundsWith: 0,
            compounds: e ?? 2,
            order: n
        });
    }
    fromAst(t, i) {
        let e = [];
        F(i, (n)=>{
            n.kind === "rule" ? e.push(n.selector) : n.kind === "at-rule" && n.name !== "@slot" && e.push(`${n.name} ${n.params}`);
        }), this.static(t, (n)=>{
            let s = structuredClone(i);
            At(s, n.nodes), n.nodes = s;
        }, {
            compounds: ye(e)
        });
    }
    functional(t, i, { compounds: e, order: n } = {}) {
        this.set(t, {
            kind: "functional",
            applyFn: i,
            compoundsWith: 0,
            compounds: e ?? 2,
            order: n
        });
    }
    compound(t, i, e, { compounds: n, order: s } = {}) {
        this.set(t, {
            kind: "compound",
            applyFn: e,
            compoundsWith: i,
            compounds: n ?? 2,
            order: s
        });
    }
    group(t, i) {
        this.groupOrder = this.nextOrder(), i && this.compareFns.set(this.groupOrder, i), t(), this.groupOrder = null;
    }
    has(t) {
        return this.variants.has(t);
    }
    get(t) {
        return this.variants.get(t);
    }
    kind(t) {
        return this.variants.get(t)?.kind;
    }
    compoundsWith(t, i) {
        let e = this.variants.get(t), n = typeof i == "string" ? this.variants.get(i) : i.kind === "arbitrary" ? {
            compounds: ye([
                i.selector
            ])
        } : this.variants.get(i.root);
        return !(!e || !n || e.kind !== "compound" || n.compounds === 0 || e.compoundsWith === 0 || (e.compoundsWith & n.compounds) === 0);
    }
    suggest(t, i) {
        this.completions.set(t, i);
    }
    getCompletions(t) {
        return this.completions.get(t)?.() ?? [];
    }
    compare(t, i) {
        if (t === i) return 0;
        if (t === null) return -1;
        if (i === null) return 1;
        if (t.kind === "arbitrary" && i.kind === "arbitrary") return t.selector < i.selector ? -1 : 1;
        if (t.kind === "arbitrary") return 1;
        if (i.kind === "arbitrary") return -1;
        let e = this.variants.get(t.root).order, n = this.variants.get(i.root).order, s = e - n;
        if (s !== 0) return s;
        if (t.kind === "compound" && i.kind === "compound") {
            let f = this.compare(t.variant, i.variant);
            return f !== 0 ? f : t.modifier && i.modifier ? t.modifier.value < i.modifier.value ? -1 : 1 : t.modifier ? 1 : i.modifier ? -1 : 0;
        }
        let a = this.compareFns.get(e);
        if (a !== void 0) return a(t, i);
        if (t.root !== i.root) return t.root < i.root ? -1 : 1;
        let c = t.value, u = i.value;
        return c === null ? -1 : u === null || c.kind === "arbitrary" && u.kind !== "arbitrary" ? 1 : c.kind !== "arbitrary" && u.kind === "arbitrary" || c.value < u.value ? -1 : 1;
    }
    keys() {
        return this.variants.keys();
    }
    entries() {
        return this.variants.entries();
    }
    set(t, { kind: i, applyFn: e, compounds: n, compoundsWith: s, order: a }) {
        let c = this.variants.get(t);
        c ? Object.assign(c, {
            kind: i,
            applyFn: e,
            compounds: n
        }) : (a === void 0 && (this.lastOrder = this.nextOrder(), a = this.lastOrder), this.variants.set(t, {
            kind: i,
            applyFn: e,
            order: a,
            compoundsWith: s,
            compounds: n
        }));
    }
    nextOrder() {
        return this.groupOrder ?? this.lastOrder + 1;
    }
};
function ye(r) {
    let t = 0;
    for (let i of r){
        if (i[0] === "@") {
            if (!i.startsWith("@media") && !i.startsWith("@supports") && !i.startsWith("@container")) return 0;
            t |= 1;
            continue;
        }
        if (i.includes("::")) return 0;
        t |= 2;
    }
    return t;
}
function hr(r) {
    let t = new xt;
    function i(f, g, { compounds: d } = {}) {
        d = d ?? ye(g), t.static(f, (m)=>{
            m.nodes = g.map((w)=>H(w, m.nodes));
        }, {
            compounds: d
        });
    }
    i("*", [
        ":is(& > *)"
    ], {
        compounds: 0
    }), i("**", [
        ":is(& *)"
    ], {
        compounds: 0
    });
    function e(f, g) {
        return g.map((d)=>{
            d = d.trim();
            let m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(d, " ");
            return m[0] === "not" ? m.slice(1).join(" ") : f === "@container" ? m[0][0] === "(" ? `not ${d}` : m[1] === "not" ? `${m[0]} ${m.slice(2).join(" ")}` : `${m[0]} not ${m.slice(1).join(" ")}` : `not ${d}`;
        });
    }
    let n = [
        "@media",
        "@supports",
        "@container"
    ];
    function s(f) {
        for (let g of n){
            if (g !== f.name) continue;
            let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(f.params, ",");
            return d.length > 1 ? null : (d = e(f.name, d), z(f.name, d.join(", ")));
        }
        return null;
    }
    function a(f) {
        return f.includes("::") ? null : `&:not(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(f, ",").map((d)=>(d = d.replaceAll("&", "*"), d)).join(", ")})`;
    }
    t.compound("not", 3, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative || g.modifier) return null;
        let d = !1;
        if (F([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule" && m.kind !== "at-rule") return 0;
            if (m.nodes.length > 0) return 0;
            let v = [], x = [];
            for (let N of w)N.kind === "at-rule" ? v.push(N) : N.kind === "rule" && x.push(N);
            if (v.length > 1) return 2;
            if (x.length > 1) return 2;
            let k1 = [];
            for (let N of x){
                let b = a(N.selector);
                if (!b) return d = !1, 2;
                k1.push(M(b, []));
            }
            for (let N of v){
                let b = s(N);
                if (!b) return d = !1, 2;
                k1.push(b);
            }
            return Object.assign(f, M("&", k1)), d = !0, 1;
        }), f.kind === "rule" && f.selector === "&" && f.nodes.length === 1 && Object.assign(f, f.nodes[0]), !d) return null;
    }), t.suggest("not", ()=>Array.from(t.keys()).filter((f)=>t.compoundsWith("not", f))), t.compound("group", 2, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative) return null;
        let d = g.modifier ? `:where(.${r.prefix ? `${r.prefix}\\:` : ""}group\\/${g.modifier.value})` : `:where(.${r.prefix ? `${r.prefix}\\:` : ""}group)`, m = !1;
        if (F([
            f
        ], (w, { path: v })=>{
            if (w.kind !== "rule") return 0;
            for (let k1 of v.slice(0, -1))if (k1.kind === "rule") return m = !1, 2;
            let x = w.selector.replaceAll("&", d);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(x, ",").length > 1 && (x = `:is(${x})`), w.selector = `&:is(${x} *)`, m = !0;
        }), !m) return null;
    }), t.suggest("group", ()=>Array.from(t.keys()).filter((f)=>t.compoundsWith("group", f))), t.compound("peer", 2, (f, g)=>{
        if (g.variant.kind === "arbitrary" && g.variant.relative) return null;
        let d = g.modifier ? `:where(.${r.prefix ? `${r.prefix}\\:` : ""}peer\\/${g.modifier.value})` : `:where(.${r.prefix ? `${r.prefix}\\:` : ""}peer)`, m = !1;
        if (F([
            f
        ], (w, { path: v })=>{
            if (w.kind !== "rule") return 0;
            for (let k1 of v.slice(0, -1))if (k1.kind === "rule") return m = !1, 2;
            let x = w.selector.replaceAll("&", d);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(x, ",").length > 1 && (x = `:is(${x})`), w.selector = `&:is(${x} ~ *)`, m = !0;
        }), !m) return null;
    }), t.suggest("peer", ()=>Array.from(t.keys()).filter((f)=>t.compoundsWith("peer", f))), i("first-letter", [
        "&::first-letter"
    ]), i("first-line", [
        "&::first-line"
    ]), i("marker", [
        "& *::marker",
        "&::marker",
        "& *::-webkit-details-marker",
        "&::-webkit-details-marker"
    ]), i("selection", [
        "& *::selection",
        "&::selection"
    ]), i("file", [
        "&::file-selector-button"
    ]), i("placeholder", [
        "&::placeholder"
    ]), i("backdrop", [
        "&::backdrop"
    ]), i("details-content", [
        "&::details-content"
    ]);
    {
        let f = function() {
            return L([
                z("@property", "--tw-content", [
                    l("syntax", '"*"'),
                    l("initial-value", '""'),
                    l("inherits", "false")
                ])
            ]);
        };
        var c = f;
        t.static("before", (g)=>{
            g.nodes = [
                M("&::before", [
                    f(),
                    l("content", "var(--tw-content)"),
                    ...g.nodes
                ])
            ];
        }, {
            compounds: 0
        }), t.static("after", (g)=>{
            g.nodes = [
                M("&::after", [
                    f(),
                    l("content", "var(--tw-content)"),
                    ...g.nodes
                ])
            ];
        }, {
            compounds: 0
        });
    }
    i("first", [
        "&:first-child"
    ]), i("last", [
        "&:last-child"
    ]), i("only", [
        "&:only-child"
    ]), i("odd", [
        "&:nth-child(odd)"
    ]), i("even", [
        "&:nth-child(even)"
    ]), i("first-of-type", [
        "&:first-of-type"
    ]), i("last-of-type", [
        "&:last-of-type"
    ]), i("only-of-type", [
        "&:only-of-type"
    ]), i("visited", [
        "&:visited"
    ]), i("target", [
        "&:target"
    ]), i("open", [
        "&:is([open], :popover-open, :open)"
    ]), i("default", [
        "&:default"
    ]), i("checked", [
        "&:checked"
    ]), i("indeterminate", [
        "&:indeterminate"
    ]), i("placeholder-shown", [
        "&:placeholder-shown"
    ]), i("autofill", [
        "&:autofill"
    ]), i("optional", [
        "&:optional"
    ]), i("required", [
        "&:required"
    ]), i("valid", [
        "&:valid"
    ]), i("invalid", [
        "&:invalid"
    ]), i("user-valid", [
        "&:user-valid"
    ]), i("user-invalid", [
        "&:user-invalid"
    ]), i("in-range", [
        "&:in-range"
    ]), i("out-of-range", [
        "&:out-of-range"
    ]), i("read-only", [
        "&:read-only"
    ]), i("empty", [
        "&:empty"
    ]), i("focus-within", [
        "&:focus-within"
    ]), t.static("hover", (f)=>{
        f.nodes = [
            M("&:hover", [
                z("@media", "(hover: hover)", f.nodes)
            ])
        ];
    }), i("focus", [
        "&:focus"
    ]), i("focus-visible", [
        "&:focus-visible"
    ]), i("active", [
        "&:active"
    ]), i("enabled", [
        "&:enabled"
    ]), i("disabled", [
        "&:disabled"
    ]), i("inert", [
        "&:is([inert], [inert] *)"
    ]), t.compound("in", 2, (f, g)=>{
        if (g.modifier) return null;
        let d = !1;
        if (F([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule") return 0;
            for (let v of w.slice(0, -1))if (v.kind === "rule") return d = !1, 2;
            m.selector = `:where(${m.selector.replaceAll("&", "*")}) &`, d = !0;
        }), !d) return null;
    }), t.suggest("in", ()=>Array.from(t.keys()).filter((f)=>t.compoundsWith("in", f))), t.compound("has", 2, (f, g)=>{
        if (g.modifier) return null;
        let d = !1;
        if (F([
            f
        ], (m, { path: w })=>{
            if (m.kind !== "rule") return 0;
            for (let v of w.slice(0, -1))if (v.kind === "rule") return d = !1, 2;
            m.selector = `&:has(${m.selector.replaceAll("&", "*")})`, d = !0;
        }), !d) return null;
    }), t.suggest("has", ()=>Array.from(t.keys()).filter((f)=>t.compoundsWith("has", f))), t.functional("aria", (f, g)=>{
        if (!g.value || g.modifier) return null;
        g.value.kind === "arbitrary" ? f.nodes = [
            M(`&[aria-${gr(g.value.value)}]`, f.nodes)
        ] : f.nodes = [
            M(`&[aria-${g.value.value}="true"]`, f.nodes)
        ];
    }), t.suggest("aria", ()=>[
            "busy",
            "checked",
            "disabled",
            "expanded",
            "hidden",
            "pressed",
            "readonly",
            "required",
            "selected"
        ]), t.functional("data", (f, g)=>{
        if (!g.value || g.modifier) return null;
        f.nodes = [
            M(`&[data-${gr(g.value.value)}]`, f.nodes)
        ];
    }), t.functional("nth", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-child(${g.value.value})`, f.nodes)
        ];
    }), t.functional("nth-last", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-last-child(${g.value.value})`, f.nodes)
        ];
    }), t.functional("nth-of-type", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-of-type(${g.value.value})`, f.nodes)
        ];
    }), t.functional("nth-last-of-type", (f, g)=>{
        if (!g.value || g.modifier || g.value.kind === "named" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(g.value.value)) return null;
        f.nodes = [
            M(`&:nth-last-of-type(${g.value.value})`, f.nodes)
        ];
    }), t.functional("supports", (f, g)=>{
        if (!g.value || g.modifier) return null;
        let d = g.value.value;
        if (d === null) return null;
        if (/^[\w-]*\s*\(/.test(d)) {
            let m = d.replace(/\b(and|or|not)\b/g, " $1 ");
            f.nodes = [
                z("@supports", m, f.nodes)
            ];
            return;
        }
        d.includes(":") || (d = `${d}: var(--tw)`), (d[0] !== "(" || d[d.length - 1] !== ")") && (d = `(${d})`), f.nodes = [
            z("@supports", d, f.nodes)
        ];
    }, {
        compounds: 1
    }), i("motion-safe", [
        "@media (prefers-reduced-motion: no-preference)"
    ]), i("motion-reduce", [
        "@media (prefers-reduced-motion: reduce)"
    ]), i("contrast-more", [
        "@media (prefers-contrast: more)"
    ]), i("contrast-less", [
        "@media (prefers-contrast: less)"
    ]);
    {
        let f = function(g, d, m, w) {
            if (g === d) return 0;
            let v = w.get(g);
            if (v === null) return m === "asc" ? -1 : 1;
            let x = w.get(d);
            return x === null ? m === "asc" ? 1 : -1 : we(v, x, m);
        };
        var u = f;
        {
            let g = r.namespace("--breakpoint"), d = new B((m)=>{
                switch(m.kind){
                    case "static":
                        return r.resolveValue(m.root, [
                            "--breakpoint"
                        ]) ?? null;
                    case "functional":
                        {
                            if (!m.value || m.modifier) return null;
                            let w = null;
                            return m.value.kind === "arbitrary" ? w = m.value.value : m.value.kind === "named" && (w = r.resolveValue(m.value.value, [
                                "--breakpoint"
                            ])), !w || w.includes("var(") ? null : w;
                        }
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            t.group(()=>{
                t.functional("max", (m, w)=>{
                    if (w.modifier) return null;
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        z("@media", `(width < ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "desc", d)), t.suggest("max", ()=>Array.from(g.keys()).filter((m)=>m !== null)), t.group(()=>{
                for (let [m, w] of r.namespace("--breakpoint"))m !== null && t.static(m, (v)=>{
                    v.nodes = [
                        z("@media", `(width >= ${w})`, v.nodes)
                    ];
                }, {
                    compounds: 1
                });
                t.functional("min", (m, w)=>{
                    if (w.modifier) return null;
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        z("@media", `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "asc", d)), t.suggest("min", ()=>Array.from(g.keys()).filter((m)=>m !== null));
        }
        {
            let g = r.namespace("--container"), d = new B((m)=>{
                switch(m.kind){
                    case "functional":
                        {
                            if (m.value === null) return null;
                            let w = null;
                            return m.value.kind === "arbitrary" ? w = m.value.value : m.value.kind === "named" && (w = r.resolveValue(m.value.value, [
                                "--container"
                            ])), !w || w.includes("var(") ? null : w;
                        }
                    case "static":
                    case "arbitrary":
                    case "compound":
                        return null;
                }
            });
            t.group(()=>{
                t.functional("@max", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        z("@container", w.modifier ? `${w.modifier.value} (width < ${v})` : `(width < ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "desc", d)), t.suggest("@max", ()=>Array.from(g.keys()).filter((m)=>m !== null)), t.group(()=>{
                t.functional("@", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        z("@container", w.modifier ? `${w.modifier.value} (width >= ${v})` : `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                }), t.functional("@min", (m, w)=>{
                    let v = d.get(w);
                    if (v === null) return null;
                    m.nodes = [
                        z("@container", w.modifier ? `${w.modifier.value} (width >= ${v})` : `(width >= ${v})`, m.nodes)
                    ];
                }, {
                    compounds: 1
                });
            }, (m, w)=>f(m, w, "asc", d)), t.suggest("@min", ()=>Array.from(g.keys()).filter((m)=>m !== null)), t.suggest("@", ()=>Array.from(g.keys()).filter((m)=>m !== null));
        }
    }
    return i("portrait", [
        "@media (orientation: portrait)"
    ]), i("landscape", [
        "@media (orientation: landscape)"
    ]), i("ltr", [
        '&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)'
    ]), i("rtl", [
        '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)'
    ]), i("dark", [
        "@media (prefers-color-scheme: dark)"
    ]), i("starting", [
        "@starting-style"
    ]), i("print", [
        "@media print"
    ]), i("forced-colors", [
        "@media (forced-colors: active)"
    ]), i("inverted-colors", [
        "@media (inverted-colors: inverted)"
    ]), i("pointer-none", [
        "@media (pointer: none)"
    ]), i("pointer-coarse", [
        "@media (pointer: coarse)"
    ]), i("pointer-fine", [
        "@media (pointer: fine)"
    ]), i("any-pointer-none", [
        "@media (any-pointer: none)"
    ]), i("any-pointer-coarse", [
        "@media (any-pointer: coarse)"
    ]), i("any-pointer-fine", [
        "@media (any-pointer: fine)"
    ]), i("noscript", [
        "@media (scripting: none)"
    ]), t;
}
function gr(r) {
    if (r.includes("=")) {
        let [t, ...i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, "="), e = i.join("=").trim();
        if (e[0] === "'" || e[0] === '"') return r;
        if (e.length > 1) {
            let n = e[e.length - 1];
            if (e[e.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return `${t}="${e.slice(0, -2)}" ${n}`;
        }
        return `${t}="${e}"`;
    }
    return r;
}
function At(r, t) {
    F(r, (i, { replaceWith: e })=>{
        if (i.kind === "at-rule" && i.name === "@slot") e(t);
        else if (i.kind === "at-rule" && (i.name === "@keyframes" || i.name === "@property")) return Object.assign(i, L([
            z(i.name, i.params, i.nodes)
        ])), 1;
    });
}
function vr(r) {
    let t = sr(r), i = hr(r), e = new B((u)=>er(u, c)), n = new B((u)=>Array.from(Xt(u, c))), s = new B((u)=>{
        let f = wr(u, c);
        try {
            xe(f.map(({ node: g })=>g), c);
        } catch  {
            return [];
        }
        return f;
    }), a = new B((u)=>{
        for (let f of qe(u))r.markUsedVariable(f);
    }), c = {
        theme: r,
        utilities: t,
        variants: i,
        invalidCandidates: new Set,
        important: !1,
        candidatesToCss (u) {
            let f = [];
            for (let g of u){
                let d = !1, { astNodes: m } = pe([
                    g
                ], this, {
                    onInvalidCandidate () {
                        d = !0;
                    }
                });
                m = ve(m, c, 0), m.length === 0 || d ? f.push(null) : f.push(ne(m));
            }
            return f;
        },
        getClassOrder (u) {
            return mr(this, u);
        },
        getClassList () {
            return pr(this);
        },
        getVariants () {
            return dr(this);
        },
        parseCandidate (u) {
            return n.get(u);
        },
        parseVariant (u) {
            return e.get(u);
        },
        compileAstNodes (u) {
            return s.get(u);
        },
        printCandidate (u) {
            return rr(c, u);
        },
        printVariant (u) {
            return He(u);
        },
        getVariantOrder () {
            let u = Array.from(e.values());
            u.sort((m, w)=>this.variants.compare(m, w));
            let f = new Map, g, d = 0;
            for (let m of u)m !== null && (g !== void 0 && this.variants.compare(g, m) !== 0 && d++, f.set(m, d), g = m);
            return f;
        },
        resolveThemeValue (u, f = !0) {
            let g = u.lastIndexOf("/"), d = null;
            g !== -1 && (d = u.slice(g + 1).trim(), u = u.slice(0, g).trim());
            let m = r.resolve(null, [
                u
            ], f ? 1 : 0) ?? void 0;
            return d && m ? Q(m, d) : m;
        },
        trackUsedVariables (u) {
            a.get(u);
        }
    };
    return c;
}
var Ct = [
    "container-type",
    "pointer-events",
    "visibility",
    "position",
    "inset",
    "inset-inline",
    "inset-block",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left",
    "isolation",
    "z-index",
    "order",
    "grid-column",
    "grid-column-start",
    "grid-column-end",
    "grid-row",
    "grid-row-start",
    "grid-row-end",
    "float",
    "clear",
    "--tw-container-component",
    "margin",
    "margin-inline",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "display",
    "field-sizing",
    "aspect-ratio",
    "height",
    "max-height",
    "min-height",
    "width",
    "max-width",
    "min-width",
    "flex",
    "flex-shrink",
    "flex-grow",
    "flex-basis",
    "table-layout",
    "caption-side",
    "border-collapse",
    "border-spacing",
    "transform-origin",
    "translate",
    "--tw-translate-x",
    "--tw-translate-y",
    "--tw-translate-z",
    "scale",
    "--tw-scale-x",
    "--tw-scale-y",
    "--tw-scale-z",
    "rotate",
    "--tw-rotate-x",
    "--tw-rotate-y",
    "--tw-rotate-z",
    "--tw-skew-x",
    "--tw-skew-y",
    "transform",
    "animation",
    "cursor",
    "touch-action",
    "--tw-pan-x",
    "--tw-pan-y",
    "--tw-pinch-zoom",
    "resize",
    "scroll-snap-type",
    "--tw-scroll-snap-strictness",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-margin",
    "scroll-margin-inline",
    "scroll-margin-block",
    "scroll-margin-inline-start",
    "scroll-margin-inline-end",
    "scroll-margin-top",
    "scroll-margin-right",
    "scroll-margin-bottom",
    "scroll-margin-left",
    "scroll-padding",
    "scroll-padding-inline",
    "scroll-padding-block",
    "scroll-padding-inline-start",
    "scroll-padding-inline-end",
    "scroll-padding-top",
    "scroll-padding-right",
    "scroll-padding-bottom",
    "scroll-padding-left",
    "list-style-position",
    "list-style-type",
    "list-style-image",
    "appearance",
    "columns",
    "break-before",
    "break-inside",
    "break-after",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-template-columns",
    "grid-template-rows",
    "flex-direction",
    "flex-wrap",
    "place-content",
    "place-items",
    "align-content",
    "align-items",
    "justify-content",
    "justify-items",
    "gap",
    "column-gap",
    "row-gap",
    "--tw-space-x-reverse",
    "--tw-space-y-reverse",
    "divide-x-width",
    "divide-y-width",
    "--tw-divide-y-reverse",
    "divide-style",
    "divide-color",
    "place-self",
    "align-self",
    "justify-self",
    "overflow",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "scroll-behavior",
    "border-radius",
    "border-start-radius",
    "border-end-radius",
    "border-top-radius",
    "border-right-radius",
    "border-bottom-radius",
    "border-left-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-width",
    "border-inline-width",
    "border-block-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-style",
    "border-inline-style",
    "border-block-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-color",
    "border-inline-color",
    "border-block-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "background-color",
    "background-image",
    "--tw-gradient-position",
    "--tw-gradient-stops",
    "--tw-gradient-via-stops",
    "--tw-gradient-from",
    "--tw-gradient-from-position",
    "--tw-gradient-via",
    "--tw-gradient-via-position",
    "--tw-gradient-to",
    "--tw-gradient-to-position",
    "mask-image",
    "--tw-mask-top",
    "--tw-mask-top-from-color",
    "--tw-mask-top-from-position",
    "--tw-mask-top-to-color",
    "--tw-mask-top-to-position",
    "--tw-mask-right",
    "--tw-mask-right-from-color",
    "--tw-mask-right-from-position",
    "--tw-mask-right-to-color",
    "--tw-mask-right-to-position",
    "--tw-mask-bottom",
    "--tw-mask-bottom-from-color",
    "--tw-mask-bottom-from-position",
    "--tw-mask-bottom-to-color",
    "--tw-mask-bottom-to-position",
    "--tw-mask-left",
    "--tw-mask-left-from-color",
    "--tw-mask-left-from-position",
    "--tw-mask-left-to-color",
    "--tw-mask-left-to-position",
    "--tw-mask-linear",
    "--tw-mask-linear-position",
    "--tw-mask-linear-from-color",
    "--tw-mask-linear-from-position",
    "--tw-mask-linear-to-color",
    "--tw-mask-linear-to-position",
    "--tw-mask-radial",
    "--tw-mask-radial-shape",
    "--tw-mask-radial-size",
    "--tw-mask-radial-position",
    "--tw-mask-radial-from-color",
    "--tw-mask-radial-from-position",
    "--tw-mask-radial-to-color",
    "--tw-mask-radial-to-position",
    "--tw-mask-conic",
    "--tw-mask-conic-position",
    "--tw-mask-conic-from-color",
    "--tw-mask-conic-from-position",
    "--tw-mask-conic-to-color",
    "--tw-mask-conic-to-position",
    "box-decoration-break",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-position",
    "background-repeat",
    "background-origin",
    "mask-composite",
    "mask-mode",
    "mask-type",
    "mask-size",
    "mask-clip",
    "mask-position",
    "mask-repeat",
    "mask-origin",
    "fill",
    "stroke",
    "stroke-width",
    "object-fit",
    "object-position",
    "padding",
    "padding-inline",
    "padding-block",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "text-align",
    "text-indent",
    "vertical-align",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "letter-spacing",
    "text-wrap",
    "overflow-wrap",
    "word-break",
    "text-overflow",
    "hyphens",
    "white-space",
    "color",
    "text-transform",
    "font-style",
    "font-stretch",
    "font-variant-numeric",
    "text-decoration-line",
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-underline-offset",
    "-webkit-font-smoothing",
    "placeholder-color",
    "caret-color",
    "accent-color",
    "color-scheme",
    "opacity",
    "background-blend-mode",
    "mix-blend-mode",
    "box-shadow",
    "--tw-shadow",
    "--tw-shadow-color",
    "--tw-ring-shadow",
    "--tw-ring-color",
    "--tw-inset-shadow",
    "--tw-inset-shadow-color",
    "--tw-inset-ring-shadow",
    "--tw-inset-ring-color",
    "--tw-ring-offset-width",
    "--tw-ring-offset-color",
    "outline",
    "outline-width",
    "outline-offset",
    "outline-color",
    "--tw-blur",
    "--tw-brightness",
    "--tw-contrast",
    "--tw-drop-shadow",
    "--tw-grayscale",
    "--tw-hue-rotate",
    "--tw-invert",
    "--tw-saturate",
    "--tw-sepia",
    "filter",
    "--tw-backdrop-blur",
    "--tw-backdrop-brightness",
    "--tw-backdrop-contrast",
    "--tw-backdrop-grayscale",
    "--tw-backdrop-hue-rotate",
    "--tw-backdrop-invert",
    "--tw-backdrop-opacity",
    "--tw-backdrop-saturate",
    "--tw-backdrop-sepia",
    "backdrop-filter",
    "transition-property",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "will-change",
    "contain",
    "content",
    "forced-color-adjust"
];
function pe(r, t, { onInvalidCandidate: i } = {}) {
    let e = new Map, n = [], s = new Map;
    for (let c of r){
        if (t.invalidCandidates.has(c)) {
            i?.(c);
            continue;
        }
        let u = t.parseCandidate(c);
        if (u.length === 0) {
            i?.(c);
            continue;
        }
        s.set(c, u);
    }
    let a = t.getVariantOrder();
    for (let [c, u] of s){
        let f = !1;
        for (let g of u){
            let d = t.compileAstNodes(g);
            if (d.length !== 0) {
                f = !0;
                for (let { node: m, propertySort: w } of d){
                    let v = 0n;
                    for (let x of g.variants)v |= 1n << BigInt(a.get(x));
                    e.set(m, {
                        properties: w,
                        variants: v,
                        candidate: c
                    }), n.push(m);
                }
            }
        }
        f || i?.(c);
    }
    return n.sort((c, u)=>{
        let f = e.get(c), g = e.get(u);
        if (f.variants - g.variants !== 0n) return Number(f.variants - g.variants);
        let d = 0;
        for(; d < f.properties.order.length && d < g.properties.order.length && f.properties.order[d] === g.properties.order[d];)d += 1;
        return (f.properties.order[d] ?? 1 / 0) - (g.properties.order[d] ?? 1 / 0) || g.properties.count - f.properties.count || Qe(f.candidate, g.candidate);
    }), {
        astNodes: n,
        nodeSorting: e
    };
}
function wr(r, t) {
    let i = Oi(r, t);
    if (i.length === 0) return [];
    let e = [], n = `.${fe(r.raw)}`;
    for (let s of i){
        let a = Ki(s);
        (r.important || t.important) && br(s);
        let c = {
            kind: "rule",
            selector: n,
            nodes: s
        };
        for (let u of r.variants)if (Ae(c, u, t.variants) === null) return [];
        e.push({
            node: c,
            propertySort: a
        });
    }
    return e;
}
function Ae(r, t, i, e = 0) {
    if (t.kind === "arbitrary") {
        if (t.relative && e === 0) return null;
        r.nodes = [
            H(t.selector, r.nodes)
        ];
        return;
    }
    let { applyFn: n } = i.get(t.root);
    if (t.kind === "compound") {
        let a = z("@slot");
        if (Ae(a, t.variant, i, e + 1) === null || t.root === "not" && a.nodes.length > 1) return null;
        for (let u of a.nodes)if (u.kind !== "rule" && u.kind !== "at-rule" || n(u, t) === null) return null;
        F(a.nodes, (u)=>{
            if ((u.kind === "rule" || u.kind === "at-rule") && u.nodes.length <= 0) return u.nodes = r.nodes, 1;
        }), r.nodes = a.nodes;
        return;
    }
    if (n(r, t) === null) return null;
}
function yr(r) {
    let t = r.options?.types ?? [];
    return t.length > 1 && t.includes("any");
}
function Oi(r, t) {
    if (r.kind === "arbitrary") {
        let a = r.value;
        return r.modifier && (a = X(a, r.modifier, t.theme)), a === null ? [] : [
            [
                l(r.property, a)
            ]
        ];
    }
    let i = t.utilities.get(r.root) ?? [], e = [], n = i.filter((a)=>!yr(a));
    for (let a of n){
        if (a.kind !== r.kind) continue;
        let c = a.compileFn(r);
        if (c !== void 0) {
            if (c === null) return e;
            e.push(c);
        }
    }
    if (e.length > 0) return e;
    let s = i.filter((a)=>yr(a));
    for (let a of s){
        if (a.kind !== r.kind) continue;
        let c = a.compileFn(r);
        if (c !== void 0) {
            if (c === null) return e;
            e.push(c);
        }
    }
    return e;
}
function br(r) {
    for (let t of r)t.kind !== "at-root" && (t.kind === "declaration" ? t.important = !0 : (t.kind === "rule" || t.kind === "at-rule") && br(t.nodes));
}
function Ki(r) {
    let t = new Set, i = 0, e = r.slice(), n = !1;
    for(; e.length > 0;){
        let s = e.shift();
        if (s.kind === "declaration") {
            if (s.value === void 0 || (i++, n)) continue;
            if (s.property === "--tw-sort") {
                let c = Ct.indexOf(s.value ?? "");
                if (c !== -1) {
                    t.add(c), n = !0;
                    continue;
                }
            }
            let a = Ct.indexOf(s.property);
            a !== -1 && t.add(a);
        } else if (s.kind === "rule" || s.kind === "at-rule") for (let a of s.nodes)e.push(a);
    }
    return {
        order: Array.from(t).sort((s, a)=>s - a),
        count: i
    };
}
function Oe(r, t) {
    let i = 0, e = H("&", r), n = new Set, s = new B(()=>new Set), a = new B(()=>new Set);
    F([
        e
    ], (d, { parent: m, path: w })=>{
        if (d.kind === "at-rule") {
            if (d.name === "@keyframes") return F(d.nodes, (v)=>{
                if (v.kind === "at-rule" && v.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
            }), 1;
            if (d.name === "@utility") {
                let v = d.params.replace(/-\*$/, "");
                a.get(v).add(d), F(d.nodes, (x)=>{
                    if (!(x.kind !== "at-rule" || x.name !== "@apply")) {
                        n.add(d);
                        for (let k1 of kr(x, t))s.get(d).add(k1);
                    }
                });
                return;
            }
            if (d.name === "@apply") {
                if (m === null) return;
                i |= 1, n.add(m);
                for (let v of kr(d, t))for (let x of w)x !== d && n.has(x) && s.get(x).add(v);
            }
        }
    });
    let c = new Set, u = [], f = new Set;
    function g(d, m = []) {
        if (!c.has(d)) {
            if (f.has(d)) {
                let w = m[(m.indexOf(d) + 1) % m.length];
                throw d.kind === "at-rule" && d.name === "@utility" && w.kind === "at-rule" && w.name === "@utility" && F(d.nodes, (v)=>{
                    if (v.kind !== "at-rule" || v.name !== "@apply") return;
                    let x = v.params.split(/\s+/g);
                    for (let k1 of x)for (let N of t.parseCandidate(k1))switch(N.kind){
                        case "arbitrary":
                            break;
                        case "static":
                        case "functional":
                            if (w.params.replace(/-\*$/, "") === N.root) throw new Error(`You cannot \`@apply\` the \`${k1}\` utility here because it creates a circular dependency.`);
                            break;
                        default:
                    }
                }), new Error(`Circular dependency detected:

${ne([
                    d
                ])}
Relies on:

${ne([
                    w
                ])}`);
            }
            f.add(d);
            for (let w of s.get(d))for (let v of a.get(w))m.push(d), g(v, m), m.pop();
            c.add(d), f.delete(d), u.push(d);
        }
    }
    for (let d of n)g(d);
    for (let d of u)"nodes" in d && F(d.nodes, (m, { replaceWith: w })=>{
        if (m.kind !== "at-rule" || m.name !== "@apply") return;
        let v = m.params.split(/(\s+)/g), x = {}, k1 = 0;
        for (let [N, b] of v.entries())N % 2 === 0 && (x[b] = k1), k1 += b.length;
        {
            let N = Object.keys(x), b = pe(N, t, {
                onInvalidCandidate: (R)=>{
                    if (t.theme.prefix && !R.startsWith(t.theme.prefix)) throw new Error(`Cannot apply unprefixed utility class \`${R}\`. Did you mean \`${t.theme.prefix}:${R}\`?`);
                    if (t.invalidCandidates.has(R)) throw new Error(`Cannot apply utility class \`${R}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
                    let _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(R, ":");
                    if (_.length > 1) {
                        let K = _.pop();
                        if (t.candidatesToCss([
                            K
                        ])[0]) {
                            let G = t.candidatesToCss(_.map((W)=>`${W}:[--tw-variant-check:1]`)), I = _.filter((W, Z)=>G[Z] === null);
                            if (I.length > 0) {
                                if (I.length === 1) throw new Error(`Cannot apply utility class \`${R}\` because the ${I.map((W)=>`\`${W}\``)} variant does not exist.`);
                                {
                                    let W = new Intl.ListFormat("en", {
                                        style: "long",
                                        type: "conjunction"
                                    });
                                    throw new Error(`Cannot apply utility class \`${R}\` because the ${W.format(I.map((Z)=>`\`${Z}\``))} variants do not exist.`);
                                }
                            }
                        }
                    }
                    throw t.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${R}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${R}\``);
                }
            }), S = m.src, P = b.astNodes.map((R)=>{
                let _ = b.nodeSorting.get(R)?.candidate, K = _ ? x[_] : void 0;
                if (R = structuredClone(R), !S || !_ || K === void 0) return F([
                    R
                ], (I)=>{
                    I.src = S;
                }), R;
                let G = [
                    S[0],
                    S[1],
                    S[2]
                ];
                return G[1] += 7 + K, G[2] = G[1] + _.length, F([
                    R
                ], (I)=>{
                    I.src = G;
                }), R;
            }), U = [];
            for (let R of P)if (R.kind === "rule") for (let _ of R.nodes)U.push(_);
            else U.push(R);
            w(U);
        }
    });
    return i;
}
function* kr(r, t) {
    for (let i of r.params.split(/\s+/g))for (let e of t.parseCandidate(i))switch(e.kind){
        case "arbitrary":
            break;
        case "static":
        case "functional":
            yield e.root;
            break;
        default:
    }
}
async function $t(r, t, i, e = 0, n = !1) {
    let s = 0, a = [];
    return F(r, (c, { replaceWith: u })=>{
        if (c.kind === "at-rule" && (c.name === "@import" || c.name === "@reference")) {
            let f = _i(q(c.params));
            if (f === null) return;
            c.name === "@reference" && (f.media = "reference"), s |= 2;
            let { uri: g, layer: d, media: m, supports: w } = f;
            if (g.startsWith("data:") || g.startsWith("http://") || g.startsWith("https://")) return;
            let v = le({}, []);
            return a.push((async ()=>{
                if (e > 100) throw new Error(`Exceeded maximum recursion depth while resolving \`${g}\` in \`${t}\`)`);
                let x = await i(g, t), k1 = me(x.content, {
                    from: n ? x.path : void 0
                });
                await $t(k1, x.base, i, e + 1, n), v.nodes = ji(c, [
                    le({
                        base: x.base
                    }, k1)
                ], d, m, w);
            })()), u(v), 1;
        }
    }), a.length > 0 && await Promise.all(a), s;
}
function _i(r) {
    let t, i = null, e = null, n = null;
    for(let s = 0; s < r.length; s++){
        let a = r[s];
        if (a.kind !== "separator") {
            if (a.kind === "word" && !t) {
                if (!a.value || a.value[0] !== '"' && a.value[0] !== "'") return null;
                t = a.value.slice(1, -1);
                continue;
            }
            if (a.kind === "function" && a.value.toLowerCase() === "url" || !t) return null;
            if ((a.kind === "word" || a.kind === "function") && a.value.toLowerCase() === "layer") {
                if (i) return null;
                if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
                "nodes" in a ? i = Y(a.nodes) : i = "";
                continue;
            }
            if (a.kind === "function" && a.value.toLowerCase() === "supports") {
                if (n) return null;
                n = Y(a.nodes);
                continue;
            }
            e = Y(r.slice(s));
            break;
        }
    }
    return t ? {
        uri: t,
        layer: i,
        media: e,
        supports: n
    } : null;
}
function ji(r, t, i, e, n) {
    let s = t;
    if (i !== null) {
        let a = z("@layer", i, s);
        a.src = r.src, s = [
            a
        ];
    }
    if (e !== null) {
        let a = z("@media", e, s);
        a.src = r.src, s = [
            a
        ];
    }
    if (n !== null) {
        let a = z("@supports", n[0] === "(" ? n : `(${n})`, s);
        a.src = r.src, s = [
            a
        ];
    }
    return s;
}
function Ce(r, t = null) {
    return Array.isArray(r) && r.length === 2 && typeof r[1] == "object" && typeof r[1] !== null ? t ? r[1][t] ?? null : r[0] : Array.isArray(r) && t === null ? r.join(", ") : typeof r == "string" && t === null ? r : null;
}
function xr(r, { theme: t }, i) {
    for (let e of i){
        let n = et([
            e
        ]);
        n && r.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [e, n] of Di(t)){
        if (typeof n != "string" && typeof n != "number") continue;
        if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), e[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
            let a = typeof n == "string" ? parseFloat(n) : n;
            a >= 0 && a <= 1 && (n = a * 100 + "%");
        }
        let s = et(e);
        s && r.theme.add(`--${s}`, "" + n, 7);
    }
    if (Object.hasOwn(t, "fontFamily")) {
        let e = 5;
        {
            let n = Ce(t.fontFamily.sans);
            n && r.theme.hasDefault("--font-sans") && (r.theme.add("--default-font-family", n, e), r.theme.add("--default-font-feature-settings", Ce(t.fontFamily.sans, "fontFeatureSettings") ?? "normal", e), r.theme.add("--default-font-variation-settings", Ce(t.fontFamily.sans, "fontVariationSettings") ?? "normal", e));
        }
        {
            let n = Ce(t.fontFamily.mono);
            n && r.theme.hasDefault("--font-mono") && (r.theme.add("--default-mono-font-family", n, e), r.theme.add("--default-mono-font-feature-settings", Ce(t.fontFamily.mono, "fontFeatureSettings") ?? "normal", e), r.theme.add("--default-mono-font-variation-settings", Ce(t.fontFamily.mono, "fontVariationSettings") ?? "normal", e));
        }
    }
    return t;
}
function Di(r) {
    let t = [];
    return Ar(r, [], (i, e)=>{
        if (Ii(i)) return t.push([
            e,
            i
        ]), 1;
        if (Fi(i)) {
            t.push([
                e,
                i[0]
            ]);
            for (let n of Reflect.ownKeys(i[1]))t.push([
                [
                    ...e,
                    `-${n}`
                ],
                i[1][n]
            ]);
            return 1;
        }
        if (Array.isArray(i) && i.every((n)=>typeof n == "string")) return e[0] === "fontSize" ? (t.push([
            e,
            i[0]
        ]), i.length >= 2 && t.push([
            [
                ...e,
                "-line-height"
            ],
            i[1]
        ])) : t.push([
            e,
            i.join(", ")
        ]), 1;
    }), t;
}
var Ui = /^[a-zA-Z0-9-_%/\.]+$/;
function et(r) {
    if (r[0] === "container") return null;
    r = structuredClone(r), r[0] === "animation" && (r[0] = "animate"), r[0] === "aspectRatio" && (r[0] = "aspect"), r[0] === "borderRadius" && (r[0] = "radius"), r[0] === "boxShadow" && (r[0] = "shadow"), r[0] === "colors" && (r[0] = "color"), r[0] === "containers" && (r[0] = "container"), r[0] === "fontFamily" && (r[0] = "font"), r[0] === "fontSize" && (r[0] = "text"), r[0] === "letterSpacing" && (r[0] = "tracking"), r[0] === "lineHeight" && (r[0] = "leading"), r[0] === "maxWidth" && (r[0] = "container"), r[0] === "screens" && (r[0] = "breakpoint"), r[0] === "transitionTimingFunction" && (r[0] = "ease");
    for (let t of r)if (!Ui.test(t)) return null;
    return r.map((t, i, e)=>t === "1" && i !== e.length - 1 ? "" : t).map((t)=>t.replaceAll(".", "_").replace(/([a-z])([A-Z])/g, (i, e, n)=>`${e}-${n.toLowerCase()}`)).filter((t, i)=>t !== "DEFAULT" || i !== r.length - 1).join("-");
}
function Ii(r) {
    return typeof r == "number" || typeof r == "string";
}
function Fi(r) {
    if (!Array.isArray(r) || r.length !== 2 || typeof r[0] != "string" && typeof r[0] != "number" || r[1] === void 0 || r[1] === null || typeof r[1] != "object") return !1;
    for (let t of Reflect.ownKeys(r[1]))if (typeof t != "string" || typeof r[1][t] != "string" && typeof r[1][t] != "number") return !1;
    return !0;
}
function Ar(r, t = [], i) {
    for (let e of Reflect.ownKeys(r)){
        let n = r[e];
        if (n == null) continue;
        let s = [
            ...t,
            e
        ], a = i(n, s) ?? 0;
        if (a !== 1) {
            if (a === 2) return 2;
            if (!(!Array.isArray(n) && typeof n != "object") && Ar(n, s, i) === 2) return 2;
        }
    }
}
function tt(r) {
    let t = [];
    for (let i of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, ".")){
        if (!i.includes("[")) {
            t.push(i);
            continue;
        }
        let e = 0;
        for(;;){
            let n = i.indexOf("[", e), s = i.indexOf("]", n);
            if (n === -1 || s === -1) break;
            n > e && t.push(i.slice(e, n)), t.push(i.slice(n + 1, s)), e = s + 1;
        }
        e <= i.length - 1 && t.push(i.slice(e));
    }
    return t;
}
function $e(r) {
    if (Object.prototype.toString.call(r) !== "[object Object]") return !1;
    let t = Object.getPrototypeOf(r);
    return t === null || Object.getPrototypeOf(t) === null;
}
function Ke(r, t, i, e = []) {
    for (let n of t)if (n != null) for (let s of Reflect.ownKeys(n)){
        e.push(s);
        let a = i(r[s], n[s], e);
        a !== void 0 ? r[s] = a : !$e(r[s]) || !$e(n[s]) ? r[s] = n[s] : r[s] = Ke({}, [
            r[s],
            n[s]
        ], i, e), e.pop();
    }
    return r;
}
function rt(r, t, i) {
    return function(n, s) {
        let a = n.lastIndexOf("/"), c = null;
        a !== -1 && (c = n.slice(a + 1).trim(), n = n.slice(0, a).trim());
        let u = (()=>{
            let f = tt(n), [g, d] = Li(r.theme, f), m = i(Cr(t() ?? {}, f) ?? null);
            if (typeof m == "string" && (m = m.replace("<alpha-value>", "1")), typeof g != "object") return typeof d != "object" && d & 4 ? m ?? g : g;
            if (m !== null && typeof m == "object" && !Array.isArray(m)) {
                let w = Ke({}, [
                    m
                ], (v, x)=>x);
                if (g === null && Object.hasOwn(m, "__CSS_VALUES__")) {
                    let v = {};
                    for(let x in m.__CSS_VALUES__)v[x] = m[x], delete w[x];
                    g = v;
                }
                for(let v in g)v !== "__CSS_VALUES__" && (m?.__CSS_VALUES__?.[v] & 4 && Cr(w, v.split("-")) !== void 0 || (w[ge(v)] = g[v]));
                return w;
            }
            if (Array.isArray(g) && Array.isArray(d) && Array.isArray(m)) {
                let w = g[0], v = g[1];
                d[0] & 4 && (w = m[0] ?? w);
                for (let x of Object.keys(v))d[1][x] & 4 && (v[x] = m[1][x] ?? v[x]);
                return [
                    w,
                    v
                ];
            }
            return g ?? m;
        })();
        return c && typeof u == "string" && (u = Q(u, c)), u ?? s;
    };
}
function Li(r, t) {
    if (t.length === 1 && t[0].startsWith("--")) return [
        r.get([
            t[0]
        ]),
        r.getOptions(t[0])
    ];
    let i = et(t), e = new Map, n = new B(()=>new Map), s = r.namespace(`--${i}`);
    if (s.size === 0) return [
        null,
        0
    ];
    let a = new Map;
    for (let [g, d] of s){
        if (!g || !g.includes("--")) {
            e.set(g, d), a.set(g, r.getOptions(g ? `--${i}-${g}` : `--${i}`));
            continue;
        }
        let m = g.indexOf("--"), w = g.slice(0, m), v = g.slice(m + 2);
        v = v.replace(/-([a-z])/g, (x, k1)=>k1.toUpperCase()), n.get(w === "" ? null : w).set(v, [
            d,
            r.getOptions(`--${i}${g}`)
        ]);
    }
    let c = r.getOptions(`--${i}`);
    for (let [g, d] of n){
        let m = e.get(g);
        if (typeof m != "string") continue;
        let w = {}, v = {};
        for (let [x, [k1, N]] of d)w[x] = k1, v[x] = N;
        e.set(g, [
            m,
            w
        ]), a.set(g, [
            c,
            v
        ]);
    }
    let u = {}, f = {};
    for (let [g, d] of e)$r(u, [
        g ?? "DEFAULT"
    ], d);
    for (let [g, d] of a)$r(f, [
        g ?? "DEFAULT"
    ], d);
    return t[t.length - 1] === "DEFAULT" ? [
        u?.DEFAULT ?? null,
        f.DEFAULT ?? 0
    ] : "DEFAULT" in u && Object.keys(u).length === 1 ? [
        u.DEFAULT,
        f.DEFAULT ?? 0
    ] : (u.__CSS_VALUES__ = f, [
        u,
        f
    ]);
}
function Cr(r, t) {
    for(let i = 0; i < t.length; ++i){
        let e = t[i];
        if (r?.[e] === void 0) {
            if (t[i + 1] === void 0) return;
            t[i + 1] = `${e}-${t[i + 1]}`;
            continue;
        }
        r = r[e];
    }
    return r;
}
function $r(r, t, i) {
    for (let e of t.slice(0, -1))r[e] === void 0 && (r[e] = {}), r = r[e];
    r[t[t.length - 1]] = i;
}
function zi(r) {
    return {
        kind: "combinator",
        value: r
    };
}
function Mi(r, t) {
    return {
        kind: "function",
        value: r,
        nodes: t
    };
}
function _e(r) {
    return {
        kind: "selector",
        value: r
    };
}
function Wi(r) {
    return {
        kind: "separator",
        value: r
    };
}
function Bi(r) {
    return {
        kind: "value",
        value: r
    };
}
function je(r, t, i = null) {
    for(let e = 0; e < r.length; e++){
        let n = r[e], s = !1, a = 0, c = t(n, {
            parent: i,
            replaceWith (u) {
                s || (s = !0, Array.isArray(u) ? u.length === 0 ? (r.splice(e, 1), a = 0) : u.length === 1 ? (r[e] = u[0], a = 1) : (r.splice(e, 1, ...u), a = u.length) : (r[e] = u, a = 1));
            }
        }) ?? 0;
        if (s) {
            c === 0 ? e-- : e += a - 1;
            continue;
        }
        if (c === 2) return 2;
        if (c !== 1 && n.kind === "function" && je(n.nodes, t, n) === 2) return 2;
    }
}
function De(r) {
    let t = "";
    for (let i of r)switch(i.kind){
        case "combinator":
        case "selector":
        case "separator":
        case "value":
            {
                t += i.value;
                break;
            }
        case "function":
            t += i.value + "(" + De(i.nodes) + ")";
    }
    return t;
}
var Vr = 92, qi = 93, Nr = 41, Gi = 58, Sr = 44, Ji = 34, Hi = 46, Tr = 62, Er = 10, Yi = 35, Pr = 91, Rr = 40, Or = 43, Zi = 39, Kr = 32, _r = 9, jr = 126;
function it(r) {
    r = r.replaceAll(`\r
`, `
`);
    let t = [], i = [], e = null, n = "", s;
    for(let a = 0; a < r.length; a++){
        let c = r.charCodeAt(a);
        switch(c){
            case Sr:
            case Tr:
            case Er:
            case Kr:
            case Or:
            case _r:
            case jr:
                {
                    if (n.length > 0) {
                        let m = _e(n);
                        e ? e.nodes.push(m) : t.push(m), n = "";
                    }
                    let u = a, f = a + 1;
                    for(; f < r.length && (s = r.charCodeAt(f), !(s !== Sr && s !== Tr && s !== Er && s !== Kr && s !== Or && s !== _r && s !== jr)); f++);
                    a = f - 1;
                    let g = r.slice(u, f), d = g.trim() === "," ? Wi(g) : zi(g);
                    e ? e.nodes.push(d) : t.push(d);
                    break;
                }
            case Rr:
                {
                    let u = Mi(n, []);
                    if (n = "", u.value !== ":not" && u.value !== ":where" && u.value !== ":has" && u.value !== ":is") {
                        let f = a + 1, g = 0;
                        for(let m = a + 1; m < r.length; m++){
                            if (s = r.charCodeAt(m), s === Rr) {
                                g++;
                                continue;
                            }
                            if (s === Nr) {
                                if (g === 0) {
                                    a = m;
                                    break;
                                }
                                g--;
                            }
                        }
                        let d = a;
                        u.nodes.push(Bi(r.slice(f, d))), n = "", a = d, e ? e.nodes.push(u) : t.push(u);
                        break;
                    }
                    e ? e.nodes.push(u) : t.push(u), i.push(u), e = u;
                    break;
                }
            case Nr:
                {
                    let u = i.pop();
                    if (n.length > 0) {
                        let f = _e(n);
                        u.nodes.push(f), n = "";
                    }
                    i.length > 0 ? e = i[i.length - 1] : e = null;
                    break;
                }
            case Hi:
            case Gi:
            case Yi:
                {
                    if (n.length > 0) {
                        let u = _e(n);
                        e ? e.nodes.push(u) : t.push(u);
                    }
                    n = String.fromCharCode(c);
                    break;
                }
            case Pr:
                {
                    if (n.length > 0) {
                        let g = _e(n);
                        e ? e.nodes.push(g) : t.push(g);
                    }
                    n = "";
                    let u = a, f = 0;
                    for(let g = a + 1; g < r.length; g++){
                        if (s = r.charCodeAt(g), s === Pr) {
                            f++;
                            continue;
                        }
                        if (s === qi) {
                            if (f === 0) {
                                a = g;
                                break;
                            }
                            f--;
                        }
                    }
                    n += r.slice(u, a + 1);
                    break;
                }
            case Zi:
            case Ji:
                {
                    let u = a;
                    for(let f = a + 1; f < r.length; f++)if (s = r.charCodeAt(f), s === Vr) f += 1;
                    else if (s === c) {
                        a = f;
                        break;
                    }
                    n += r.slice(u, a + 1);
                    break;
                }
            case Vr:
                {
                    let u = r.charCodeAt(a + 1);
                    n += String.fromCharCode(c) + String.fromCharCode(u), a += 1;
                    break;
                }
            default:
                n += String.fromCharCode(c);
        }
    }
    return n.length > 0 && t.push(_e(n)), t;
}
var Dr = /^[a-z@][a-zA-Z0-9/%._-]*$/;
function Vt({ designSystem: r, ast: t, resolvedConfig: i, featuresRef: e, referenceMode: n }) {
    let s = {
        addBase (a) {
            if (n) return;
            let c = ae(a);
            e.current |= xe(c, r), t.push(z("@layer", "base", c));
        },
        addVariant (a, c) {
            if (!Xe.test(a)) throw new Error(`\`addVariant('${a}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
            if (typeof c == "string") {
                if (c.includes(":merge(")) return;
            } else if (Array.isArray(c)) {
                if (c.some((f)=>f.includes(":merge("))) return;
            } else if (typeof c == "object") {
                let f = function(g, d) {
                    return Object.entries(g).some(([m, w])=>m.includes(d) || typeof w == "object" && f(w, d));
                };
                var u = f;
                if (f(c, ":merge(")) return;
            }
            typeof c == "string" || Array.isArray(c) ? r.variants.static(a, (f)=>{
                f.nodes = Ur(c, f.nodes);
            }, {
                compounds: ye(typeof c == "string" ? [
                    c
                ] : c)
            }) : typeof c == "object" && r.variants.fromAst(a, ae(c));
        },
        matchVariant (a, c, u) {
            function f(d, m, w) {
                let v = c(d, {
                    modifier: m?.value ?? null
                });
                return Ur(v, w);
            }
            try {
                let d = c("a", {
                    modifier: null
                });
                if (typeof d == "string" && d.includes(":merge(")) return;
                if (Array.isArray(d) && d.some((m)=>m.includes(":merge("))) return;
            } catch  {}
            let g = Object.keys(u?.values ?? {});
            r.variants.group(()=>{
                r.variants.functional(a, (d, m)=>{
                    if (!m.value) {
                        if (u?.values && "DEFAULT" in u.values) {
                            d.nodes = f(u.values.DEFAULT, m.modifier, d.nodes);
                            return;
                        }
                        return null;
                    }
                    if (m.value.kind === "arbitrary") d.nodes = f(m.value.value, m.modifier, d.nodes);
                    else if (m.value.kind === "named" && u?.values) {
                        let w = u.values[m.value.value];
                        if (typeof w != "string") return;
                        d.nodes = f(w, m.modifier, d.nodes);
                    }
                });
            }, (d, m)=>{
                if (d.kind !== "functional" || m.kind !== "functional") return 0;
                let w = d.value ? d.value.value : "DEFAULT", v = m.value ? m.value.value : "DEFAULT", x = u?.values?.[w] ?? w, k1 = u?.values?.[v] ?? v;
                if (u && typeof u.sort == "function") return u.sort({
                    value: x,
                    modifier: d.modifier?.value ?? null
                }, {
                    value: k1,
                    modifier: m.modifier?.value ?? null
                });
                let N = g.indexOf(w), b = g.indexOf(v);
                return N = N === -1 ? g.length : N, b = b === -1 ? g.length : b, N !== b ? N - b : x < k1 ? -1 : 1;
            });
        },
        addUtilities (a) {
            a = Array.isArray(a) ? a : [
                a
            ];
            let c = a.flatMap((f)=>Object.entries(f));
            c = c.flatMap(([f, g])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(f, ",").map((d)=>[
                        d.trim(),
                        g
                    ]));
            let u = new B(()=>[]);
            for (let [f, g] of c){
                if (f.startsWith("@keyframes ")) {
                    n || t.push(H(f, ae(g)));
                    continue;
                }
                let d = it(f), m = !1;
                if (je(d, (w)=>{
                    if (w.kind === "selector" && w.value[0] === "." && Dr.test(w.value.slice(1))) {
                        let v = w.value;
                        w.value = "&";
                        let x = De(d), k1 = v.slice(1), N = x === "&" ? ae(g) : [
                            H(x, ae(g))
                        ];
                        u.get(k1).push(...N), m = !0, w.value = v;
                        return;
                    }
                    if (w.kind === "function" && w.value === ":not") return 1;
                }), !m) throw new Error(`\`addUtilities({ '${f}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
            }
            for (let [f, g] of u)r.theme.prefix && F(g, (d)=>{
                if (d.kind === "rule") {
                    let m = it(d.selector);
                    je(m, (w)=>{
                        w.kind === "selector" && w.value[0] === "." && (w.value = `.${r.theme.prefix}\\:${w.value.slice(1)}`);
                    }), d.selector = De(m);
                }
            }), r.utilities.static(f, (d)=>{
                let m = structuredClone(g);
                return Ir(m, f, d.raw), e.current |= Oe(m, r), m;
            });
        },
        matchUtilities (a, c) {
            let u = c?.type ? Array.isArray(c?.type) ? c.type : [
                c.type
            ] : [
                "any"
            ];
            for (let [g, d] of Object.entries(a)){
                let m = function({ negative: w }) {
                    return (v)=>{
                        if (v.value?.kind === "arbitrary" && u.length > 0 && !u.includes("any") && (v.value.dataType && !u.includes(v.value.dataType) || !v.value.dataType && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(v.value.value, u))) return;
                        let x = u.includes("color"), k1 = null, N = !1;
                        {
                            let P = c?.values ?? {};
                            x && (P = Object.assign({
                                inherit: "inherit",
                                transparent: "transparent",
                                current: "currentcolor"
                            }, P)), v.value ? v.value.kind === "arbitrary" ? k1 = v.value.value : v.value.fraction && P[v.value.fraction] ? (k1 = P[v.value.fraction], N = !0) : P[v.value.value] ? k1 = P[v.value.value] : P.__BARE_VALUE__ && (k1 = P.__BARE_VALUE__(v.value) ?? null, N = (v.value.fraction !== null && k1?.includes("/")) ?? !1) : k1 = P.DEFAULT ?? null;
                        }
                        if (k1 === null) return;
                        let b;
                        {
                            let P = c?.modifiers ?? null;
                            v.modifier ? P === "any" || v.modifier.kind === "arbitrary" ? b = v.modifier.value : P?.[v.modifier.value] ? b = P[v.modifier.value] : x && !Number.isNaN(Number(v.modifier.value)) ? b = `${v.modifier.value}%` : b = null : b = null;
                        }
                        if (v.modifier && b === null && !N) return v.value?.kind === "arbitrary" ? null : void 0;
                        x && b !== null && (k1 = Q(k1, b)), w && (k1 = `calc(${k1} * -1)`);
                        let S = ae(d(k1, {
                            modifier: b
                        }));
                        return Ir(S, g, v.raw), e.current |= Oe(S, r), S;
                    };
                };
                var f = m;
                if (!Dr.test(g)) throw new Error(`\`matchUtilities({ '${g}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
                c?.supportsNegativeValues && r.utilities.functional(`-${g}`, m({
                    negative: !0
                }), {
                    types: u
                }), r.utilities.functional(g, m({
                    negative: !1
                }), {
                    types: u
                }), r.utilities.suggest(g, ()=>{
                    let w = c?.values ?? {}, v = new Set(Object.keys(w));
                    v.delete("__BARE_VALUE__"), v.has("DEFAULT") && (v.delete("DEFAULT"), v.add(null));
                    let x = c?.modifiers ?? {}, k1 = x === "any" ? [] : Object.keys(x);
                    return [
                        {
                            supportsNegative: c?.supportsNegativeValues ?? !1,
                            values: Array.from(v),
                            modifiers: k1
                        }
                    ];
                });
            }
        },
        addComponents (a, c) {
            this.addUtilities(a, c);
        },
        matchComponents (a, c) {
            this.matchUtilities(a, c);
        },
        theme: rt(r, ()=>i.theme ?? {}, (a)=>a),
        prefix (a) {
            return a;
        },
        config (a, c) {
            let u = i;
            if (!a) return u;
            let f = tt(a);
            for(let g = 0; g < f.length; ++g){
                let d = f[g];
                if (u[d] === void 0) return c;
                u = u[d];
            }
            return u ?? c;
        }
    };
    return s.addComponents = s.addComponents.bind(s), s.matchComponents = s.matchComponents.bind(s), s;
}
function ae(r) {
    let t = [];
    r = Array.isArray(r) ? r : [
        r
    ];
    let i = r.flatMap((e)=>Object.entries(e));
    for (let [e, n] of i)if (typeof n != "object") {
        if (!e.startsWith("--")) {
            if (n === "@slot") {
                t.push(H(e, [
                    z("@slot")
                ]));
                continue;
            }
            e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        t.push(l(e, String(n)));
    } else if (Array.isArray(n)) for (let s of n)typeof s == "string" ? t.push(l(e, s)) : t.push(H(e, ae(s)));
    else n !== null && t.push(H(e, ae(n)));
    return t;
}
function Ur(r, t) {
    return (typeof r == "string" ? [
        r
    ] : r).flatMap((e)=>{
        if (e.trim().endsWith("}")) {
            let n = e.replace("}", "{@slot}}"), s = me(n);
            return At(s, t), s;
        } else return H(e, t);
    });
}
function Ir(r, t, i) {
    F(r, (e)=>{
        if (e.kind === "rule") {
            let n = it(e.selector);
            je(n, (s)=>{
                s.kind === "selector" && s.value === `.${t}` && (s.value = `.${fe(i)}`);
            }), e.selector = De(n);
        }
    });
}
function Fr(r, t, i) {
    for (let e of Xi(t))r.theme.addKeyframes(e);
}
function Xi(r) {
    let t = [];
    if ("keyframes" in r.theme) for (let [i, e] of Object.entries(r.theme.keyframes))t.push(z("@keyframes", i, ae(e)));
    return t;
}
function Lr(r) {
    return {
        theme: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"],
            colors: ({ theme: t })=>t("color", {}),
            extend: {
                fontSize: ({ theme: t })=>({
                        ...t("text", {})
                    }),
                boxShadow: ({ theme: t })=>({
                        ...t("shadow", {})
                    }),
                animation: ({ theme: t })=>({
                        ...t("animate", {})
                    }),
                aspectRatio: ({ theme: t })=>({
                        ...t("aspect", {})
                    }),
                borderRadius: ({ theme: t })=>({
                        ...t("radius", {})
                    }),
                screens: ({ theme: t })=>({
                        ...t("breakpoint", {})
                    }),
                letterSpacing: ({ theme: t })=>({
                        ...t("tracking", {})
                    }),
                lineHeight: ({ theme: t })=>({
                        ...t("leading", {})
                    }),
                transitionDuration: {
                    DEFAULT: r.get([
                        "--default-transition-duration"
                    ]) ?? null
                },
                transitionTimingFunction: {
                    DEFAULT: r.get([
                        "--default-transition-timing-function"
                    ]) ?? null
                },
                maxWidth: ({ theme: t })=>({
                        ...t("container", {})
                    })
            }
        }
    };
}
var en = {
    blocklist: [],
    future: {},
    prefix: "",
    important: !1,
    darkMode: null,
    theme: {},
    plugins: [],
    content: {
        files: []
    }
};
function St(r, t) {
    let i = {
        design: r,
        configs: [],
        plugins: [],
        content: {
            files: []
        },
        theme: {},
        extend: {},
        result: structuredClone(en)
    };
    for (let n of t)Nt(i, n);
    for (let n of i.configs)"darkMode" in n && n.darkMode !== void 0 && (i.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== void 0 && (i.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== void 0 && (i.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== void 0 && (i.result.important = n.important ?? !1);
    let e = rn(i);
    return {
        resolvedConfig: {
            ...i.result,
            content: i.content,
            theme: i.theme,
            plugins: i.plugins
        },
        replacedThemeKeys: e
    };
}
function tn(r, t) {
    if (Array.isArray(r) && $e(r[0])) return r.concat(t);
    if (Array.isArray(t) && $e(t[0]) && $e(r)) return [
        r,
        ...t
    ];
    if (Array.isArray(t)) return t;
}
function Nt(r, { config: t, base: i, path: e, reference: n }) {
    let s = [];
    for (let u of t.plugins ?? [])"__isOptionsFunction" in u ? s.push({
        ...u(),
        reference: n
    }) : "handler" in u ? s.push({
        ...u,
        reference: n
    }) : s.push({
        handler: u,
        reference: n
    });
    if (Array.isArray(t.presets) && t.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let u of t.presets ?? [])Nt(r, {
        path: e,
        base: i,
        config: u,
        reference: n
    });
    for (let u of s)r.plugins.push(u), u.config && Nt(r, {
        path: e,
        base: i,
        config: u.config,
        reference: !!u.reference
    });
    let a = t.content ?? [], c = Array.isArray(a) ? a : a.files;
    for (let u of c)r.content.files.push(typeof u == "object" ? u : {
        base: i,
        pattern: u
    });
    r.configs.push(t);
}
function rn(r) {
    let t = new Set, i = rt(r.design, ()=>r.theme, n), e = Object.assign(i, {
        theme: i,
        colors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
    });
    function n(s) {
        return typeof s == "function" ? s(e) ?? null : s ?? null;
    }
    for (let s of r.configs){
        let a = s.theme ?? {}, c = a.extend ?? {};
        for(let u in a)u !== "extend" && t.add(u);
        Object.assign(r.theme, a);
        for(let u in c)r.extend[u] ??= [], r.extend[u].push(c[u]);
    }
    delete r.theme.extend;
    for(let s in r.extend){
        let a = [
            r.theme[s],
            ...r.extend[s]
        ];
        r.theme[s] = ()=>{
            let c = a.map(n);
            return Ke({}, c, tn);
        };
    }
    for(let s in r.theme)r.theme[s] = n(r.theme[s]);
    if (r.theme.screens && typeof r.theme.screens == "object") for (let s of Object.keys(r.theme.screens)){
        let a = r.theme.screens[s];
        a && typeof a == "object" && ("raw" in a || "max" in a || "min" in a && (r.theme.screens[s] = a.min));
    }
    return t;
}
function zr(r, t) {
    let i = r.theme.container || {};
    if (typeof i != "object" || i === null) return;
    let e = nn(i, t);
    e.length !== 0 && t.utilities.static("container", ()=>structuredClone(e));
}
function nn({ center: r, padding: t, screens: i }, e) {
    let n = [], s = null;
    if (r && n.push(l("margin-inline", "auto")), (typeof t == "string" || typeof t == "object" && t !== null && "DEFAULT" in t) && n.push(l("padding-inline", typeof t == "string" ? t : t.DEFAULT)), typeof i == "object" && i !== null) {
        s = new Map;
        let a = Array.from(e.theme.namespace("--breakpoint").entries());
        if (a.sort((c, u)=>we(c[1], u[1], "asc")), a.length > 0) {
            let [c] = a[0];
            n.push(z("@media", `(width >= --theme(--breakpoint-${c}))`, [
                l("max-width", "none")
            ]));
        }
        for (let [c, u] of Object.entries(i)){
            if (typeof u == "object") if ("min" in u) u = u.min;
            else continue;
            s.set(c, z("@media", `(width >= ${u})`, [
                l("max-width", u)
            ]));
        }
    }
    if (typeof t == "object" && t !== null) {
        let a = Object.entries(t).filter(([c])=>c !== "DEFAULT").map(([c, u])=>[
                c,
                e.theme.resolveValue(c, [
                    "--breakpoint"
                ]),
                u
            ]).filter(Boolean);
        a.sort((c, u)=>we(c[1], u[1], "asc"));
        for (let [c, , u] of a)if (s && s.has(c)) s.get(c).nodes.push(l("padding-inline", u));
        else {
            if (s) continue;
            n.push(z("@media", `(width >= theme(--breakpoint-${c}))`, [
                l("padding-inline", u)
            ]));
        }
    }
    if (s) for (let [, a] of s)n.push(a);
    return n;
}
function Mr({ addVariant: r, config: t }) {
    let i = t("darkMode", null), [e, n = ".dark"] = Array.isArray(i) ? i : [
        i
    ];
    if (e === "variant") {
        let s;
        if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [
            n
        ]), Array.isArray(s)) for (let a of s)a === ".dark" ? (e = !1, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : a.includes("&") || (e = !1, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
        n = s;
    }
    e === null || (e === "selector" ? r("dark", `&:where(${n}, ${n} *)`) : e === "media" ? r("dark", "@media (prefers-color-scheme: dark)") : e === "variant" ? r("dark", n) : e === "class" && r("dark", `&:is(${n} *)`));
}
function Wr(r) {
    for (let [t, i] of [
        [
            "t",
            "top"
        ],
        [
            "tr",
            "top right"
        ],
        [
            "r",
            "right"
        ],
        [
            "br",
            "bottom right"
        ],
        [
            "b",
            "bottom"
        ],
        [
            "bl",
            "bottom left"
        ],
        [
            "l",
            "left"
        ],
        [
            "tl",
            "top left"
        ]
    ])r.utilities.static(`bg-gradient-to-${t}`, ()=>[
            l("--tw-gradient-position", `to ${i} in oklab`),
            l("background-image", "linear-gradient(var(--tw-gradient-stops))")
        ]);
    r.utilities.static("bg-left-top", ()=>[
            l("background-position", "left top")
        ]), r.utilities.static("bg-right-top", ()=>[
            l("background-position", "right top")
        ]), r.utilities.static("bg-left-bottom", ()=>[
            l("background-position", "left bottom")
        ]), r.utilities.static("bg-right-bottom", ()=>[
            l("background-position", "right bottom")
        ]), r.utilities.static("object-left-top", ()=>[
            l("object-position", "left top")
        ]), r.utilities.static("object-right-top", ()=>[
            l("object-position", "right top")
        ]), r.utilities.static("object-left-bottom", ()=>[
            l("object-position", "left bottom")
        ]), r.utilities.static("object-right-bottom", ()=>[
            l("object-position", "right bottom")
        ]), r.utilities.functional("max-w-screen", (t)=>{
        if (!t.value || t.value.kind === "arbitrary") return;
        let i = r.theme.resolve(t.value.value, [
            "--breakpoint"
        ]);
        if (i) return [
            l("max-width", i)
        ];
    }), r.utilities.static("overflow-ellipsis", ()=>[
            l("text-overflow", "ellipsis")
        ]), r.utilities.static("decoration-slice", ()=>[
            l("-webkit-box-decoration-break", "slice"),
            l("box-decoration-break", "slice")
        ]), r.utilities.static("decoration-clone", ()=>[
            l("-webkit-box-decoration-break", "clone"),
            l("box-decoration-break", "clone")
        ]), r.utilities.functional("flex-shrink", (t)=>{
        if (!t.modifier) {
            if (!t.value) return [
                l("flex-shrink", "1")
            ];
            if (t.value.kind === "arbitrary") return [
                l("flex-shrink", t.value.value)
            ];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(t.value.value)) return [
                l("flex-shrink", t.value.value)
            ];
        }
    }), r.utilities.functional("flex-grow", (t)=>{
        if (!t.modifier) {
            if (!t.value) return [
                l("flex-grow", "1")
            ];
            if (t.value.kind === "arbitrary") return [
                l("flex-grow", t.value.value)
            ];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(t.value.value)) return [
                l("flex-grow", t.value.value)
            ];
        }
    }), r.utilities.static("order-none", ()=>[
            l("order", "0")
        ]);
}
function Br(r, t) {
    let i = r.theme.screens || {}, e = t.variants.get("min")?.order ?? 0, n = [];
    for (let [a, c] of Object.entries(i)){
        let m = function(w) {
            t.variants.static(a, (v)=>{
                v.nodes = [
                    z("@media", d, v.nodes)
                ];
            }, {
                order: w
            });
        };
        var s = m;
        let u = t.variants.get(a), f = t.theme.resolveValue(a, [
            "--breakpoint"
        ]);
        if (u && f && !t.theme.hasDefault(`--breakpoint-${a}`)) continue;
        let g = !0;
        typeof c == "string" && (g = !1);
        let d = on(c);
        g ? n.push(m) : m(e);
    }
    if (n.length !== 0) {
        for (let [, a] of t.variants.variants)a.order > e && (a.order += n.length);
        t.variants.compareFns = new Map(Array.from(t.variants.compareFns).map(([a, c])=>(a > e && (a += n.length), [
                a,
                c
            ])));
        for (let [a, c] of n.entries())c(e + a + 1);
    }
}
function on(r) {
    return (Array.isArray(r) ? r : [
        r
    ]).map((i)=>typeof i == "string" ? {
            min: i
        } : i && typeof i == "object" ? i : null).map((i)=>{
        if (i === null) return null;
        if ("raw" in i) return i.raw;
        let e = "";
        return i.max !== void 0 && (e += `${i.max} >= `), e += "width", i.min !== void 0 && (e += ` >= ${i.min}`), `(${e})`;
    }).filter(Boolean).join(", ");
}
function qr(r, t) {
    let i = r.theme.aria || {}, e = r.theme.supports || {}, n = r.theme.data || {};
    if (Object.keys(i).length > 0) {
        let s = t.variants.get("aria"), a = s?.applyFn, c = s?.compounds;
        t.variants.functional("aria", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in i ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: i[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
    if (Object.keys(e).length > 0) {
        let s = t.variants.get("supports"), a = s?.applyFn, c = s?.compounds;
        t.variants.functional("supports", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in e ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: e[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
    if (Object.keys(n).length > 0) {
        let s = t.variants.get("data"), a = s?.applyFn, c = s?.compounds;
        t.variants.functional("data", (u, f)=>{
            let g = f.value;
            return g && g.kind === "named" && g.value in n ? a?.(u, {
                ...f,
                value: {
                    kind: "arbitrary",
                    value: n[g.value]
                }
            }) : a?.(u, f);
        }, {
            compounds: c
        });
    }
}
var ln = /^[a-z]+$/;
async function Jr({ designSystem: r, base: t, ast: i, loadModule: e, sources: n }) {
    let s = 0, a = [], c = [];
    F(i, (d, { parent: m, replaceWith: w, context: v })=>{
        if (d.kind === "at-rule") {
            if (d.name === "@plugin") {
                if (m !== null) throw new Error("`@plugin` cannot be nested.");
                let x = d.params.slice(1, -1);
                if (x.length === 0) throw new Error("`@plugin` must have a path.");
                let k1 = {};
                for (let N of d.nodes ?? []){
                    if (N.kind !== "declaration") throw new Error(`Unexpected \`@plugin\` option:

${ne([
                        N
                    ])}

\`@plugin\` options must be a flat list of declarations.`);
                    if (N.value === void 0) continue;
                    let b = N.value, S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(b, ",").map((P)=>{
                        if (P = P.trim(), P === "null") return null;
                        if (P === "true") return !0;
                        if (P === "false") return !1;
                        if (Number.isNaN(Number(P))) {
                            if (P[0] === '"' && P[P.length - 1] === '"' || P[0] === "'" && P[P.length - 1] === "'") return P.slice(1, -1);
                            if (P[0] === "{" && P[P.length - 1] === "}") throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${ne([
                                N
                            ]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
                        } else return Number(P);
                        return P;
                    });
                    k1[N.property] = S.length === 1 ? S[0] : S;
                }
                a.push([
                    {
                        id: x,
                        base: v.base,
                        reference: !!v.reference
                    },
                    Object.keys(k1).length > 0 ? k1 : null
                ]), w([]), s |= 4;
                return;
            }
            if (d.name === "@config") {
                if (d.nodes.length > 0) throw new Error("`@config` cannot have a body.");
                if (m !== null) throw new Error("`@config` cannot be nested.");
                c.push({
                    id: d.params.slice(1, -1),
                    base: v.base,
                    reference: !!v.reference
                }), w([]), s |= 4;
                return;
            }
        }
    }), Wr(r);
    let u = r.resolveThemeValue;
    if (r.resolveThemeValue = function(m, w) {
        return m.startsWith("--") ? u(m, w) : (s |= Gr({
            designSystem: r,
            base: t,
            ast: i,
            sources: n,
            configs: [],
            pluginDetails: []
        }), r.resolveThemeValue(m, w));
    }, !a.length && !c.length) return 0;
    let [f, g] = await Promise.all([
        Promise.all(c.map(async ({ id: d, base: m, reference: w })=>{
            let v = await e(d, m, "config");
            return {
                path: d,
                base: v.base,
                config: v.module,
                reference: w
            };
        })),
        Promise.all(a.map(async ([{ id: d, base: m, reference: w }, v])=>{
            let x = await e(d, m, "plugin");
            return {
                path: d,
                base: x.base,
                plugin: x.module,
                options: v,
                reference: w
            };
        }))
    ]);
    return s |= Gr({
        designSystem: r,
        base: t,
        ast: i,
        sources: n,
        configs: f,
        pluginDetails: g
    }), s;
}
function Gr({ designSystem: r, base: t, ast: i, sources: e, configs: n, pluginDetails: s }) {
    let a = 0, u = [
        ...s.map((k1)=>{
            if (!k1.options) return {
                config: {
                    plugins: [
                        k1.plugin
                    ]
                },
                base: k1.base,
                reference: k1.reference
            };
            if ("__isOptionsFunction" in k1.plugin) return {
                config: {
                    plugins: [
                        k1.plugin(k1.options)
                    ]
                },
                base: k1.base,
                reference: k1.reference
            };
            throw new Error(`The plugin "${k1.path}" does not accept options`);
        }),
        ...n
    ], { resolvedConfig: f } = St(r, [
        {
            config: Lr(r.theme),
            base: t,
            reference: !0
        },
        ...u,
        {
            config: {
                plugins: [
                    Mr
                ]
            },
            base: t,
            reference: !0
        }
    ]), { resolvedConfig: g, replacedThemeKeys: d } = St(r, u), m = r.resolveThemeValue;
    r.resolveThemeValue = function(N, b) {
        if (N[0] === "-" && N[1] === "-") return m(N, b);
        let S = v.theme(N, void 0);
        if (Array.isArray(S) && S.length === 2) return S[0];
        if (Array.isArray(S)) return S.join(", ");
        if (typeof S == "string") return S;
    };
    let w = {
        designSystem: r,
        ast: i,
        resolvedConfig: f,
        featuresRef: {
            set current (k){
                a |= k;
            }
        }
    }, v = Vt({
        ...w,
        referenceMode: !1
    }), x;
    for (let { handler: k1, reference: N } of f.plugins)N ? (x ||= Vt({
        ...w,
        referenceMode: !0
    }), k1(x)) : k1(v);
    if (xr(r, g, d), Fr(r, g, d), qr(g, r), Br(g, r), zr(g, r), !r.theme.prefix && f.prefix) {
        if (f.prefix.endsWith("-") && (f.prefix = f.prefix.slice(0, -1), console.warn(`The prefix "${f.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !ln.test(f.prefix)) throw new Error(`The prefix "${f.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
        r.theme.prefix = f.prefix;
    }
    if (!r.important && f.important === !0 && (r.important = !0), typeof f.important == "string") {
        let k1 = f.important;
        F(i, (N, { replaceWith: b, parent: S })=>{
            if (N.kind === "at-rule" && !(N.name !== "@tailwind" || N.params !== "utilities")) return S?.kind === "rule" && S.selector === k1 ? 2 : (b(M(k1, [
                N
            ])), 2);
        });
    }
    for (let k1 of f.blocklist)r.invalidCandidates.add(k1);
    for (let k1 of f.content.files){
        if ("raw" in k1) throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(k1, null, 2)}

This feature is not currently supported.`);
        let N = !1;
        k1.pattern[0] == "!" && (N = !0, k1.pattern = k1.pattern.slice(1)), e.push({
            ...k1,
            negated: N
        });
    }
    return a;
}
function Hr(r) {
    let t = [
        0
    ];
    for(let n = 0; n < r.length; n++)r.charCodeAt(n) === 10 && t.push(n + 1);
    function i(n) {
        let s = 0, a = t.length;
        for(; a > 0;){
            let u = (a | 0) >> 1, f = s + u;
            t[f] <= n ? (s = f + 1, a = a - u - 1) : a = u;
        }
        s -= 1;
        let c = n - t[s];
        return {
            line: s + 1,
            column: c
        };
    }
    function e({ line: n, column: s }) {
        n -= 1, n = Math.min(Math.max(n, 0), t.length - 1);
        let a = t[n], c = t[n + 1] ?? a;
        return Math.min(Math.max(a + s, 0), c);
    }
    return {
        find: i,
        findOffset: e
    };
}
function Yr({ ast: r }) {
    let t = new B((n)=>Hr(n.code)), i = new B((n)=>({
            url: n.file,
            content: n.code,
            ignore: !1
        })), e = {
        file: null,
        sources: [],
        mappings: []
    };
    F(r, (n)=>{
        if (!n.src || !n.dst) return;
        let s = i.get(n.src[0]);
        if (!s.content) return;
        let a = t.get(n.src[0]), c = t.get(n.dst[0]), u = s.content.slice(n.src[1], n.src[2]), f = 0;
        for (let m of u.split(`
`)){
            if (m.trim() !== "") {
                let w = a.find(n.src[1] + f), v = c.find(n.dst[1]);
                e.mappings.push({
                    name: null,
                    originalPosition: {
                        source: s,
                        ...w
                    },
                    generatedPosition: v
                });
            }
            f += m.length, f += 1;
        }
        let g = a.find(n.src[2]), d = c.find(n.dst[2]);
        e.mappings.push({
            name: null,
            originalPosition: {
                source: s,
                ...g
            },
            generatedPosition: d
        });
    });
    for (let n of t.keys())e.sources.push(i.get(n));
    return e.mappings.sort((n, s)=>n.generatedPosition.line - s.generatedPosition.line || n.generatedPosition.column - s.generatedPosition.column || (n.originalPosition?.line ?? 0) - (s.originalPosition?.line ?? 0) || (n.originalPosition?.column ?? 0) - (s.originalPosition?.column ?? 0)), e;
}
var Zr = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
function nt(r) {
    let t = r.indexOf("{");
    if (t === -1) return [
        r
    ];
    let i = [], e = r.slice(0, t), n = r.slice(t), s = 0, a = n.lastIndexOf("}");
    for(let d = 0; d < n.length; d++){
        let m = n[d];
        if (m === "{") s++;
        else if (m === "}" && (s--, s === 0)) {
            a = d;
            break;
        }
    }
    if (a === -1) throw new Error(`The pattern \`${r}\` is not balanced.`);
    let c = n.slice(1, a), u = n.slice(a + 1), f;
    an(c) ? f = sn(c) : f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(c, ","), f = f.flatMap((d)=>nt(d));
    let g = nt(u);
    for (let d of g)for (let m of f)i.push(e + m + d);
    return i;
}
function an(r) {
    return Zr.test(r);
}
function sn(r) {
    let t = r.match(Zr);
    if (!t) return [
        r
    ];
    let [, i, e, n] = t, s = n ? parseInt(n, 10) : void 0, a = [];
    if (/^-?\d+$/.test(i) && /^-?\d+$/.test(e)) {
        let c = parseInt(i, 10), u = parseInt(e, 10);
        if (s === void 0 && (s = c <= u ? 1 : -1), s === 0) throw new Error("Step cannot be zero in sequence expansion.");
        let f = c < u;
        f && s < 0 && (s = -s), !f && s > 0 && (s = -s);
        for(let g = c; f ? g <= u : g >= u; g += s)a.push(g.toString());
    }
    return a;
}
var un = /^[a-z]+$/, dt = ((n)=>(n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n))(dt || {});
function fn() {
    throw new Error("No `loadModule` function provided to `compile`");
}
function cn() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
}
function pn(r) {
    let t = 0, i = null;
    for (let e of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(r, " "))e === "reference" ? t |= 2 : e === "inline" ? t |= 1 : e === "default" ? t |= 4 : e === "static" ? t |= 8 : e.startsWith("prefix(") && e.endsWith(")") && (i = e.slice(7, -1));
    return [
        t,
        i
    ];
}
var Pe = ((c)=>(c[c.None = 0] = "None", c[c.AtApply = 1] = "AtApply", c[c.AtImport = 2] = "AtImport", c[c.JsPluginCompat = 4] = "JsPluginCompat", c[c.ThemeFunction = 8] = "ThemeFunction", c[c.Utilities = 16] = "Utilities", c[c.Variants = 32] = "Variants", c))(Pe || {});
async function Qr(r, { base: t = "", from: i, loadModule: e = fn, loadStylesheet: n = cn } = {}) {
    let s = 0;
    r = [
        le({
            base: t
        }, r)
    ], s |= await $t(r, t, n, 0, i !== void 0);
    let a = null, c = new Be, u = [], f = [], g = null, d = null, m = [], w = [], v = [], x = [], k1 = null;
    F(r, (b, { parent: S, replaceWith: P, context: U })=>{
        if (b.kind === "at-rule") {
            if (b.name === "@tailwind" && (b.params === "utilities" || b.params.startsWith("utilities"))) {
                if (d !== null) {
                    P([]);
                    return;
                }
                if (U.reference) {
                    P([]);
                    return;
                }
                let R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(b.params, " ");
                for (let _ of R)if (_.startsWith("source(")) {
                    let K = _.slice(7, -1);
                    if (K === "none") {
                        k1 = K;
                        continue;
                    }
                    if (K[0] === '"' && K[K.length - 1] !== '"' || K[0] === "'" && K[K.length - 1] !== "'" || K[0] !== "'" && K[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
                    k1 = {
                        base: U.sourceBase ?? U.base,
                        pattern: K.slice(1, -1)
                    };
                }
                d = b, s |= 16;
            }
            if (b.name === "@utility") {
                if (S !== null) throw new Error("`@utility` cannot be nested.");
                if (b.nodes.length === 0) throw new Error(`\`@utility ${b.params}\` is empty. Utilities should include at least one property.`);
                let R = ur(b);
                if (R === null) throw new Error(`\`@utility ${b.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
                f.push(R);
            }
            if (b.name === "@source") {
                if (b.nodes.length > 0) throw new Error("`@source` cannot have a body.");
                if (S !== null) throw new Error("`@source` cannot be nested.");
                let R = !1, _ = !1, K = b.params;
                if (K[0] === "n" && K.startsWith("not ") && (R = !0, K = K.slice(4)), K[0] === "i" && K.startsWith("inline(") && (_ = !0, K = K.slice(7, -1)), K[0] === '"' && K[K.length - 1] !== '"' || K[0] === "'" && K[K.length - 1] !== "'" || K[0] !== "'" && K[0] !== '"') throw new Error("`@source` paths must be quoted.");
                let G = K.slice(1, -1);
                if (_) {
                    let I = R ? x : v, W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(G, " ");
                    for (let Z of W)for (let re of nt(Z))I.push(re);
                } else w.push({
                    base: U.base,
                    pattern: G,
                    negated: R
                });
                P([]);
                return;
            }
            if (b.name === "@variant" && (S === null ? b.nodes.length === 0 ? b.name = "@custom-variant" : (F(b.nodes, (R)=>{
                if (R.kind === "at-rule" && R.name === "@slot") return b.name = "@custom-variant", 2;
            }), b.name === "@variant" && m.push(b)) : m.push(b)), b.name === "@custom-variant") {
                if (S !== null) throw new Error("`@custom-variant` cannot be nested.");
                P([]);
                let [R, _] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(b.params, " ");
                if (!Xe.test(R)) throw new Error(`\`@custom-variant ${R}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`);
                if (b.nodes.length > 0 && _) throw new Error(`\`@custom-variant ${R}\` cannot have both a selector and a body.`);
                if (b.nodes.length === 0) {
                    if (!_) throw new Error(`\`@custom-variant ${R}\` has no selector or body.`);
                    let K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(_.slice(1, -1), ",");
                    if (K.length === 0 || K.some((W)=>W.trim() === "")) throw new Error(`\`@custom-variant ${R} (${K.join(",")})\` selector is invalid.`);
                    let G = [], I = [];
                    for (let W of K)W = W.trim(), W[0] === "@" ? G.push(W) : I.push(W);
                    u.push((W)=>{
                        W.variants.static(R, (Z)=>{
                            let re = [];
                            I.length > 0 && re.push(M(I.join(", "), Z.nodes));
                            for (let o of G)re.push(H(o, Z.nodes));
                            Z.nodes = re;
                        }, {
                            compounds: ye([
                                ...I,
                                ...G
                            ])
                        });
                    });
                    return;
                } else {
                    u.push((K)=>{
                        K.variants.fromAst(R, b.nodes);
                    });
                    return;
                }
            }
            if (b.name === "@media") {
                let R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(b.params, " "), _ = [];
                for (let K of R)if (K.startsWith("source(")) {
                    let G = K.slice(7, -1);
                    F(b.nodes, (I, { replaceWith: W })=>{
                        if (I.kind === "at-rule" && I.name === "@tailwind" && I.params === "utilities") return I.params += ` source(${G})`, W([
                            le({
                                sourceBase: U.base
                            }, [
                                I
                            ])
                        ]), 2;
                    });
                } else if (K.startsWith("theme(")) {
                    let G = K.slice(6, -1), I = G.includes("reference");
                    F(b.nodes, (W)=>{
                        if (W.kind !== "at-rule") {
                            if (I) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                            return 0;
                        }
                        if (W.name === "@theme") return W.params += " " + G, 1;
                    });
                } else if (K.startsWith("prefix(")) {
                    let G = K.slice(7, -1);
                    F(b.nodes, (I)=>{
                        if (I.kind === "at-rule" && I.name === "@theme") return I.params += ` prefix(${G})`, 1;
                    });
                } else K === "important" ? a = !0 : K === "reference" ? b.nodes = [
                    le({
                        reference: !0
                    }, b.nodes)
                ] : _.push(K);
                _.length > 0 ? b.params = _.join(" ") : R.length > 0 && P(b.nodes);
            }
            if (b.name === "@theme") {
                let [R, _] = pn(b.params);
                if (U.reference && (R |= 2), _) {
                    if (!un.test(_)) throw new Error(`The prefix "${_}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
                    c.prefix = _;
                }
                return F(b.nodes, (K)=>{
                    if (K.kind === "at-rule" && K.name === "@keyframes") return c.addKeyframes(K), 1;
                    if (K.kind === "comment") return;
                    if (K.kind === "declaration" && K.property.startsWith("--")) {
                        c.add(ge(K.property), K.value ?? "", R, K.src);
                        return;
                    }
                    let G = ne([
                        z(b.name, b.params, [
                            K
                        ])
                    ]).split(`
`).map((I, W, Z)=>`${W === 0 || W >= Z.length - 2 ? " " : ">"} ${I}`).join(`
`);
                    throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${G}`);
                }), g ? P([]) : (g = M(":root, :host", []), g.src = b.src, P([
                    g
                ])), 1;
            }
        }
    });
    let N = vr(c);
    if (a && (N.important = a), x.length > 0) for (let b of x)N.invalidCandidates.add(b);
    s |= await Jr({
        designSystem: N,
        base: t,
        ast: r,
        loadModule: e,
        sources: w
    });
    for (let b of u)b(N);
    for (let b of f)b(N);
    if (g) {
        let b = [];
        for (let [P, U] of N.theme.entries()){
            if (U.options & 2) continue;
            let R = l(fe(P), U.value);
            R.src = U.src, b.push(R);
        }
        let S = N.theme.getKeyframes();
        for (let P of S)r.push(le({
            theme: !0
        }, [
            L([
                P
            ])
        ]));
        g.nodes = [
            le({
                theme: !0
            }, b)
        ];
    }
    if (m.length > 0) {
        for (let b of m){
            let S = M("&", b.nodes), P = b.params, U = N.parseVariant(P);
            if (U === null) throw new Error(`Cannot use \`@variant\` with unknown variant: ${P}`);
            if (Ae(S, U, N.variants) === null) throw new Error(`Cannot use \`@variant\` with variant: ${P}`);
            Object.assign(b, S);
        }
        s |= 32;
    }
    if (s |= xe(r, N), s |= Oe(r, N), d) {
        let b = d;
        b.kind = "context", b.context = {};
    }
    return F(r, (b, { replaceWith: S })=>{
        if (b.kind === "at-rule") return b.name === "@utility" && S([]), 1;
    }), {
        designSystem: N,
        ast: r,
        sources: w,
        root: k1,
        utilitiesNode: d,
        features: s,
        inlineCandidates: v
    };
}
async function dn(r, t = {}) {
    let { designSystem: i, ast: e, sources: n, root: s, utilitiesNode: a, features: c, inlineCandidates: u } = await Qr(r, t);
    e.unshift(We(`! tailwindcss v${Rt} | MIT License | https://tailwindcss.com `));
    function f(v) {
        i.invalidCandidates.add(v);
    }
    let g = new Set, d = null, m = 0, w = !1;
    for (let v of u)i.invalidCandidates.has(v) || (g.add(v), w = !0);
    return {
        sources: n,
        root: s,
        features: c,
        build (v) {
            if (c === 0) return r;
            if (!a) return d ??= ve(e, i, t.polyfills), d;
            let x = w, k1 = !1;
            w = !1;
            let N = g.size;
            for (let S of v)if (!i.invalidCandidates.has(S)) if (S[0] === "-" && S[1] === "-") {
                let P = i.theme.markUsedVariable(S);
                x ||= P, k1 ||= P;
            } else g.add(S), x ||= g.size !== N;
            if (!x) return d ??= ve(e, i, t.polyfills), d;
            let b = pe(g, i, {
                onInvalidCandidate: f
            }).astNodes;
            return t.from && F(b, (S)=>{
                S.src ??= a.src;
            }), !k1 && m === b.length ? (d ??= ve(e, i, t.polyfills), d) : (m = b.length, a.nodes = b, d = ve(e, i, t.polyfills), d);
        }
    };
}
async function Aa(r, t = {}) {
    let i = me(r, {
        from: t.from
    }), e = await dn(i, t), n = i, s = r;
    return {
        ...e,
        build (a) {
            let c = e.build(a);
            return c === n || (s = ne(c, !!t.from), n = c), s;
        },
        buildSourceMap () {
            return Yr({
                ast: n
            });
        }
    };
}
async function Ca(r, t = {}) {
    return (await Qr(me(r), t)).designSystem;
}
function mn() {
    throw new Error("It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.");
}
;
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-FEUCFEMW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-P5FH2LZE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs [app-client] (ecmascript)");
;
;
;
;
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-FEUCFEMW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$P5FH2LZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-P5FH2LZE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$HTB5LLOP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Features": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]),
    "Polyfills": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]),
    "__unstable__loadDesignSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]),
    "compile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]),
    "compileAst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$chunk$2d$FEUCFEMW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/chunk-FEUCFEMW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Features": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Features"]),
    "Polyfills": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Polyfills"]),
    "__unstable__loadDesignSystem": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__unstable__loadDesignSystem"]),
    "compile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["compile"]),
    "compileAst": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["compileAst"]),
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwindcss$40$4$2e$1$2e$8$2f$node_modules$2f$tailwindcss$2f$dist$2f$lib$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwindcss@4.1.8/node_modules/tailwindcss/dist/lib.mjs [app-client] (ecmascript) <exports>");
}}),
}]);

//# sourceMappingURL=b3813_tailwindcss_dist_d3129b1b._.js.map