import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';


export const MultipleMS = ({types=["gg"],value=[],handleSelectChange=f=>f,...props}) =>
        <div key={100000} className="section">
            {console.log("TIPEJOS",types)}
            {console.log("ESCOGE",value)}
            <h3 className="section-heading">Preferencia de Cursos</h3>
        {types.map((n,i)=>
            <div key={(i+1)*100}>
                <h4>{n.nom_programa}</h4>{console.log(value[i])}
            <Select
                closeOnSelect={false}
                disabled={false}
                multi
                onChange={handleSelectChange}
                options={n.cursos}
                placeholder="Escoje el curso"
                removeSelected={true}
                rtl={true}
                simpleValue
                value={value[i].cursos}
                valueKey='id_curso'
                labelKey='nom_curso'
                key={i+1}
            />
            </div>
        )}
        </div>

export default MultipleMS