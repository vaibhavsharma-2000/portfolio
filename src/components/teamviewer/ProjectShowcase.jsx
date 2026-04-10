import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import psaMatrixImg from '../../assets/teamviewer/problem-solution-matrix.png';
import heuristicEvalImg from '../../assets/teamviewer/heuristic-evaluation.png';

/* ═══════════════════════════════════════════
   Animated Pipeline Flow Diagram
   ═══════════════════════════════════════════ */
function FlowNode({ label, isActive, delay, isDecision }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex-shrink-0 px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-[11px] md:text-xs font-medium text-center leading-tight
                ${isDecision
                    ? 'bg-[#172554] border-2 border-[#4361EE]/40 text-[#7B8FFF] shadow-[0_0_15px_rgba(67,97,238,0.2)]'
                    : 'bg-[#060451]/80 border border-[#4361EE]/30 text-white/85'
                }
            `}
            style={{ maxWidth: '130px', minWidth: '90px' }}
        >
            {label}
        </motion.div>
    );
}

function FlowArrow({ delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay, duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
            className="flex items-center flex-shrink-0 mx-1"
        >
            <div className="flow-connector w-5 md:w-8 h-[1.5px] bg-gradient-to-r from-[#4361EE]/50 to-[#4361EE]" />
            <div className="border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-[#4361EE]" />
        </motion.div>
    );
}

function HorizFlow({ nodes }) {
    return (
        <div className="w-full overflow-x-auto py-5 px-1">
            <div className="flex items-center justify-start gap-0 min-w-max">
                {nodes.map((n, i) => (
                    <div key={i} className="flex items-center">
                        <FlowNode label={n} delay={0.1 + i * 0.12} />
                        {i < nodes.length - 1 && <FlowArrow delay={0.17 + i * 0.12} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

function VertArrow({ delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay }}
            style={{ transformOrigin: 'top' }}
            className="flex flex-col items-center my-1"
        >
            <div className="flow-connector w-[1.5px] h-5 bg-gradient-to-b from-[#4361EE]/50 to-[#4361EE]" />
            <div className="border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[7px] border-t-[#4361EE]" />
        </motion.div>
    );
}

function KnowledgeAgentDiagram() {
    return (
        <div className="w-full py-4 flex flex-col items-center">
            <FlowNode label="TeamViewer Data Repository" delay={0.05} />
            <VertArrow delay={0.15} />
            <FlowNode label="Data Ingestion & Indexing" delay={0.2} />
            <VertArrow delay={0.3} />
            <FlowNode label="Custom AI Agent (UXR Only)" delay={0.35} isDecision />
            <VertArrow delay={0.45} />
            <FlowNode label="Query Router" delay={0.5} isDecision />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-2 mt-3"
            >
                {['PM: Past research?', 'Marketing: Sentiment?', 'Intern: Draft report?'].map((q, i) => (
                    <div key={i} className="px-3 py-2 bg-[#060451]/60 border border-[#4361EE]/20 rounded-lg text-[10px] md:text-xs text-white/60 text-center">
                        {q}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

/* ═══════════════════════════════════════════
   Project Data
   ═══════════════════════════════════════════ */
const projects = [
    {
        id: 'ai-feedback',
        num: '01',
        title: 'AI-Driven Customer Feedback Analysis',
        teaser: 'Turning multi-hour manual analysis into automated weekly pipelines.',
        skills: ['AI Prompt Engineering', 'Data Analysis', 'JTBD', 'Report Writing'],
        color: '#4361EE',
        brief: '"We have the data. We just can\'t use it fast enough."',
        briefDetail: 'High-value customer feedback was trapped and functionally invisible — scattered across weekly Looker exports, Reddit threads, community forums, and NPS data.',
        challenge: 'Manual analysis took so long that most weeks, it simply didn\'t happen. Teams weren\'t just reactive — they were flying blind, with no consistent pulse on what users were actually experiencing.',
        steps: [
            {
                title: 'Engineered a custom prompt chain',
                description: 'Built in Microsoft Copilot to ingest unstructured, multi-format datasets — clustering complaints by theme (not source) and filtering signal from noise.',
            },
            {
                title: 'Strict JTBD Syntax Output',
                description: 'Constrained AI to output in structured Job Story format: MTL (Maximize the Likelihood), MTE (Minimize the Effort), MTT (Minimize the Time). Each output maps directly to a user outcome.',
            },
        ],
        flowNodes: ['Raw Data Sources', 'Copilot AI Parser', 'Clustered Themes', 'Job Story Formatter', 'JTBD Insight Cards'],
        example: {
            label: 'Output Example',
            content: 'Minimize the effort to deploy security patches across all organizational devices whenever new updates are available.',
            story: 'When a new security patch is available, I want to easily deploy it across all devices so I can ensure security without consuming excessive IT resources.',
        },
        impact: [
            { icon: '⏱️', headline: 'Multi-hour → minutes', detail: 'Weekly feedback analysis now runs automatically' },
            { icon: '📈', headline: 'Reactive → proactive', detail: 'Teams gained a continuous pulse on user friction' },
            { icon: '🧠', headline: 'UX Maturity jump', detail: 'From occasional reviews to a reliable weekly discovery engine' },
        ],
        highlights: [
            { title: 'Stakeholder-first', detail: 'Reports ruthlessly scannable — every insight front and center.' },
            { title: 'Hallucination-proof', detail: 'Every AI insight cited back to original user quote. No reference = not in report.' },
        ],
    },
    {
        id: 'teamviewer-one',
        num: '02',
        title: 'Strategic Validation of TeamViewer ONE',
        teaser: 'Replacing subjective design debates with an objective A–F grading system.',
        skills: ['Prototype Evaluation', 'Heuristic Analysis', 'ODI Framework'],
        color: '#4361EE',
        brief: '"Is this prototype solving real problems — or just shipping features?"',
        briefDetail: 'Evaluating a massive unreleased flagship prototype across four complex flows: Onboarding, Company Readiness, Device Patching, and TIA Copilot (AI Remediation).',
        challenge: 'Subjective opinion between research and design teams is the #1 cause of friction. The goal: remove opinion entirely and replace it with a repeatable, objective system.',
        steps: [
            {
                title: 'Problem-Solution Assessment Matrix',
                description: 'Co-created with design, PMs, and stakeholders. Pre-validated user needs mapped against prototype features, graded A–F with commentary.',
                image: psaMatrixImg,
                imageAlt: 'Problem Solution Assessment Matrix',
            },
            {
                title: "Heuristic Evaluation — Nielsen's 10",
                description: 'Each flow evaluated against Nielsen\'s 10 Principles, surfacing cognitive load issues before a single line of production code was written.',
                image: heuristicEvalImg,
                imageAlt: 'Heuristic Evaluation Matrix',
            },
        ],
        heuristicFailures: [
            { icon: '❌', label: 'Information overload (H8)' },
            { icon: '❌', label: 'Unintuitive iconography (H1)' },
            { icon: '❌', label: 'No error recovery path (H9)' },
            { icon: '⚠️', label: 'Inconsistent feedback (H1)' },
        ],
        pushback: {
            intro: "Designers naturally challenged the A–F grades. To prevent subjective debates, we anchored every conversation to published standards.",
            points: [
                { label: "The Deflection", text: "Pointed directly to Nielsen's Heuristic #8 (Information Overload)." },
                { label: "The Shift", text: "Moved the debate from 'I like this layout' to 'Does this break the heuristic?'" },
                { label: "The Result", text: "Ego left the room instantly, and revisions were collaborative." }
            ]
        },
        impact: [
            { icon: '✅', headline: 'Content density reduced', detail: 'on the Company Readiness page' },
            { icon: '✅', headline: 'Iconography revised', detail: 'to align with user mental models' },
            { icon: '✅', headline: 'Strategy realigned', detail: 'Final build validated against JTBD/ODI needs, not PM assumptions' },
        ],
        takeaway: 'The best way to end a subjective debate is to never let one start.',
    },
    {
        id: 'knowledge-agent',
        num: '03',
        title: 'Knowledge Retrieval AI Agent',
        teaser: 'Turning a passive archive into an always-on, queryable research system.',
        skills: ['AI Agent Design', 'Knowledge Management', 'ReOps Infrastructure'],
        color: '#4361EE',
        brief: '"Finding a past study took hours. Most people just asked a researcher instead."',
        briefDetail: 'The UX team suffered from a Tribal Knowledge bottleneck. Institutional knowledge lived in researchers\' heads, buried folders, and inconsistently named files.',
        challenge: 'Hours lost per search. Constant PM interruptions. Low discoverability meant research impact wasn\'t compounding over time. A centralized nervous system was needed.',
        steps: [
            {
                title: 'Data Ingestion — Scoped & Structured',
                description: 'Agent trained exclusively on TeamViewer\'s proprietary UXR repository. Strict scope = no hallucination risk. Ingestion preserved report hierarchy, dates, and methodology tags.',
            },
            {
                title: 'Standardization & Calibration',
                description: 'Calibrated to match the team\'s reporting syntax, tone, and JTBD/ODI need-framing. Any output produced matches exact quality standards — not a generic AI template.',
            },
        ],
        useKnowledgeDiagram: true,
        impact: [
            { icon: '🔍', headline: 'Self-service research', detail: 'PMs and Marketing query past studies — no tickets, no interruptions' },
            { icon: '🎓', headline: 'Automated onboarding', detail: 'New interns match team quality from day one' },
            { icon: '🏗️', headline: 'ReOps culture shift', detail: 'Passive archive → active, queryable knowledge system' },
        ],
        takeaway: 'A research team\'s greatest untapped asset is its own history. Making the past searchable is itself a research contribution.',
    },
    {
        id: 'foundational-research',
        num: '04',
        title: 'Foundational Research & Usability Testing',
        teaser: 'Earning enterprise trust for an AI that patches 1,000 devices autonomously.',
        skills: ['User Interviews', 'Usability Testing', 'Opportunity Gap Mapping', 'ODI'],
        color: '#4361EE',
        brief: '"What would make an IT admin trust an AI to patch 1,000 devices — without breaking everything?"',
        briefDetail: 'TeamViewer\'s TIA can diagnose and deploy fixes autonomously. The question was trust — and what knowledge, transparency, and control admins need before handing over their fleet.',
        challenge: 'We needed to find out exactly what was preventing adoption without starting from scratch or wasting interview hours on the wrong questions.',
        steps: [
            { title: 'Pre-Research Alignment Workshops', description: 'Ran with VPs and PMs before any user contact. Every interview mapped to a validated business assumption. No scope creep. No surprises at readout.' },
            { title: 'Mining Previous Research', description: 'Used the UXRchive to surface existing signal. Avoided re-asking questions that had already been answered.' },
            { title: 'Need Prioritization', description: 'Focused interview time on the highest-risk, least-validated needs — ruthlessly cutting anything already well-understood.' },
            { title: 'Customer Interviews', description: 'Ran with enterprise IT admins. Participants rated each need on Importance (1–10) and Satisfaction (1–10).' },
            { title: 'Opportunity Gap Mapping', description: 'High Importance + Low Satisfaction = underserved (go here first). High + High = table stakes. Low = deprioritize.' },
        ],
        flowNodes: ['Alignment Workshop', 'Define Assumptions', 'User Interviews', 'Rate I×S', 'Opportunity Map', 'Roadmap Readout'],
        deliverablePhilosophy: {
            intro: "The format of your research is just as important as the research itself. Every readout was structured to answer one question in the first 30 seconds: \"Where's the value, and why should we care?\"",
            points: [
                { label: "Background Theory", text: "Ruthlessly cut. Stakeholders only need the actionable signal." },
                { label: "Methodology", text: "Summarized briefly or moved entirely to the appendix." },
                { label: "The Recommendations", text: "Placed front and center in highly scannable formats." }
            ]
        },
        impact: [
            { icon: '🎯', headline: 'Zero wasted cycles', detail: 'Every study traced to a validated business question' },
            { icon: '📊', headline: 'Needs quantified', detail: 'Roadmap backed by scored opportunity data, not gut feel' },
            { icon: '⚡', headline: 'Speed to insight', detail: 'Stakeholders acted on findings the same week they were shared' },
        ],
        takeaway: 'Research that sits in a deck no one reads has zero impact. Format is not a cosmetic choice — it is a strategic one.',
    },
];

/* ═══════════════════════════════════════════
   Expanded Project Content
   ═══════════════════════════════════════════ */
function ProjectBody({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pt-10 pb-12 space-y-20 md:space-y-24"
        >
            {/* Brief quote */}
            <div className="pl-6 border-l-[3px] border-[#4361EE]/40">
                <p className="font-serif text-2xl md:text-3xl text-white/80 italic leading-relaxed mb-4">{project.brief}</p>
                <p className="text-white/50 text-base leading-relaxed tracking-wide">{project.briefDetail}</p>
            </div>

            {/* Challenge */}
            <div className="flex gap-5 p-6 md:p-8 bg-amber-500/5 border border-amber-500/15 rounded-3xl">
                <span className="text-2xl shrink-0">⚠️</span>
                <div>
                    <p className="text-amber-400/80 text-xs md:text-sm font-bold tracking-widest uppercase mb-3">The Challenge</p>
                    <p className="text-white/60 text-base leading-relaxed">{project.challenge}</p>
                </div>
            </div>

            {/* Flow Diagram */}
            {project.flowNodes && (
                <div className="mt-8 mb-12">
                    <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-5">Pipeline Architecture</p>
                    <div className="bg-[#06040f] rounded-3xl border border-white/5 px-6 py-4 overflow-x-auto shadow-2xl">
                        <HorizFlow nodes={project.flowNodes} />
                    </div>
                </div>
            )}
            {project.useKnowledgeDiagram && (
                <div className="mt-8 mb-12">
                    <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-5">System Architecture</p>
                    <div className="bg-[#06040f] rounded-3xl border border-white/5 px-6 py-6 shadow-2xl">
                        <KnowledgeAgentDiagram />
                    </div>
                </div>
            )}

            {/* Steps */}
            <div>
                <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8">Strategy & Execution</p>
                <div className="space-y-12 relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4361EE]/40 via-[#4361EE]/20 to-transparent" />

                    {project.steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6 md:gap-8 pl-1"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-full bg-[#060451] border-2 border-[#4361EE]/40 flex items-center justify-center text-[#7B8FFF] text-sm font-bold z-10 shadow-[0_0_15px_rgba(67,97,238,0.3)]">
                                {i + 1}
                            </div>
                            <div className="flex-1 pb-4">
                                <h5 className="text-lg md:text-xl font-semibold text-white mb-3">{step.title}</h5>
                                <p className="text-white/55 text-base md:text-lg leading-relaxed">{step.description}</p>
                                {step.image && (
                                    <motion.div
                                        className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl cursor-zoom-in"
                                        whileHover={{ scale: 1.015 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <img src={step.image} alt={step.imageAlt} loading="lazy" className="w-full h-auto" />
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* JTBD Example */}
            {project.example && (
                <div className="p-6 md:p-8 bg-[#4361EE]/10 border border-[#4361EE]/20 rounded-3xl shadow-xl">
                    <p className="text-[#7B8FFF] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">{project.example.label}</p>
                    <p className="text-white/90 font-medium text-base md:text-lg mb-4">{project.example.content}</p>
                    <p className="text-white/50 text-sm md:text-base italic">Job Story: {project.example.story}</p>
                </div>
            )}

            {/* Heuristic failures */}
            {project.heuristicFailures && (
                <div>
                    <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">Top Heuristic Failures</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.heuristicFailures.map((f, i) => (
                            <div key={i} className="flex items-center gap-4 px-5 py-4 bg-white/[0.04] rounded-2xl border border-white/5 shadow-md">
                                <span className="text-lg md:text-xl">{f.icon}</span>
                                <span className="text-white/70 text-base tracking-wide">{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Navigating pushback (TV ONE) */}
            {project.pushback && (
                <div className="flex gap-5 p-6 md:p-8 bg-gradient-to-br from-[#4361EE]/10 to-transparent border border-[#4361EE]/20 rounded-3xl shadow-xl">
                    <span className="text-2xl shrink-0 mt-1">🧱</span>
                    <div>
                        <p className="text-[#7B8FFF] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">Navigating Pushback</p>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">{project.pushback.intro}</p>
                        <ul className="space-y-3">
                            {project.pushback.points.map((pt, i) => (
                                <li key={i} className="text-white/60 text-sm md:text-base flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 shrink-0 opacity-80" />
                                    <span className="leading-relaxed"><strong className="text-white/80 font-semibold">{pt.label}:</strong> {pt.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Deliverable Philosophy */}
            {project.deliverablePhilosophy && (
                <div className="flex gap-5 p-6 md:p-8 bg-gradient-to-br from-[#4361EE]/10 to-transparent border border-[#4361EE]/20 rounded-3xl shadow-xl">
                    <span className="text-2xl shrink-0 mt-1">⚡</span>
                    <div>
                        <p className="text-[#7B8FFF] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">Deliverable Philosophy</p>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">{project.deliverablePhilosophy.intro}</p>
                        <ul className="space-y-3">
                            {project.deliverablePhilosophy.points.map((pt, i) => (
                                <li key={i} className="text-white/60 text-sm md:text-base flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4361EE] mt-2 shrink-0 opacity-80" />
                                    <span className="leading-relaxed"><strong className="text-white/80 font-semibold">{pt.label}:</strong> {pt.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Highlights */}
            {project.highlights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.highlights.map((h, i) => (
                        <div key={i} className="p-6 md:p-8 bg-white/[0.04] rounded-3xl border border-white/5 shadow-lg">
                            <h5 className="text-white font-semibold text-lg mb-2">{h.title}</h5>
                            <p className="text-white/50 text-sm md:text-base leading-relaxed">{h.detail}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Impact */}
            <div className="pt-8">
                <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">The Impact</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {project.impact.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="stat-card-glow p-6 md:p-8 bg-white/[0.04] rounded-3xl border border-white/5 shadow-xl"
                        >
                            <span className="text-3xl lg:text-4xl mb-4 block opacity-90">{item.icon}</span>
                            <p className="text-white font-semibold text-base lg:text-lg mb-2">{item.headline}</p>
                            <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Takeaway */}
            {project.takeaway && (
                <div className="mt-16 border-l-[3px] border-[#4361EE]/40 pl-6">
                    <p className="text-[#7B8FFF] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-3">Key Takeaway</p>
                    <p className="font-serif text-xl md:text-3xl text-white/80 leading-relaxed italic">{project.takeaway}</p>
                </div>
            )}
        </motion.div>
    );
}

/* ═══════════════════════════════════════════
   Main — Expandable Accordion
   ═══════════════════════════════════════════ */
export function ProjectShowcase() {
    // using a Set-like state to allow multiple open at once. This fixes the "scroll to end" jump issue when toggling.
    const [openStates, setOpenStates] = useState({});

    const toggleOpen = (idx) => {
        setOpenStates(prev => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

    return (
        <section className="py-32 px-6 md:px-20 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-4xl mx-auto">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="section-line w-8 h-[1px] bg-[#4361EE]" />
                    <span className="text-[#4361EE] font-bold tracking-[0.3em] uppercase text-xs">Key Initiatives & Projects</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl text-white mb-20"
                >
                    The Work.
                </motion.h2>

                {/* Accordion */}
                <div className="space-y-12 md:space-y-16 border-t border-white/10 pt-10">
                    {projects.map((project, i) => {
                        const isOpen = !!openStates[i];
                        
                        return (
                            <div key={project.id} className="relative">
                                {/* ── Card Header ── */}
                                <button
                                    type="button"
                                    onClick={() => toggleOpen(i)}
                                    className={`w-full flex items-center gap-5 md:gap-8 p-6 md:p-8 rounded-[2rem] text-left group transition-all duration-300 border ${
                                        isOpen 
                                            ? 'bg-[#4361EE]/10 border-[#4361EE]/40 shadow-[0_0_30px_rgba(67,97,238,0.15)]' 
                                            : 'bg-[#111111] border-white/10 hover:border-white/20 hover:bg-[#161616]'
                                    }`}
                                    aria-expanded={isOpen}
                                >
                                    {/* Big ghost number */}
                                    <span
                                        className="font-black text-4xl md:text-6xl tabular-nums shrink-0 transition-colors duration-300"
                                        style={{ color: isOpen ? '#4361EE' : 'rgba(255,255,255,0.1)' }}
                                    >
                                        {project.num}
                                    </span>

                                    {/* Title + tags */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-serif text-xl md:text-3xl lg:text-4xl leading-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-white/40 text-sm md:text-base mt-2 leading-relaxed">
                                            {project.teaser}
                                        </p>

                                        {/* Skill pills (visible only when closed) */}
                                        <AnimatePresence>
                                            {!isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="flex flex-wrap gap-2.5 mt-4 overflow-hidden"
                                                >
                                                    {project.skills.map((s, si) => (
                                                        <span key={si} className="px-3 py-1.5 text-[11px] md:text-xs font-medium text-white/45 border border-white/10 rounded-full bg-white/[0.04]">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Expand icon */}
                                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-xl ${
                                        isOpen
                                            ? 'border-[#4361EE] bg-[#4361EE] text-white shadow-[#4361EE]/40'
                                            : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white/50 bg-[#0a0a0a]'
                                    }`}>
                                        <AnimatePresence mode="wait">
                                            {isOpen ? (
                                                <motion.span key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                    <Minus className="w-5 h-5 md:w-6 md:h-6" />
                                                </motion.span>
                                            ) : (
                                                <motion.span key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>

                                {/* ── Expanded Body ── */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            key="body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-0 md:pl-20 mt-4 md:mt-8">
                                                <ProjectBody project={project} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4361EE]/5 blur-[200px] rounded-full pointer-events-none" />
        </section>
    );
}
