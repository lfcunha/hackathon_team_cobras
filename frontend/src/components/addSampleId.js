/**
 * Created by luiscunha on 3/23/16.
 */



const addSampleId = (props) => {
    const addSample = props.addSample;
    return(
        <div>
            <input ref={node => {this.input=node;}}/>

           <button onClick={() => {addSample(this.input.value); this.input.value=''}}> Add Sample </ button>
            <ul>
                {this.props.dpccSamples.map(sample => {
                    <li key={sample.index}>
                        {sample.dpccSamples}
                    </li>
                })}
            </ul>
        </div>
    )
}


export default addSampleId