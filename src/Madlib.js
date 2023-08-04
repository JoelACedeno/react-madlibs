import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import "./Madlib.css"

const Madlib = () => {
    const initialFormData = { noun: '', noun2: '', adjective: '', color: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [madlib, setMadlib] = useState('');

    const createStory = (data) => {
        const story = `There was a ${data.adjective} ${data.noun} who loved a ${data.color} ${data.noun2}.`;
        setMadlib(story);
        setFormData(initialFormData);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData({ ...formData, [name]: value });
    };

    const reset = () => {
        setMadlib('');
    }

    return (
        <div className="Madlib">
            <h1>Madlibs!</h1>
            {!madlib ?
                (<MadlibsForm formData={formData} handleChange={handleChange} createStory={createStory} />) :
                (<><p>{madlib}</p>
                    <button onClick={reset}>Restart</button></>)}
        </div>
    )
}

export default Madlib;