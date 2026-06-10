import { Hospital, Factory, Building2, Warehouse, GraduationCap, Fuel, BatteryCharging, Truck, ShoppingCart, Settings } from "lucide-react";

export interface Industry {
    id: string;
    slug: string;
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    challenge: string[];
    solution: string;
    solutionPoints: string[];
    useCases: string[];
    architecture: {
        device: string[];
        edge: string[];
        platform: string[];
        integration: string[];
    };
    impact: { label: string; value: string }[];
    features: string[];
    why: string[];
    icon: any;
}

export const industries: Industry[] = [
    {
        id: "healthcare",
        slug: "healthcare",
        title: "Healthcare & Smart Hospitals",
        heroTitle: "EdgeOne for Intelligent Healthcare Environments",
        heroSubtitle: "Real-time intelligence for clinical environments, patient safety, and operational efficiency.",
        challenge: [
            "Limited real-time visibility of patients, staff, and critical assets",
            "Manual asset tracking and equipment misplacement",
            "Delays in emergency response",
            "Environmental compliance risks (ICU, OT, cold storage)",
            "Disconnected medical devices and hospital systems"
        ],
        solution: "EdgeOne transforms hospitals into real-time intelligent environments by integrating wearables, IoT devices, and environmental sensors into a centralized dashboard with live alerts and automation workflows.",
        solutionPoints: [
            "BLE wearables and RTLS infrastructure",
            "Medical IoT devices",
            "Environmental sensors",
            "Edge gateways and industrial PCs",
            "HIS, EMR, and mobile applications"
        ],
        useCases: [
            "Real-Time Patient Tracking (RTLS)",
            "Smart Asset Tracking (wheelchairs, pumps, oxygen cylinders)",
            "ICU and OT environmental monitoring",
            "Cold chain vaccine monitoring",
            "Emergency response alerts and panic triggers"
        ],
        architecture: {
            device: ["Wearables", "BLE Tags", "Medical Devices", "Sensors"],
            edge: ["EdgeOne Gateway (Industrial Mini PC / Edge Server)", "Local processing and low-latency analytics"],
            platform: ["EdgeOne IoT Platform", "Dashboards", "Rules Engine", "Alerts", "Analytics"],
            integration: ["HIS", "EMR", "Mobile Apps", "Web Portal"]
        },
        impact: [
            { label: "Reduction in emergency response time", value: "35%" },
            { label: "Reduction in asset search time", value: "60%" },
            { label: "Reduction in equipment loss", value: "40%" },
            { label: "Improvement in operational efficiency", value: "25%" }
        ],
        features: [
            "Multi-tenant architecture",
            "Role-based access control",
            "On-premise, hybrid, or cloud deployment",
            "End-to-end encrypted communication",
            "White-label capability",
            "High availability and scalability"
        ],
        why: [
            "Built for real-time edge intelligence",
            "Designed for healthcare-grade reliability",
            "Scalable from single hospital to multi-chain networks",
            "Hardware + platform + deployment expertise under one ecosystem"
        ],
        icon: Hospital
    },
    {
        id: "manufacturing",
        slug: "manufacturing",
        title: "Manufacturing",
        heroTitle: "EdgeOne for Smart Manufacturing",
        heroSubtitle: "Transform factory floors with predictive maintenance, machine health monitoring, and real-time OEE tracking.",
        challenge: [
            "Unplanned downtime and reactive maintenance",
            "Limited production line visibility",
            "Manual OEE tracking",
            "High energy consumption",
            "Data silos across machines and systems"
        ],
        solution: "EdgeOne connects PLCs, CNC machines, sensors, and energy meters into a unified real-time factory intelligence platform with predictive analytics and centralized monitoring.",
        solutionPoints: [
            "Industrial protocol support (Modbus, OPC-UA, MQTT)",
            "Vibration sensors and energy meters",
            "Industrial Edge PCs",
            "Real-time dashboards and AI analytics",
            "ERP / MES integration"
        ],
        useCases: [
            "Live OEE monitoring",
            "Predictive maintenance",
            "Machine health monitoring",
            "Production performance tracking",
            "Energy consumption analytics"
        ],
        architecture: {
            device: ["PLCs", "CNC Machines", "Vibration Sensors", "Energy Meters"],
            edge: ["Industrial Edge PCs", "Protocol Converters", "Local Analytics"],
            platform: ["EdgeOne IoT Platform", "Real-time dashboards", "Alerts", "AI analytics"],
            integration: ["ERP", "MES", "BI tools"]
        },
        impact: [
            { label: "Reduction in downtime", value: "40%" },
            { label: "Reduction in maintenance costs", value: "25%" },
            { label: "Increase in production efficiency", value: "20%" },
            { label: "Reduction in energy waste", value: "30%" }
        ],
        features: [
            "Industrial protocol support",
            "High-frequency data ingestion",
            "Custom rule engine",
            "Multi-site monitoring",
            "Secure edge-to-cloud communication"
        ],
        why: [
            "Industrial-ready architecture",
            "Edge-first processing for low latency",
            "AI-driven predictive intelligence",
            "Scalable across factories and regions"
        ],
        icon: Factory
    },
    {
        id: "smart-buildings",
        slug: "smart-buildings",
        title: "Smart Buildings",
        heroTitle: "EdgeOne for Intelligent Infrastructure",
        heroSubtitle: "Optimize energy, comfort, and operational performance across commercial and residential facilities.",
        challenge: [
            "Rising energy costs",
            "Inefficient HVAC operations",
            "Lack of occupancy intelligence",
            "Poor space utilization visibility"
        ],
        solution: "EdgeOne integrates building systems into a centralized intelligence layer to optimize energy, comfort, and operational performance.",
        solutionPoints: [
            "Smart Meters and HVAC Controllers",
            "Occupancy and IAQ Sensors",
            "Building Edge Gateway",
            "EdgeOne Dashboard",
            "BMS integration"
        ],
        useCases: [
            "Energy management and optimization",
            "HVAC monitoring and automation",
            "Occupancy-based lighting control",
            "Indoor air quality monitoring"
        ],
        architecture: {
            device: ["Smart Meters", "HVAC Controllers", "Occupancy Sensors"],
            edge: ["Building Edge Gateway"],
            platform: ["EdgeOne Dashboard", "Automation Engine"],
            integration: ["BMS", "Facility Management Systems"]
        },
        impact: [
            { label: "Reduction in energy costs", value: "30%" },
            { label: "Improvement in space utilization", value: "25%" },
            { label: "Reduction in carbon footprint", value: "20%" }
        ],
        features: [
            "Multi-building management",
            "Real-time alerting",
            "Custom reporting",
            "Secure tenant-based access"
        ],
        why: [
            "Unified building intelligence",
            "Scalable from single building to enterprise campuses",
            "Edge processing for real-time response"
        ],
        icon: Building2
    },
    {
        id: "logistics",
        slug: "logistics-fleet",
        title: "Logistics & Fleet",
        heroTitle: "EdgeOne for Connected Mobility",
        heroSubtitle: "Real-time fleet monitoring, route optimization, and cold-chain intelligence.",
        challenge: [
            "Limited fleet visibility",
            "Fuel theft and misuse",
            "Route inefficiencies",
            "Cold-chain compliance risks"
        ],
        solution: "EdgeOne provides real-time fleet monitoring, route optimization, and cold-chain intelligence using GPS, IoT sensors, and edge analytics.",
        solutionPoints: [
            "GPS Trackers and Fuel Sensors",
            "Temperature Sensors",
            "Vehicle Gateway",
            "Fleet Dashboard",
            "ERP integration"
        ],
        useCases: [
            "Live vehicle tracking",
            "Geo-fencing alerts",
            "Fuel consumption monitoring",
            "Cold-chain temperature tracking",
            "Driver behavior analytics"
        ],
        architecture: {
            device: ["GPS Trackers", "Fuel Sensors", "Temperature Sensors"],
            edge: ["Vehicle Gateway"],
            platform: ["Fleet Dashboard", "Analytics Engine"],
            integration: ["ERP", "Logistics Systems"]
        },
        impact: [
            { label: "Reduction in fuel loss", value: "35%" },
            { label: "Faster deliveries", value: "20%" },
            { label: "Increase in fleet utilization", value: "30%" }
        ],
        features: [
            "Real-time alerts",
            "Historical route replay",
            "Secure multi-vehicle management",
            "API integration support"
        ],
        why: [
            "Edge intelligence for moving assets",
            "Scalable fleet-wide deployment",
            "Enterprise-grade monitoring and analytics"
        ],
        icon: Truck
    },
    {
        id: "warehousing",
        slug: "warehousing",
        title: "Warehousing",
        heroTitle: "EdgeOne for Smart Warehouse Intelligence",
        heroSubtitle: "Automate inventory tracking, asset management, and environmental compliance in real-time.",
        challenge: [
            "Inventory inaccuracies",
            "Asset misplacement",
            "Environmental compliance issues",
            "Inefficient dispatch processes"
        ],
        solution: "EdgeOne connects RFID, BLE, and environmental systems into a real-time warehouse intelligence platform.",
        solutionPoints: [
            "RFID and BLE Tags",
            "Environmental Sensors",
            "Warehouse Edge Server",
            "Inventory Dashboard",
            "WMS / ERP integration"
        ],
        useCases: [
            "Real-time inventory tracking",
            "Asset location tracking",
            "Cold storage monitoring",
            "Worker safety monitoring"
        ],
        architecture: {
            device: ["RFID", "BLE Tags", "Environmental Sensors"],
            edge: ["Warehouse Edge Server"],
            platform: ["Inventory Dashboard", "Alerts"],
            integration: ["WMS", "ERP"]
        },
        impact: [
            { label: "Reduction in inventory errors", value: "40%" },
            { label: "Reduction in dispatch delays", value: "25%" },
            { label: "Reduction in asset loss", value: "30%" }
        ],
        features: [
            "Real-time asset mapping",
            "Automation workflows",
            "Role-based warehouse access"
        ],
        why: [
            "Accurate, live warehouse intelligence",
            "Scalable across multi-warehouse operations",
            "Edge-enabled real-time tracking"
        ],
        icon: Warehouse
    },
    {
        id: "oil-gas",
        slug: "oil-gas",
        title: "Oil & Gas",
        heroTitle: "EdgeOne for Critical Infrastructure Monitoring",
        heroSubtitle: "Build resilient, secure, and ruggedized monitoring systems for harsh industrial environments.",
        challenge: [
            "Remote asset monitoring complexity",
            "Gas leak risks",
            "Equipment failures in harsh environments",
            "Compliance and safety requirements"
        ],
        solution: "EdgeOne enables remote monitoring and predictive maintenance across oil fields, refineries, and pipelines.",
        solutionPoints: [
            "Gas and Pressure Sensors",
            "Flow Meters",
            "Rugged Industrial Edge Systems",
            "Real-time Monitoring Dashboard",
            "SCADA / ERP integration"
        ],
        useCases: [
            "Gas leak detection",
            "Pressure and flow monitoring",
            "Remote equipment monitoring",
            "Compliance reporting"
        ],
        architecture: {
            device: ["Gas Sensors", "Pressure Sensors", "Flow Meters"],
            edge: ["Rugged Industrial Edge Systems"],
            platform: ["Real-time Monitoring Dashboard"],
            integration: ["SCADA", "ERP", "Compliance Systems"]
        },
        impact: [
            { label: "Reduction in safety incidents", value: "30%" },
            { label: "Reduction in downtime", value: "35%" },
            { label: "Reduction in compliance violations", value: "50%" }
        ],
        features: [
            "Ruggedized hardware compatibility",
            "Remote site connectivity",
            "High-availability architecture"
        ],
        why: [
            "Built for mission-critical environments",
            "Secure and resilient edge deployments",
            "Enterprise-grade industrial reliability"
        ],
        icon: Fuel
    },
    {
        id: "retail",
        slug: "retail-analytics",
        title: "Retail Analytics",
        heroTitle: "EdgeOne for Intelligent Retail Spaces",
        heroSubtitle: "Understand customer behavior and optimize store operations with edge AI and sensor fusion.",
        challenge: [
            "Limited customer behavior insights",
            "Stock-outs and shelf inefficiencies",
            "Inconsistent demand forecasting",
            "Poor store performance visibility"
        ],
        solution: "EdgeOne integrates edge AI, sensors, and POS systems to deliver real-time retail intelligence.",
        solutionPoints: [
            "Smart Cameras and RFID",
            "POS Systems integration",
            "Retail Edge AI Server",
            "Analytics Dashboard",
            "ERP / CRM integration"
        ],
        useCases: [
            "Footfall analytics",
            "Heatmap analysis",
            "Shelf monitoring",
            "Inventory tracking",
            "Demand forecasting"
        ],
        architecture: {
            device: ["Smart Cameras", "RFID", "POS Systems"],
            edge: ["Retail Edge AI Server"],
            platform: ["Analytics Dashboard"],
            integration: ["ERP", "POS", "CRM"]
        },
        impact: [
            { label: "Increase in sales conversion", value: "20%" },
            { label: "Reduction in stock-outs", value: "30%" },
            { label: "Improvement in customer engagement", value: "25%" }
        ],
        features: [
            "AI-enabled analytics",
            "Multi-store monitoring",
            "Secure data processing"
        ],
        why: [
            "Edge AI-powered retail intelligence",
            "Scalable across retail chains",
            "Real-time operational visibility"
        ],
        icon: ShoppingCart
    },
    {
        id: "smart-campus",
        slug: "smart-campus",
        title: "Smart Campus",
        heroTitle: "EdgeOne for Intelligent Educational Ecosystems",
        heroSubtitle: "Create safe, sustainable, and connected campus environments for students and faculty.",
        challenge: [
            "Energy inefficiency",
            "Campus-wide security concerns",
            "Manual attendance tracking",
            "Asset mismanagement"
        ],
        solution: "EdgeOne connects campus infrastructure into a centralized monitoring and automation platform.",
        solutionPoints: [
            "Access Control and Cameras",
            "Smart Meters",
            "Campus Edge Server",
            "Central Monitoring Dashboard",
            "Campus ERP integration"
        ],
        useCases: [
            "Smart attendance systems",
            "Campus asset tracking",
            "Energy optimization",
            "Security alerts and surveillance integration"
        ],
        architecture: {
            device: ["Access Control", "Cameras", "Smart Meters"],
            edge: ["Campus Edge Server"],
            platform: ["Central Monitoring Dashboard"],
            integration: ["Campus ERP", "Student Systems"]
        },
        impact: [
            { label: "Reduction in energy consumption", value: "25%" },
            { label: "Faster security response", value: "40%" },
            { label: "Reduction in asset loss", value: "30%" }
        ],
        features: [
            "Multi-building monitoring",
            "Role-based access for administrators",
            "Secure student and faculty data handling"
        ],
        why: [
            "Unified campus intelligence",
            "Scalable from schools to universities",
            "Edge-enabled real-time decision systems"
        ],
        icon: GraduationCap
    },
    {
        id: "industrial-automation",
        slug: "industrial-automation",
        title: "Industrial Automation",
        heroTitle: "EdgeOne for Advanced Industrial Intelligence",
        heroSubtitle: "Bridge the gap between OT and IT with edge-first automation intelligence.",
        challenge: [
            "Legacy system limitations",
            "Lack of predictive analytics",
            "Disconnected automation layers",
            "Manual compliance processes"
        ],
        solution: "EdgeOne integrates PLCs, SCADA, IoT sensors, and AI analytics into a centralized automation intelligence layer.",
        solutionPoints: [
            "PLCs and SCADA",
            "IoT Sensors",
            "Industrial Edge Gateway",
            "Automation Dashboard",
            "MES / BI Systems integration"
        ],
        useCases: [
            "Real-time process monitoring",
            "Predictive analytics",
            "Automated alerts and workflows",
            "Multi-site industrial monitoring"
        ],
        architecture: {
            device: ["PLCs", "SCADA", "IoT Sensors"],
            edge: ["Industrial Edge Gateway"],
            platform: ["Automation Dashboard", "AI Analytics"],
            integration: ["ERP", "MES", "BI Systems"]
        },
        impact: [
            { label: "Improvement in process efficiency", value: "30%" },
            { label: "Reduction in downtime", value: "35%" },
            { label: "Reduction in maintenance costs", value: "25%" }
        ],
        features: [
            "Industrial protocol support",
            "AI-based anomaly detection",
            "High-availability deployments"
        ],
        why: [
            "Edge-first automation intelligence",
            "Enterprise-ready scalability",
            "Designed for high-performance industrial environments"
        ],
        icon: Settings
    }
];
