import { StyleSheet, Text } from 'react-native';
export default function Header(){
    return(
        <Text style={styles.heading1}>To-do List</Text>
    )
}
const styles=StyleSheet.create({
    heading1:{
        fontSize:40,
        textAlign:'center'
      },
})