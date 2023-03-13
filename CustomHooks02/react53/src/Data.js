import { HookData } from "./HookData";
export function Data(){
const{username,password,handleDataChange}=HookData()
return (
<form>
    <input name="username" value={username} onChange={handleDataChange} />
    <br/>
    <input name="password" type="password" value={password} onChange={handleDataChange}/>
</form>
   )
}