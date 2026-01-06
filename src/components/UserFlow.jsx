import React, { useCallback, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType,
    Handle,
    Position,
    BaseEdge,
    getSmoothStepPath,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Node Component ---
const CustomNode = ({ data, selected }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-4 rounded-2xl bg-[#1B1B1B] border transition-all duration-300 shadow-xl ${selected || data.isHighlight
                ? 'border-[#FFC107] shadow-[#FFC107]/20 z-50'
                : 'border-white/10 hover:border-[#FFC107]/70'
                }`}
            style={{ minWidth: '220px' }}
        >
            <Handle type="target" position={Position.Top} className="!bg-[#FFC107] !border-none !w-2 !h-2" />

            <div className="flex flex-col gap-1">
                <span className={`text-[9px] uppercase tracking-[0.25em] font-black ${data.isHighlight ? 'text-[#FFC107]' : 'text-white/30'}`}>
                    {data.type || 'Standard Node'}
                </span>
                <h4 className="text-white font-bold text-base leading-tight font-sans">{data.label}</h4>
                {data.details && (
                    <p className="text-white/40 text-[11px] mt-2 leading-relaxed border-t border-white/5 pt-2 font-medium">
                        {data.details}
                    </p>
                )}
            </div>

            <Handle type="source" position={Position.Bottom} className="!bg-[#FFC107] !border-none !w-2 !h-2" />
        </motion.div>
    );
};

// --- Custom Animated Edge ---
const AnimatedSVGEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
}) => {
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={{ ...style, strokeWidth: 2, strokeOpacity: 0.2 }} />
            <motion.path
                id={id}
                d={edgePath}
                fill="none"
                stroke="#FFC107"
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
        </>
    );
};

const nodeTypes = {
    custom: CustomNode,
};

const edgeTypes = {
    animated: AnimatedSVGEdge,
};

// --- Initial Data ---
const initialNodes = [
    {
        id: 'start',
        type: 'custom',
        position: { x: 400, y: 0 },
        data: { label: 'Registration / Signup', type: 'Phase: Entry', details: 'Checking legal age compliance' },
    },
    {
        id: 'onboarding',
        type: 'custom',
        position: { x: 400, y: 150 },
        data: { label: 'Onboarding', type: 'Phase: Guide', details: 'Walkthrough (Features, Location), Homebrewing Consent' },
    },
    {
        id: 'homepage',
        type: 'custom',
        position: { x: 400, y: 320 },
        data: { label: 'Homepage', type: 'Central Hub', isHighlight: true, details: 'The core navigation axis for all features' },
    },

    // Branch A: Discover
    {
        id: 'discover',
        type: 'custom',
        position: { x: -200, y: 550 },
        data: { label: 'Discover', type: 'Branch A', details: 'Search Brewery & Search Beer' },
    },
    {
        id: 'discover-breweries',
        type: 'custom',
        position: { x: -350, y: 700 },
        data: { label: 'Breweries', type: 'Explore', details: 'Search, Region, Distance, Speciality' },
    },
    {
        id: 'discover-beer',
        type: 'custom',
        position: { x: -50, y: 700 },
        data: { label: 'Beer', type: 'Explore', details: 'Style, Ingredients, ABV, IBU, Flavor filters' },
    },
    {
        id: 'discover-action',
        type: 'custom',
        position: { x: -200, y: 850 },
        data: { label: 'Action Selected', type: 'Post-Selection', details: 'Find beer, History, Specialty, Price' },
    },

    // Branch B: Recipes
    {
        id: 'recipes',
        type: 'custom',
        position: { x: 100, y: 550 },
        data: { label: 'Recipes', type: 'Branch B', details: 'Beginner/Admin levels, Brewmaster tags, Social Sharing/Saving' },
    },

    // Branch C: Events
    {
        id: 'events',
        type: 'custom',
        position: { x: 400, y: 550 },
        data: { label: 'Events', type: 'Branch C', details: 'Location alerts, Time/Date, Anonymous discussions' },
    },

    // Branch D: Profile
    {
        id: 'profile',
        type: 'custom',
        position: { x: 700, y: 550 },
        data: { label: 'Profile', type: 'Branch D', details: 'User Details, Saved Recipes, Friends, Notifications' },
    },

    // Branch E: Community
    {
        id: 'community',
        type: 'custom',
        position: { x: 1000, y: 550 },
        data: { label: 'Community', type: 'Branch E', details: 'Post creation, Categorized search, Like/Dislike interactions' },
    },
];

const initialEdges = [
    { id: 'e-start-onboarding', source: 'start', target: 'onboarding', type: 'animated' },
    { id: 'e-onboarding-home', source: 'onboarding', target: 'homepage', type: 'animated' },

    // Hub connections
    { id: 'e-home-discover', source: 'homepage', target: 'discover', type: 'animated' },
    { id: 'e-home-recipes', source: 'homepage', target: 'recipes', type: 'animated' },
    { id: 'e-home-events', source: 'homepage', target: 'events', type: 'animated' },
    { id: 'e-home-profile', source: 'homepage', target: 'profile', type: 'animated' },
    { id: 'e-home-community', source: 'homepage', target: 'community', type: 'animated' },

    // Discover branches
    { id: 'e-disc-brew', source: 'discover', target: 'discover-breweries', type: 'animated' },
    { id: 'e-disc-beer', source: 'discover', target: 'discover-beer', type: 'animated' },
    { id: 'e-brew-action', source: 'discover-breweries', target: 'discover-action', type: 'animated' },
    { id: 'e-beer-action', source: 'discover-beer', target: 'discover-action', type: 'animated' },
];

const UserFlow = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, type: 'animated' }, eds)),
        [setEdges]
    );

    const defaultEdgeOptions = useMemo(() => ({
        style: { stroke: '#FFC107', strokeWidth: 2 },
        type: 'animated',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#FFC107',
            width: 20,
            height: 20,
        },
    }), []);

    return (
        <div className="w-full h-[700px] md:h-[800px] bg-[#0d0d0d] rounded-[2.5rem] border border-white/5 relative group overflow-hidden shadow-inner">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                fitView
                className="transition-all duration-500"
                minZoom={0.1}
                maxZoom={1.5}
                colorMode="dark"
            >
                <Background color="#1a1a1a" gap={20} variant="dots" />
                <Controls className="!bg-[#1B1B1B] !border-white/10 fill-white [&_button]:!border-white/5 !shadow-none" />
                <MiniMap
                    nodeColor="#333"
                    maskColor="rgba(0, 0, 0, 0.8)"
                    className="!bg-[#1B1B1B] !border-white/5 rounded-xl border !shadow-none"
                    zoomable
                    pannable
                />
            </ReactFlow>

            {/* Overlay Info */}
            <div className="absolute top-8 left-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 pointer-events-none z-10 hidden md:block">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">BrewQuest User Flow</h4>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                    <p className="text-white/40 text-[10px] uppercase tracking-widest leading-none">Interactive Panning & Zooming</p>
                </div>
            </div>
        </div>
    );
};

export default UserFlow;
