import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { dataUser } from "../common/Data";

function ProfileScreen() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get("https://api.github.com/users/" + dataUser[count].username)
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert("Gagal!", e));
      return request;
    }

    fetchData();
  }, [count]);

  const next = () => {
    var nextCount = count + 1;
    if(nextCount > 3){
      nextCount = 0;
    }
    setCount(nextCount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url
          }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          {data.name}
        </Text>
        <Text style={styles.headerTextDesc}>{"GitHub : " + data.login}</Text>
        <Text style={styles.headerTextDesc}>{"Public Repositories : " + data.public_repos}</Text>
        <Text style={styles.headerTextDesc}>{data.company}</Text>
        <Text style={styles.headerTextDesc}>{data.location}</Text>
      </View>
      <TouchableOpacity style={styles.bodyTouchable} onPress={() => next()}>
        <Text style={styles.bodyText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#76BA1B",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff"
  },
  headerTextDesc: {
    color: "#fff"
  },
  bodyTouchable: {
    alignSelf: "center",
    backgroundColor: "#76BA1B",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 20
  },
  bodyText: {
    color: "#efd",
    fontSize: 20
  }
});

export default ProfileScreen;
