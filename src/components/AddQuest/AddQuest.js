import React, {useState, useRef} from "react";
import "./modaladd.sass"
import {useSelector, useDispatch} from "react-redux";
import md5 from "md5"

import imAdd from "../../img/icons/add.svg"
import imRemove from "../../img/icons/remove.svg"
import {closeAddModal} from "../../store/reducers/modalAdd";


export const AddQuest = props => {
    //defaults
    const modal = useSelector(state => state.modalAdd.modalAdd);
    const dispatch = useDispatch();
    const nameValue = useRef(null)
    const timeValue = useRef(null)

    const [quest, setQuest] = useState({
        id: null,
        name: "",
        dateStart: null,
        category: "",
        dateEnd: null,
    })

    const [task, setTask] = useState({
        id: null,
        description: "",
        taskTime: null,
    })

    const [arrayTask, setArrayTask] = useState([])

    //METHODS
    const questData = event => {
        setQuest({...quest, [event.target.name] : event.target.value});
    }

    const taskData = event => {
        setTask({...task, [event.target.name] : event.target.value})
        setTask( prevState => ({ ...prevState, id: md5(task.description) }))
    }

    const createQuest = () => {
        const dataQuest = {
            id: md5(quest.name),
            name: quest.name,
            dateStart: quest.dateStart,
            dateEnd: quest.dateEnd,
            questsArray: []
        }

        console.log(dataQuest)
    }

    const addTask = () => {
        const duplicate = arrayTask.find(item => task.id === item.id)
        //console.log("Dulicate ?", duplicate)
        if(!duplicate){
            setArrayTask(oldArray => [...oldArray, task])
            nameValue.current.value = ""
            timeValue.current.value = ""
        } else {
            alert("Такая задача уже существует !")
        }
    }

    const deleteItem = id => {
        const updatedArr = arrayTask.filter(item => item.id !== id)
        setArrayTask(updatedArr)
    }

    const renderTasks = () => {
        if (arrayTask.length !== 0){
            return arrayTask.map((item, index) => {
                return(
                    <li key={item.id}>
                        <span>{index + 1}</span>
                        <div>
                            {item.description}
                            <i>{item.taskTime} мин</i>
                            <b className="remove" onClick={() => {deleteItem(item.id)}}><img src={imRemove} alt="remove-img"/></b>
                        </div>
                    </li>
                )
            })
        } else {
            return(
                <span>Подзадачи отсутствуют</span>
            )
        }
    }

    const closeModal = () => { dispatch(closeAddModal()) }

    return(
        <div className={modal ? " modal-wrap open" : "modal-wrap"}>
            <div className="inn">
                <div className="block type-a">
                    <figure className="close-modal" onClick={() => {closeModal()}} />
                    <h3>Прокачать Skill</h3>

                    <div className="col-2">
                        <label>
                            <span>Наименование</span>
                            <input type="text" required={true}
                               name="name"
                               onChange={questData}
                            />
                        </label>
                        <label>
                            <span>Дата начала</span>
                            <input type="date" required={true}
                               name="dateStart"
                               onChange={questData}
                            />
                        </label>
                    </div>
                    <div className="col-2">
                        <label>
                            <span>Категория</span>
                            <input type="text" required={true}
                               name="category"
                               onChange={questData}
                            />
                        </label>
                        <label>
                            <span>Дата конца</span>
                            <input type="date"
                               name="dateEnd"
                               onChange={questData}
                            />
                        </label>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>

                    <div className="col-3-custom">
                        <label className="task">
                            <span>Список задач</span>
                            <input type="text" required={true} name="description"
                                ref={nameValue}
                                onChange={taskData}
                            />
                        </label>
                        <label className="time">
                            <span>Время</span>
                            <input type="number" required={true} name="taskTime"
                                ref={timeValue}
                                onChange={taskData}
                            />
                        </label>
                        <button className="add" onClick={addTask}><img src={imAdd} alt="add-icon"/></button>
                    </div>

                    <ul className="added-list">
                        <h4>Задачи</h4>
                        {renderTasks()}
                    </ul>

                    <button className="add-quest" onClick={() => {createQuest()}}>Добавить квест</button>
                </div>
            </div>
        </div>
    )
}