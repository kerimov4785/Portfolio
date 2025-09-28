import Page1 from './Page1'
import Page2 from './Page2'

function SkillsBox() {
    return (
        <section className="all-skills">
            <Page1 />
            <Page2 />
            <div style={{height:"200px"}} ></div>
        </section>
    )
}

export default SkillsBox