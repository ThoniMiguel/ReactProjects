import React from 'react'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
const List = ({item, onDelete, onEdit}) => {
    return (
        <>
            <article className="list-item">
                <p>{item.text}</p>
                <div className="icons">
                    <Edit className="edit-icon" fontSize="small" onClick={() => {onEdit(item.id)}}/>
                    <Delete color="secondary" className="del-icon" fontSize="small" onClick={() => {onDelete(item.id)}}/>
                </div>
            </article>
        </>
    )
}

export default List
