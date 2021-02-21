import React from 'react'



function Home() {
    return (
        <div>
            <div className='top_nav_bar'>
            </div>
            <div className='topbar-lhs'>
                <section className='nav-pane'>
                    <a href="/Dashboard" id="sys-userhome">
                        <nav className="left-nav-item" data-ember-action="1044">
                            <span className="_nav-right-arrow zod-icons _icon_chevron_right"></span>
                            <div className="_nav-left-border"></div>
                            <span className="zod-coloured-icons">
                                <span className="zod-icons _icon_back_outline"></span>
                            </span>
                            <span className="nav-title">User DashBoard</span>
                        </nav>
                    </a>
                    <a href="/Product" id="sys-userhome">
                        <nav className="left-nav-item" data-ember-action="1044">
                            <span className="_nav-right-arrow zod-icons _icon_chevron_right"></span>
                            <div className="_nav-left-border"></div>
                            <span className="zod-coloured-icons">
                                <span className="zod-icons _icon_back_outline"></span>
                            </span>
                            <span className="nav-title">Product</span>
                        </nav>
                    </a>
                    <a href="/Inventory" id="sys-userhome">
                        <nav className="left-nav-item" data-ember-action="1044">
                            <span className="_nav-right-arrow zod-icons _icon_chevron_right"></span>
                            <div className="_nav-left-border"></div>
                            <span className="zod-coloured-icons">
                                <span className="zod-icons _icon_back_outline"></span>
                            </span>
                            <span className="nav-title">Inventory</span>
                        </nav>
                    </a>
                    <a href="/Warehouse" id="sys-userhome">
                        <nav className="left-nav-item" data-ember-action="1044">
                            <span className="_nav-right-arrow zod-icons _icon_chevron_right"></span>
                            <div className="_nav-left-border"></div>
                            <span className="zod-coloured-icons">
                                <span className="zod-icons _icon_back_outline"></span>
                            </span>
                            <span className="nav-title">Warehouse</span>
                        </nav>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Home
