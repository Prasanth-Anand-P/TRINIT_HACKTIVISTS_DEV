import React,{useState} from "react";
import './CropState.css'

export default function Chat(){

    const[state, setState] = useState()
    console.log(state);
    var cp = document.getElementById('cropsvalue');
    if(state === 'Tamil Nadu'){
        cp.innerHTML = `<ul>
        <li>Rice</li>
        <li>Paddy</li>
        <li>Millets</li>
        </ul>`;
    }

    if(state === 'Kerala'){
        cp.innerHTML = `<ul>
        <li>Rubber</li>
        <li>Coconut</li>
        <li>Tea</li>
        </ul>`;
    }
    
    if(state === 'Rajasthan'){
        cp.innerHTML = `<ul>
        <li>Wheat</li>
        <li>Rice</li>
        <li>Oil Seeds</li>
        </ul>`;
    }

    return(
        <div class="croppg">

            <h2 id="croptit">Know your Crop</h2>
           <div class="sname">

           <select name="states" id="states" class="form-control" value={state} onChange={(e)=>setState(e.target.value)}>
                <option selected>Select State</option>
                <option >Andhra Pradesh</option>
                <option >Andaman and Nicobar Islands</option>
                <option >Arunachal Pradesh</option>
                <option >Assam</option>
                <option >Bihar</option>
                <option >Chandigarh</option>
                <option >Chhattisgarh</option>
                <option>Dadar and Nagar Haveli</option>
                <option >Daman and Diu</option>
                <option >Delhi</option>
                <option >Lakshadweep</option>
                <option >Puducherry</option>
                <option >Goa</option>
                <option >Gujarat</option>
                <option >Haryana</option>
                <option >Himachal Pradesh</option>
                <option >Jammu and Kashmir</option>
                <option >Jharkhand</option>
                <option >Karnataka</option>
                <option >Kerala</option>
                <option >Madhya Pradesh</option>
                <option >Maharashtra</option>
                <option >Manipur</option>
                <option >Meghalaya</option>
                <option >Mizoram</option>
                <option >Nagaland</option>
                <option >Odisha</option>
                <option >Punjab</option>
                <option >Rajasthan</option>
                <option >Sikkim</option>
                <option >Tamil Nadu</option>
                <option >Telangana</option>
                <option >Tripura</option>
                <option >Uttar Pradesh</option>
                <option >Uttarakhand</option>
                <option >West Bengal</option>
            </select>

            <h2 id="cropsvalue">

            </h2>


           </div>
        </div>
    );
}