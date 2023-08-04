import React from "react";
import "./MadlibsForm.css"

const MadlibsForm = ({ formData, handleChange, createStory }) => {


    const handleSubmit = (evt) => {
        evt.preventDefault();
        createStory(formData);
    };

    return (
        <div className="MadlibsForm">
            <form onSubmit={handleSubmit}>
                <input
                    name="noun"
                    type="text"
                    onChange={handleChange}
                    value={formData.noun}
                    placeholder="noun"
                />
                <input
                    name="noun2"
                    type="text"
                    onChange={handleChange}
                    value={formData.noun2}
                    placeholder="noun2"
                />
                <input
                    name="adjective"
                    type="text"
                    onChange={handleChange}
                    value={formData.adjective}
                    placeholder="adjective"
                />
                <input
                    name="color"
                    type="text"
                    onChange={handleChange}
                    value={formData.color}
                    placeholder="color"
                />
                <div className="MadlibsFormButton">
                    <button>Get Story</button>
                </div>
            </form>
        </div>
    )
}

export default MadlibsForm;