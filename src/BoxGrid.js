import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'


const BoxGrid = ({rows, columns, selection, enabled, onSelect=f=>f})=>
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
                                onClick={()=> onSelect(i+j*rows.length,!!enabled[i+j*rows.length],false)}/>
                        </td>
                    )}
                </tr>
            )}
            <tr>
                <td>Seleccionar todo</td>
                {columns.map((n,i)=>
                    <td key={(i+1)*1000}>
                        <Box key={(i+1)*1000}
                            selected={false} enabled={true}
                            onClick={()=>onSelect(i,true,true)}/>
                    </td>
                )}
            </tr>
            </tbody>
        </table>
    </div>

BoxGrid.propTypes = {
        rows: PropTypes.array,
        columns: PropTypes.array,
        selection: PropTypes.array,
        onSelect: PropTypes.func
}

export default BoxGrid