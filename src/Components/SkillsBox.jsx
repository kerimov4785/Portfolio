import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function SkillsBox() {
    return (
        <section className="all-skills">
            <Page1 />
            <Page2 />
            <Page3 />
            <div style={{height:"200px"}} ></div>
        </section>
    )
}

export default SkillsBox