import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/system';
import { Button, Paper} from '@mui/material';



export default function Student() {
   const[name, setName]=React.useState('')
   const[adress,setAdress]=React.useState('')
   const[students,setStudents]=React.useState([])
   const handleClick=(e)=>{
    e.preventDefault()
    const student={name,adress}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student added")

    })
   }

React.useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
    }
)
},[])

  return (
    <Container>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student adress" variant="outlined" fullWidth
       value={adress}
       onChange={(e)=>setAdress(e.target.value)}/>
       <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
    </Button>
    </Box>
    <h1>Students</h1>
    <Paper elevation={3} >
{students.map(student=>(
    <Paper elevation={6} key={student.id} >
Id:{student.id}
<h1></h1>
Name:{student.name}
<h1></h1>
Adress:{student.adress}
<h1></h1>
    </Paper>
))}
    </Paper>
    </Container>
  );
}
