const formatGeneratedID = () => {
        const getCode = Math.floor(Math.random() * 10000)
        
        console.log(getCode)

        return getCode
}

console.log(formatGeneratedID())