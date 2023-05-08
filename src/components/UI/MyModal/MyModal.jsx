import React from 'react';
import cls from './myModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootclasses = [cls.MyModal];
    if (visible) {
        rootclasses.push(cls.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootclasses.join(" ")} >
            <div className={cls.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal