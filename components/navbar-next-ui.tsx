"use client";
import { Navbar, Button, Link, Text, Dropdown, Grid, Tooltip, Card } from "@nextui-org/react";
import logo from "@/public/ptdi.png";
// import { icons } from "./Icons.js";

export default function App() {
    const collapseItems = [
        "Features",
        "Customers",
        "Pricing",
        "Company",
        "Legal",
        "Team",
        "Help & Feedback",
        "Login",
        "Sign Up",
    ];

    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    <img
                        src={logo.src}
                        className="h-8 mr-3"
                        alt="PT. Dirgantara Indonesia Logo"
                    />
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                        <Tooltip
                            content={
                                <div id="dropdownNavbar" className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    </ul>
                                    <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            }
                            trigger="hover"
                            color="primary"
                            placement="bottomStart"
                            hideArrow
                            rounded
                        >
                            <Link>
                                <Dropdown isBordered>
                                    <Navbar.Item>
                                        <Dropdown.Button
                                            auto
                                            light
                                            css={{
                                                px: 0,
                                                dflex: "center",
                                                svg: { pe: "none" },
                                            }}
                                            // iconRight={icons.chevron}
                                            ripple={false}
                                        >
                                            Customer
                                        </Dropdown.Button>
                                    </Navbar.Item>
                                    <Dropdown.Menu
                                        aria-label="ACME features"
                                        css={{
                                            $$dropdownMenuWidth: "340px",
                                            $$dropdownItemHeight: "70px",
                                            "& .nextui-dropdown-item": {
                                                py: "$4",
                                                // dropdown item left icon
                                                svg: {
                                                    color: "$secondary",
                                                    mr: "$4",
                                                },
                                                // dropdown item title
                                                "& .nextui-dropdown-item-content": {
                                                    w: "100%",
                                                    fontWeight: "$semibold",
                                                },
                                            },
                                        }}
                                    >
                                        <Dropdown.Item
                                            key="autoscaling"
                                            showFullDescription
                                            description="ACME scales apps to meet user demand, automagically, based on load."
                                        // icon={icons.scale}
                                        >
                                            Autoscaling
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            key="usage_metrics"
                                            showFullDescription
                                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                        // icon={icons.activity}
                                        >
                                            Usage Metrics
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            key="production_ready"
                                            showFullDescription
                                            description="ACME runs on ACME, join us and others serving requests at web scale."
                                        // icon={icons.flash}
                                        >
                                            Production Ready
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            key="99_uptime"
                                            showFullDescription
                                            description="Applications stay on the grid with high availability and high uptime guarantees."
                                        // icon={icons.server}
                                        >
                                            +99% Uptime
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            key="supreme_support"
                                            showFullDescription
                                            description="Overcome any challenge with a supporting team ready to respond."
                                        // icon={icons.user}
                                        >
                                            +Supreme Support
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </Link>
                        </Tooltip>
                <Dropdown isBordered>
                    <Navbar.Item>
                        <Dropdown.Button
                            auto
                            light
                            css={{
                                px: 0,
                                dflex: "center",
                                svg: { pe: "none" },
                            }}
                            // iconRight={icons.chevron}
                            ripple={false}
                        >
                            Customer
                        </Dropdown.Button>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="ACME features"
                        css={{
                            $$dropdownMenuWidth: "340px",
                            $$dropdownItemHeight: "70px",
                            "& .nextui-dropdown-item": {
                                py: "$4",
                                // dropdown item left icon
                                svg: {
                                    color: "$secondary",
                                    mr: "$4",
                                },
                                // dropdown item title
                                "& .nextui-dropdown-item-content": {
                                    w: "100%",
                                    fontWeight: "$semibold",
                                },
                            },
                        }}
                    >
                        <Dropdown.Item
                            key="autoscaling"
                            showFullDescription
                            description="ACME scales apps to meet user demand, automagically, based on load."
                        // icon={icons.scale}
                        >
                            Autoscaling
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="usage_metrics"
                            showFullDescription
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                        // icon={icons.activity}
                        >
                            Usage Metrics
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="production_ready"
                            showFullDescription
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                        // icon={icons.flash}
                        >
                            Production Ready
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="99_uptime"
                            showFullDescription
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                        // icon={icons.server}
                        >
                            +99% Uptime
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="supreme_support"
                            showFullDescription
                            description="Overcome any challenge with a supporting team ready to respond."
                        // icon={icons.user}
                        >
                            +Supreme Support
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown isBordered>
                    <Navbar.Item>
                        <Dropdown.Button
                            auto
                            light
                            css={{
                                px: 0,
                                dflex: "center",
                                svg: { pe: "none" },
                            }}
                            // iconRight={icons.chevron}
                            ripple={false}
                        >
                            Aircraft
                        </Dropdown.Button>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="ACME features"
                        css={{
                            $$dropdownMenuWidth: "340px",
                            $$dropdownItemHeight: "70px",
                            "& .nextui-dropdown-item": {
                                py: "$4",
                                // dropdown item left icon
                                svg: {
                                    color: "$secondary",
                                    mr: "$4",
                                },
                                // dropdown item title
                                "& .nextui-dropdown-item-content": {
                                    w: "100%",
                                    fontWeight: "$semibold",
                                },
                            },
                        }}
                    >
                        <Dropdown.Item
                            key="autoscaling"
                            showFullDescription
                            description="ACME scales apps to meet user demand, automagically, based on load."
                        // icon={icons.scale}
                        >
                            Autoscaling
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="usage_metrics"
                            showFullDescription
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                        // icon={icons.activity}
                        >
                            Usage Metrics
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="production_ready"
                            showFullDescription
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                        // icon={icons.flash}
                        >
                            Production Ready
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="99_uptime"
                            showFullDescription
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                        // icon={icons.server}
                        >
                            +99% Uptime
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="supreme_support"
                            showFullDescription
                            description="Overcome any challenge with a supporting team ready to respond."
                        // icon={icons.user}
                        >
                            +Supreme Support
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Link isActive href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">Scheduled Maintenance Level</Navbar.Link>
                <Navbar.Link href="#">Certificates</Navbar.Link>
                <Navbar.Toggle aria-label="toggle navigation" />
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
                {/* <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}
