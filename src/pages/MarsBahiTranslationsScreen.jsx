import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsBahiHeader from '../components/MarsBahiHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MarsBahiHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('EPL', '10.01 16:00', 'Manchester City ' + ' Arsenal')}
        {renderBroadcast(
          'NBA',
          '18.02 19:30',
          'Los Angeles Lakers -' + ' Golden State Warriors',
        )}
        {renderBroadcast(
          'Bundesliga',
          '15.03 21:00',
          'Borussia Dortmund -' + ' Bayern Munich',
        )}
        {renderBroadcast(
          'NFL',
          '25.04 20:15',
          'Dallas Cowboys -' + ' Kansas City Chiefs',
        )}
        {renderBroadcast(
          'NHL',
          '30.05 19:45',
          'Chicago Blackhawks -' + ' Detroit Red Wings',
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.placeholder,
    elevation: 5,
    paddingVertical: 10,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.main,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  teamsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    position: 'absolute',
    right: 10,
    textDecorationLine: 'underline',
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.regular,
    fontSize: 17,
    color: COLORS.black,
    marginTop: 5,
  },
});
