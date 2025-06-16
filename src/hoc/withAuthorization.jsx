
import useAuth from '../hooks/useAuth'

const withAuthorization = (WrappedComponent,requiredRole=[]) => ()=>{
   const {user} =  useAuth()
  
//   const hasAllRoles = requiredRoles.every(role => user?.roles?.includes(role))

   const hasAcess = user?.roles?.some(role=>requiredRole.includes(role))
    if (!hasAcess) {
        return <div className='margin-30'>You do not have required role to view this page.</div>;
    }

    return  <WrappedComponent/>
   
}

export default withAuthorization



