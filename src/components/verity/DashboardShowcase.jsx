import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Ban, Gift, Sparkles, AlertTriangle, CheckCircle, ShoppingBag, Globe, Package, Plus } from 'lucide-react';

// ── Overview View: Net Profit Waterfall ──────────────────────
function OverviewView() {
    const bars = [
        { label: 'Gross Sales', amount: '$100k', pct: 100, color: '#27F59F', type: 'pos' },
        { label: 'Returns', amount: '-$20k', pct: 64, color: '#FF4D4D', type: 'neg' },
        { label: 'COGS', amount: '-$30k', pct: 50, color: '#FF4D4D', type: 'neg' },
        { label: 'Mktplace Fees', amount: '-$15k', pct: 33, color: '#FF4D4D', type: 'neg', alert: true },
        { label: 'Gateway', amount: '-$2k', pct: 30, color: '#F59E0B', type: 'neg' },
        { label: 'Net Profit', amount: '$33k', pct: 33, color: '#3B82F6', type: 'final' },
    ];

    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h4 className="text-white font-medium text-sm">Net Profit Waterfall</h4>
                    <p className="text-white/30 text-xs mt-0.5">Gross Sales → Net Payout breakdown</p>
                </div>
                <div className="flex gap-3 text-[10px] text-white/40">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#27F59F] inline-block" />Revenue</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#FF4D4D] inline-block" />Deductions</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#3B82F6] inline-block" />Net</span>
                </div>
            </div>

            {/* Waterfall bars */}
            <div className="flex-1 flex items-end gap-3 pb-6 relative">
                {bars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 relative">
                        <span
                            className="font-mono text-[9px] font-bold"
                            style={{ color: bar.type === 'pos' ? '#27F59F' : bar.type === 'final' ? '#3B82F6' : bar.color }}
                        >
                            {bar.amount}
                        </span>
                        {bar.alert && (
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7B61FF] text-white text-[7px] px-1.5 py-0.5 rounded-sm font-bold uppercase whitespace-nowrap">
                                AI Alert
                            </span>
                        )}
                        <div
                            className="w-full rounded-t-md transition-all"
                            style={{
                                height: `${bar.pct * 2.5}px`,
                                backgroundColor: bar.type === 'pos' ? '#27F59F' : bar.type === 'final' ? 'transparent' : bar.color,
                                border: bar.type === 'final' ? '2px solid #3B82F6' : 'none',
                                opacity: 0.85,
                            }}
                        />
                        <span className="text-white/30 text-[9px] text-center leading-tight">{bar.label}</span>
                    </div>
                ))}
                {/* AI sparkle annotation */}
                <div className="absolute top-0 right-8 group cursor-help">
                    <div className="relative">
                        <div className="absolute -inset-1.5 bg-[#7B61FF]/20 rounded-full blur-sm animate-pulse" />
                        <div className="relative bg-[#1E1E1E] border border-[#7B61FF] p-1 rounded-full">
                            <Sparkles size={10} className="text-[#7B61FF]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Reach View: Creative Gallery ─────────────────────────────
