// WE can say that the cheks i the should continue function
// is stored in some array and these arrays are checked to see 
// if they are empty or not
const pendingTimers=[];
const pendingOsTasks=[];

//contains the threadpool tasks
const pendingOperations=[];


// node myFile.js-running the file
// event loop does not get executed immediatley
//it first executes file

//new timers,os tasks,operations are recorded from the file running
myFile.runContents()


function shouldContinue()
{
    // does 3 separate checks
    
    //Check1:any pending setTimeout,setInterval,setImmediate
    //Check2:checks if there are any pending Operating system tasks-like is the server listening on any http
    //port/server
    //Check3:Any long running operations like reading a file (fs module)

    // internally node will automatically detect if thre are any system tasks or any operations
    // like reading a file even during the initial execution of the file (myFile.runContent())

    return pendingTimers.length||pendingOperations.length||pendingOsTasks.length;
}


// then runs event loop
// event loop needs to have some logic to keep on getting executed
// entire body executes in one 'tick'
while(shouldContinue())
{
    // 1.node looks at pendingTimers-setTimeout,setInterval-node will detect and call the relevant callback
    // 2.node looks at pendingOsTasks -calls the callback
    // 3.pauses execution till a new event occurs:
                                               //- a new pendingOsTask is done
                                               //- a new pendingOperation is done
                                               //- a timer is about to complete

    // 4.Looks at pendingTimers for setImmediate
    // 5.Handling any close events-handling cleanup code

}





//exit back from termial