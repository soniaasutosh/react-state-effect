OLD
State Management
this.state
this.setState() - Asynchronouse (Value with populate in next render)
setState(value)-> Trigger Render Dispatch -> React Re-Render -> (value -> this.state)

    Component Lifecycle/Behavior/Functionality
    		Initlize  - constructor; componentDidMount
    		Running/Update	  - shouldComponentDidUpdate; ComponentDidUpdate
    		Destroy		- componentUnDidMount

---

Nes

State Management

    	[object1, callback]	= useState()	-Asynchronouse	this.state ----> hidden Arrays - return state and callback based on posstion
    		Object	= useRef()

Component Lifecycle/Behavior/Functionality
useCallback
useEffect

    	  useEffect(()=>{

    			--------------> Functinality Execution  - By Default run once

    		return ()=>{
    		   Destroy --------------> run once on destory
    		}
    	  },[
    		--------------> Functinality Execution  - if value changes
    	  ])