function ReachView() {
    const creatives = [
        { src: 'https://images.unsplash.com/photo-1610048616223-4499c1afc20b?w=400&q=80', ctr: '3.5%', sales: '$4,200', tag: 'Top Winner', status: 'good' },
        { src: 'https://images.unsplash.com/photo-1685527012908-394504c2a230?w=400&q=80', ctr: '1.2%', sales: '$500', tag: null, status: 'average' },
        { src: 'https://images.unsplash.com/photo-1632613714614-e817d3814a8e?w=400&q=80', ctr: '0.9%', sales: '$200', tag: 'Low Perf.', status: 'poor' },
    ];

    return (
        <div className="p-5 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold">Winning Ad Creatives</h4>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3">
                {creatives.map((c, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden group border border-white/5">
                        <img
                            src={c.src}
                            alt="Ad Creative"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ minHeight: '120px' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {c.status === 'good' && (
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#F59E0B] rounded-full flex items-center gap-1 text-white text-[8px] font-bold">
                                <Trophy size={8} fill="white" />
                                {c.tag}
                            </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <div className="flex items-end justify-between">
                                <div className="flex gap-3">
                                    <div>
                                        <p className="text-[8px] text-gray-400 uppercase">CTR</p>
                                        <p className={`text-sm font-mono font-bold ${c.status === 'good' ? 'text-[#27F59F]' : c.status === 'poor' ? 'text-[#FF4D4D]' : 'text-white'}`}>{c.ctr}</p>
                                    </div>
                                    <div>
                                        <p className="text-[8px] text-gray-400 uppercase">Sales</p>
                                        <p className="text-sm font-mono font-bold text-white">{c.sales}</p>
                                    </div>
                                </div>
                                {c.status === 'poor' && (
                                    <button className="px-2 py-1 bg-[#FF4D4D]/20 border border-[#FF4D4D] text-[#FF4D4D] rounded text-[9px] font-bold flex items-center gap-1">
                                        <Ban size={8} />Kill Ad?
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Relations View: Birthday Intelligence ─────────────────────
function RelationsView() {
    const users = [
        { name: 'Sarah Miller', date: 'Tomorrow', initials: 'SM' },
        { name: 'David Chen', date: 'Oct 24', initials: 'DC' },
        { name: 'Elena Rodriguez', date: 'Oct 26', initials: 'ER' },
        { name: 'James Wilson', date: 'Oct 27', initials: 'JW' },
        { name: 'Maria Garcia', date: 'Oct 28', initials: 'MG' },
    ];

    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-5">
                <div className="p-1.5 rounded-lg bg-[#7B61FF]/15">
                    <Gift size={14} className="text-[#7B61FF]" />
                </div>
                <h4 className="text-white font-medium text-sm">Upcoming Birthdays</h4>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
                {users.map((user, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#27F59F] to-[#7B61FF] flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                                {user.initials}
                            </div>
                            <p className="text-white/80 text-sm">{user.name}</p>
                        </div>
                        <span className={`text-xs font-mono ${i === 0 ? 'text-[#27F59F]' : 'text-white/30'}`}>{user.date}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/8">
                <div className="w-full py-2.5 rounded-xl bg-[#7B61FF] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#6848FF] transition-colors cursor-pointer">
                    <Sparkles size={12} />
                    Send Birthday Offer
                </div>
            </div>
        </div>
    );
}

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ── Fulfillment View: Global Logistics ────────────────────────
const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const LIGHT_TILES = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

function createPulseIcon(color) {
    return L.divIcon({
        className: '',
        html: `
      <div style="position:relative;width:14px;height:14px;">
        <div style="position:absolute;inset:0;background:${color};border-radius:50%;box-shadow:0 0 12px ${color};animation:pulse 2s infinite;"></div>
        <div style="position:absolute;inset:2px;background:${color};border-radius:50%;filter:brightness(1.5);"></div>
      </div>
    `,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
    });
}

const healthyIcon = createPulseIcon('#27F59F');
const criticalIcon = createPulseIcon('#FF4D4D');

function FulfillmentView() {
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const theme = 'dark'; // Hardcoded for Verity case study's dark aesthetic

    const locations = [
        {
            id: 'newyork',
            name: 'New York, US',
            lat: 40.7128,
            lng: -74.006,
            status: 'healthy',
            carrier: 'FedEx Ground',
            metric: 'On-Time Rate',
            metricValue: '99.2%',
            statusLabel: 'On Time',
            badge: 'OPTIMAL',
            tooltipPos: 'left-[26%] top-[38%]',
            color: '#27F59F'
        },
        {
            id: 'berlin',
            name: 'Berlin, DE',
            lat: 52.52,
            lng: 13.405,
            status: 'critical',
            carrier: 'DHL Express',
            metric: 'Damage Rate',
            metricValue: '18%',
            statusLabel: 'High Damage',
            badge: 'CRITICAL',
            tooltipPos: 'left-[53%] top-[30%]',
            color: '#FF4D4D'
        },
    ];

    return (
        <div className="h-full flex flex-col relative group">
            {/* Map Container */}
            <div className="flex-1 min-h-0 relative bg-[#050505] overflow-hidden">
                <MapContainer
                    center={[35, -10]}
                    zoom={2}
                    minZoom={2}
                    maxZoom={6}
                    zoomControl={false}
                    attributionControl={false}
                    style={{ height: '100%', width: '100%', background: '#0a0a0a' }}
                    className="z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        url={theme === 'light' ? LIGHT_TILES : DARK_TILES}
                    />
                    {locations.map((loc) => (
                        <Marker
                            key={loc.id}
                            position={[loc.lat, loc.lng]}
                            icon={loc.status === 'healthy' ? healthyIcon : criticalIcon}
                            eventHandlers={{
                                mouseover: () => setHoveredRegion(loc.id),
                                mouseout: () => setHoveredRegion(null),
                            }}
                        />
                    ))}
                </MapContainer>

                {/* Header Overlay */}
                <div className="absolute top-4 left-5 right-5 flex justify-between items-center z-20 pointer-events-none">
                    <h4 className="text-white/60 font-medium text-[10px] tracking-widest uppercase">Global Delivery Health</h4>
                    <div className="flex gap-4 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27F59F] shadow-[0_0_5px_#27F59F]"></span>
                            <span className="text-white/40">Healthy</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] shadow-[0_0_5px_#FF4D4D]"></span>
                            <span className="text-white/40">Critical</span>
                        </div>
                    </div>
                </div>

                {/* Tooltips (Mimicking the new Leaflet style but adapted for absolute positioning over the container) */}
                <AnimatePresence>
                    {locations.map((loc) => (
                        hoveredRegion === loc.id && (
                            <motion.div
                                key={loc.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`absolute w-56 p-4 rounded-xl backdrop-blur-xl shadow-2xl z-50 pointer-events-none bg-black/90 border border-white/10 ${loc.tooltipPos}`}
                            >
                                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                                    <span className="font-display font-medium text-[11px] text-white">
                                        {loc.name}
                                    </span>
                                    <span
                                        className={`px-1.5 py-0.5 rounded text-[8px] font-mono border ${loc.status === 'critical'
                                            ? 'bg-[#FF4D4D]/20 text-[#FF4D4D] border-[#FF4D4D]/20'
                                            : 'bg-[#27F59F]/20 text-[#27F59F] border-[#27F59F]/20'
                                            }`}
                                    >
                                        {loc.badge}
                                    </span>
                                </div>
                                <div className="space-y-2 text-[10px] font-mono">
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Carrier:</span>
                                        <span className="text-white">{loc.carrier}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Status:</span>
                                        <span
                                            className={`flex items-center gap-1 ${loc.status === 'critical' ? 'text-[#FF4D4D]' : 'text-[#27F59F]'
                                                }`}
                                        >
                                            {loc.status === 'critical' ? <AlertTriangle size={8} /> : <CheckCircle size={8} />}
                                            {loc.statusLabel}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                                        <span className="text-white/40">{loc.metric}:</span>
                                        <span
                                            className={`text-sm font-bold ${loc.status === 'critical' ? 'text-[#FF4D4D]' : 'text-[#27F59F]'
                                                }`}
                                        >
                                            {loc.metricValue}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>

                {/* AI Alert Banner (Mimicking LogisticsAIInternal component) */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-black/60 backdrop-blur-md border border-[#FF4D4D]/20 p-2.5 rounded-lg max-w-[170px]"
                    >
                        <p className="text-[#FF4D4D] text-[9px] font-mono font-bold mb-1 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#FF4D4D] animate-pulse" />
                            ALERT: BERLIN HUB
                        </p>
                        <p className="text-white/40 text-[8px] leading-tight">
                            Critical damage rate detected. Switching to secondary carrier recommended.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom: Return Reasons Donut (Compact) */}
            <div className="h-[100px] border-t border-white/5 bg-[#121212] p-4 flex items-center justify-between">
                <div>
                    <h5 className="text-white/60 text-[9px] uppercase tracking-wider mb-1">Carrier Performance</h5>
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-2xl font-mono font-bold">18%</span>
                        <div className="flex flex-col">
                            <span className="text-[#FF4D4D] text-[9px] font-bold uppercase">Damage Rate</span>
                            <span className="text-white/20 text-[8px] font-mono">Berlin Hub Anomaly</span>
                        </div>
                    </div>
                </div>
                {/* Micro Chart SVG */}
                <div className="w-10 h-10 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="14" />
                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF4D4D" strokeWidth="14" strokeDasharray="63 251" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

// ── Integrations View: Ecosystem Grid ─────────────────────────
function IntegrationsView() {
    const integrations = [
        { name: 'Shopify', status: 'connected', color: '#96BF48', icon: <ShoppingBag size={14} /> },
        { name: 'Google Ads', status: 'connected', color: '#4285F4', icon: <Globe size={14} /> },
        { name: 'Meta Ads', status: 'connected', color: '#1877F2', icon: <div className="font-bold text-[10px]">f</div> },
        { name: 'DHL', status: 'warning', color: '#FFCC00', icon: <Package size={14} /> },
    ];

    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-5">
                <h4 className="text-white font-medium text-sm">Active Integrations</h4>
                <div className="px-2 py-1 rounded bg-[#27F59F]/10 border border-[#27F59F]/20 text-[#27F59F] text-[9px] font-mono">
                    All Systems Operational
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {integrations.map((app, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <div className={`p-1.5 rounded-lg bg-black/50 text-white`} style={{ color: app.color }}>
                                {app.icon}
                            </div>
                            {app.status === 'connected' ? (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#27F59F] shadow-[0_0_4px_#27F59F]" />
                            ) : (
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_4px_#F59E0B] animate-pulse" />
                            )}
                        </div>
                        <p className="text-white text-xs font-medium">{app.name}</p>
                        <p className="text-white/30 text-[9px] mt-0.5 font-mono">
                            {app.status === 'connected' ? 'Synced' : 'Action Req.'}
                        </p>
                    </div>
                ))}
            </div>

            {/* Add New Button */}
            <div className="mt-3 pt-3 border-t border-white/5">
                <button className="w-full py-2 rounded-lg border border-dashed border-white/10 text-white/40 text-[10px] hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Plus size={10} /> Connect New Service
                </button>
            </div>
        </div>
    );
}

// ── Main Component ────────────────────────────────────────────
const views = [
    { id: 'overview', label: 'OVERVIEW', sub: 'Net Profit · Marketplace Fees', component: OverviewView },
    { id: 'reach', label: 'REACH', sub: 'Creative Gallery · ROAS', component: ReachView },
    { id: 'relations', label: 'RELATIONS', sub: 'VIP Intelligence · Birthdays', component: RelationsView },
    { id: 'fulfillment', label: 'FULFILLMENT', sub: 'Global Health · Wardrobing', component: FulfillmentView },
    { id: 'ecosystem', label: 'ECOSYSTEM', sub: 'Unified Integrations', component: IntegrationsView },
];

export function DashboardShowcase() {
    return (
        <section className="py-32 px-8 md:px-20 bg-[#111] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-8 h-[1px] bg-[#7B61FF]" />
                    <span className="text-[#7B61FF] font-bold tracking-[0.3em] uppercase text-xs">The Dashboard</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4"
                >
                    The System in Action.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg mb-20 max-w-2xl leading-relaxed"
                >
                    Three modular views, each solving one specific Job To Be Done uncovered in research. Every metric shown was deliberately chosen because merchants told us they were drowning in gross numbers that masked whether they were actually profitable.
                </motion.p>

                {/* View cards */}
                <div className="space-y-12">
                    {views.map((view, i) => (
                        <motion.div
                            key={view.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Text */}
                            <div className={`md:col-span-4 ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                                <span
                                    className="text-xs font-bold uppercase tracking-[0.3em] mb-3 block"
                                    style={{ color: ['#27F59F', '#7B61FF', '#F59E0B', '#FF4D4D', '#3B82F6'][i] }}
                                >
                                    {view.label}
                                </span>
                                <h3 className="font-serif text-2xl mb-3 text-white/90">{view.sub}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {[
                                        `Merchants on Shopify see Gross Sales as their headline number, but after marketplace commissions, gateway fees, and returns, Net Profit can be 30 to 50% lower. I designed the waterfall chart specifically so the true number is the last bar you see, emotionally landing after you've processed every deduction. The AI alert on the marketplace fee bar was added after users said they had no idea how much Zalando was taking.`,
                                        `During research, multiple merchants described checking ad performance by opening four tabs: Meta Ads Manager, Shopify, Google Analytics, and a spreadsheet. The Reach module collapses that into one view. I chose to show ad creatives as actual images (not just row data) because merchants said they needed to see what was underperforming visually, not just read a number, to make a kill decision.`,
                                        `Luxury customers have a significant share of wallet concentrated in a small VIP segment. Retention here isn't email blasts. It's personalised timing. I added the birthday and anniversary feed because interviewees mentioned missing VIP renewal windows due to no reminder system. The one-click offer trigger was designed to remove friction down to a single action.`,
                                        `Returns are the silent killer of fashion margins. I designed the Global Health map to be more than just valid data visualization. It's an operational war room. By correlating return spikes with specific hubs (like 'Berlin Delayed'), merchants can switch carriers instantly, saving thousands in potential lost stock before the damage compounds.`,
                                        `A fragmented stack breaks data integrity. The Ecosystem view isn't just a list of apps; it's a unified status monitor. I centralized the connection health of Shopify, Meta, and 3PLs into one symmetrical grid so technical debt doesn't compound silently. If a connection drops, you know immediately, protecting your downstream analytics.`,
                                    ][i]}
                                </p>
                            </div>

                            {/* Dashboard Widget Card */}
                            <div className={`md:col-span-8 ${i % 2 === 1 ? 'md:order-first' : ''}`}>
                                <div className="verity-card-dark overflow-hidden" style={{ height: '480px' }}>
                                    {/* Mini top bar */}
                                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/6 bg-[#1a1a1a]">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-[#FF4D4D]/60" />
                                            <div className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
                                            <div className="w-2 h-2 rounded-full bg-[#27F59F]/60" />
                                        </div>
                                        <span className="text-white/20 text-[9px] font-mono">verity.app / {view.id}</span>
                                    </div>

                                    {/* Dashboard placeholder or coded widget */}
                                    <div className="h-[calc(100%-40px)]">
                                        <view.component />
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
