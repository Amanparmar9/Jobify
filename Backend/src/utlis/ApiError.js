class ApiError extends Error{
    //constructor ko override bhi krunga.
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        //yaha pr jaake hum chezo ko override kr denge.
        //idhar msg toh override krna hi krna hai.
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        

        //production code mai likha jata hai.
        if (stack) {
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}

export {ApiError}