
const RecipeSteps = ({ steps }) => {

    return (
        <section>
            <div className="container py-12">
                <h3 className="font-semibold text-xl py-6">How to Make it</h3>
                <div>
                    {
                        steps.map((step, idx) => <div key={idx} className="step">
                            <h3>Step {idx + 1}</h3>
                            <p>{step}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default RecipeSteps;