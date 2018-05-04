import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

const BoxGrid = ({rows, columns, selection, enabled, onSelect=f=>f,...props})=>
    <div className="box-grid">
        <table>
            <thead>
            <tr>
                <th></th>
                {columns.map((n,i) =>
                    <th key={i}>{n}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {rows.map((n,i)=>
                <tr key={i}>
                    <td>
                        {n}
                    </td>
                    {columns.map((r,j)=>
                        <td key={i+j*rows.length}>
                            <Box key={i+j*rows.length}
                                 selected={selection[i+j*rows.length]}
                                 enabled={!!enabled[i+j*rows.length]}
                                 onClick={()=> onSelect(i+j*rows.length,!!enabled[i+j*rows.length],false)}
                                 {...props}
                            />
                        </td>
                    )}
                </tr>
            )}
            <tr></tr>
            <tr>
                <td className="Seleccionar">Seleccionar todo</td>
                {columns.map((n,i)=>
                    <td key={(i+1)*1000}>
                        <Box key={(i+1)*1000}
                             selected={false} enabled={true}
                             onClick={()=>onSelect(i,true,true)}
                             {...props}
                        />
                    </td>
                )}
            </tr>
            <tr>
                <td className="SUMA">Horas Totales</td>
                {columns.map((n,i)=>
                {var x = 0;
                    for(var j=0+14*i;j<14*(i+1);j++)
                        if(selection[j])
                            x++;
                    return <td key={(i+1)*1000}>
                    {x}
                    </td>}
                )}
            </tr>
            </tbody>
        </table>
    </div>

export default BoxGrid

BoxGrid.propTypes = {
    columns: PropTypes.array,
    enabled: PropTypes.array,
    onSelect: PropTypes.func,
    rows: PropTypes.array,
    selection: PropTypes.array
}