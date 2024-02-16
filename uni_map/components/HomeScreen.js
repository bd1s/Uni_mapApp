// HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import HomeImageSlider from "./HomeImageSlider";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeImageSlider />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Bienvenue à la Faculté des Sciences d'El Jadida !
        </Text>
        <Text style={styles.text}>
          Au cœur de l'excellence académique à El Jadida, notre Faculté des
          Sciences se présente comme un phare d'innovation, de découverte et de
          croissance intellectuelle. Nichée dans une ville côtière dynamique
          réputée pour son riche patrimoine culturel, notre institution s'engage
          à favoriser un environnement d'apprentissage dynamique où étudiants,
          enseignants et chercheurs prospèrent.
        </Text>
        <Text style={styles.section}>À Propos de Nous :</Text>
        <Text style={styles.text}>
          Fondée avec une vision de cultiver des leaders dans l'exploration
          scientifique et académique, la Faculté des Sciences d'El Jadida
          bénéficie d'une histoire distinguée de réussite académique et
          d'engagement communautaire. Notre corps professoral est composé
          d'éducateurs, de chercheurs et de professionnels dévoués qui sont
          passionnés par l'avancement des connaissances et repoussent les
          limites de l'investigation scientifique.
        </Text>
        <Text style={styles.section}>Nos Programmes :</Text>
        <Text style={styles.text}>
          Nous proposons une gamme diversifiée de programmes de premier cycle et
          de cycles supérieurs couvrant diverses disciplines dans les sciences
          naturelles et appliquées. Que vous soyez passionné par la biologie, la
          chimie, la physique, les mathématiques ou l'informatique, notre
          programme complet offre aux étudiants les compétences, les
          connaissances et l'expérience pratique nécessaires pour réussir dans
          le monde en constante évolution d'aujourd'hui.
        </Text>
        <Text style={styles.section}>Excellence en Recherche :</Text>
        <Text style={styles.text}>
          Animés par un esprit de curiosité et d'innovation, nos membres du
          corps professoral sont activement engagés dans des recherches de
          pointe dans un large éventail de domaines scientifiques. Des
          investigations fondamentales sur les mystères de l'univers aux
          solutions pratiques aux défis mondiaux, nos initiatives de recherche
          contribuent à l'avancement de la science et bénéficient à la société
          dans son ensemble.
        </Text>
        <Text style={styles.section}>Apprentissage Axé sur l'Étudiant :</Text>
        <Text style={styles.text}>
          À la Faculté des Sciences d'El Jadida, les étudiants sont au cœur de
          tout ce que nous faisons. Nous nous engageons à fournir un
          environnement d'apprentissage favorable caractérisé par des effectifs
          réduits, une attention personnalisée et des opportunités
          d'apprentissage expérientiel. Nos installations de pointe, y compris
          les laboratoires, les bibliothèques et les centres de recherche,
          permettent aux étudiants d'explorer, d'expérimenter et de collaborer
          avec leurs pairs et mentors.
        </Text>
        <Text style={styles.section}>Engagement Communautaire :</Text>
        <Text style={styles.text}>
          Nous reconnaissons l'importance de s'engager activement avec nos
          communautés locales et mondiales. Grâce à des partenariats avec
          l'industrie, les organismes gouvernementaux et les organisations à but
          non lucratif, nous cherchons à exploiter notre expertise et nos
          ressources pour relever les défis urgents, promouvoir le développement
          durable et améliorer la qualité de vie pour tous.
        </Text>
        <Text style={styles.section}>Rejoignez-Nous :</Text>
        <Text style={styles.text}>
          Que vous soyez un scientifique en herbe, un chercheur chevronné ou un
          apprenant tout au long de la vie, nous vous invitons à vous joindre à
          nous dans un voyage de découverte et de transformation à la Faculté
          des Sciences d'El Jadida. Explorez notre site Web pour en savoir plus
          sur nos programmes, nos initiatives de recherche, nos membres du corps
          professoral et nos événements à venir. Ensemble, débloquons les
          mystères du monde naturel et façonnons un avenir plus brillant pour
          les générations à venir. Bienvenue dans un monde de possibilités
          infinies. Bienvenue à la Faculté des Sciences d'El Jadida !
        </Text>
        <Text style={styles.footerTitle}>Contactez nous</Text>
        <View style={styles.footer}>
          <View style={styles.horizontalRow}>
            <Image
              source={require("../assets/greenpin.png")}
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Text style={styles.boldText}>Faculté des sciences.</Text>
          </View>
          <Text style={{ marginLeft: 40 }}>
            Route Ben Maachou, 24000, El Jadida,Maroc
          </Text>
          <View style={styles.horizontalRow}>
            <Image
              source={require("../assets/phone.png")}
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Text style={styles.boldText}>0523584754</Text>
          </View>
          <View style={styles.horizontalRow}>
            <Image
              source={require("../assets/at.png")}
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Text style={styles.boldText}>WEBMASTER4FSJ@gmail.com</Text>
          </View>
          <View style={styles.horizontalRow}>
            <Image
              source={require("../assets/time.png")}
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Text style={styles.boldText}>
              Lundi au vendredi : 8.00 à 18.00
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    margin: 0,
    top: 0,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 0,
    top: 0,
    flexDirection: "column",
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scrollView: {
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 32,
    gap: 8,
  },
  horizontalRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
