import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Tasks({handleTouch,tasks}){
    return(
        <View style={styles.tasks}>
        <Text style={styles.heading2}>Tasks</Text>
        <FlatList style={styles.list} data={tasks} keyExtractor={(item) => item.id} renderItem={({item}) =>(
        <View style={styles.collective}>
        <Text style={styles.task}>{item.name}</Text>
        <TouchableOpacity onPress={() => {handleTouch(item.id)}}>
        <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
        </View>
      )}/>
      </View>
    )
}

const styles=StyleSheet.create({
    heading2:{
        fontSize:30,
        textAlign:'center',
        marginVertical:10
      },
    task:{
      flex:1,
        padding:10,
        margin:10,
        textAlign:'center',
        borderStyle:"dashed",
        borderWidth:1,
        borderColor:"#777",
        borderRadius:10,
      },
      tasks:{
        flex:1,
        width:"100%"
      },
      collective:{
        flexDirection:"row",
        alignItems:"center"
      }
})