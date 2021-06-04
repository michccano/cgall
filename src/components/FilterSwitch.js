import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";


function FilterSwitch() {
    return (
        <>
            <section className="filter_switch mt-3" >
                <div className="switch_holder text-center">




                <FormControlLabel
                    value="start"
                    control={<Checkbox  color="primary" />}
                    label="Birth"
                    labelPlacement="start"
                />
	

                <FormControlLabel 
                    value="start"
                    control={<Checkbox  color="primary" />}
                    label="Burn" 
                    labelPlacement="start" 
                />
                
                </div>
            </section>
        </>
    )
}

export default FilterSwitch
