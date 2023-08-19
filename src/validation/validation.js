export const dateComparison = (creationDate, deadLineDate, deadLineTime) => { 
    let currentDate = creationDate.toLocaleDateString();
    let currentTime = creationDate.getHours() + ":" + creationDate.getMinutes();
    
    // Если дада дедлайна меньше текущей даты, 
    // то возвращаем текст "Дада дедлайна не может быть меньше текущей даты"
    // Если нет, проверяем время
    // Если время равно текущему времени, возвращаем "Время дедлайна не может совпадать с текущим временем"
    // Если время не равно текущему, сравниваем, меньше ли время дедлайна текущего времени
    // Если да, возвращаем "Время дедлайна не может быть меньше текущего времени"
    // Если нет, возвращаем true
    
    if(isDeadLineDateLessCurrentDate(currentDate, deadLineDate)) 
        return "Дада дедлайна не может быть меньше текущей даты";


    if(deadLineTime !== "") {
        if(isDeadLineTimeAreEqualCurrentTime(currentTime, deadLineTime)) 
            return "Время дедлайна не может быть совпадать с текущим времени";

        if(isDeadLineTimeIsLessCurrentTime(currentTime, deadLineTime))
            return "Время дедлайна не может быть меньше текущего времени";
    }
    
    return true;
};

const isDeadLineDateLessCurrentDate = (currentDate, deadLineDate) => {
    if(deadLineDate < currentDate)
        return true;
    return false;
};

const isDeadLineTimeAreEqualCurrentTime = (currentTime, deadLineTime) => {
    if(currentTime === deadLineTime)
        return true;
    return false;
}

const isDeadLineTimeIsLessCurrentTime = (currentTime, deadLineTime) => {
    if(deadLineTime < currentTime)
        return true;
    return false;
}