import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

export const MultipleMS = ({types=["gg"],value=[],handleSelectChange=f=>f,msedit=false,...props}) =>
        <div className="section">
            <h3 className="section-heading">Preferencia de Cursos</h3>
        {types.map((n,i)=>
            <div key={n.id_programa}>
                <h4>{n.nom_programa}</h4>
            <Select
                closeOnSelect={false}
                disabled={!msedit}
                multi
                onChange={(values)=>handleSelectChange(values,n.id_programa)}
                options={n.cursos}
                placeholder="Escoje el curso"
                removeSelected={true}
                rtl={true}
                simpleValue
                value={value[i].cursos}
                valueKey='id_curso'
                labelKey='nom_curso'
                key={n.id_programa}
            />
            </div>
        )}
        </div>

export default MultipleMS