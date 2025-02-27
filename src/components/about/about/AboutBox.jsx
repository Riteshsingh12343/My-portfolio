import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        {/* project */}
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title ">10</h3>
                <span className="about__subtitle">Project complete</span>
            </div>
        </div>
        {/* code crusader */}

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle"> Code Crusader</span>
            </div>
        </div>
        {/* people Section */}
        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle"> Me and My friend both are Satisfied</span>
            </div>
        </div>
        {/* coffee section */}

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title ">50</h3>
                <span className="about__subtitle"> Cup of coffee</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox
