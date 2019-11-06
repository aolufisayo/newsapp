import React, { Component } from 'react'
import { View, Picker, Text, Button } from 'react-native'
import { inject, observer } from 'mobx-react'
import { getData } from '../utils/fetchData'

@inject('rootStore')
@observer
export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countryList: [
        { name: 'Argentina', code: 'ar' },
        { name: 'Australia', code: 'au' },
        { name: 'Austria', code: 'at' },
        { name: 'Belgium', code: 'be' },
        { name: 'Brazil', code: 'br' },
        { name: 'Bulgaria', code: 'bg' },
        { name: 'Canada', code: 'ca' },
        { name: 'China', code: 'cn' },
        { name: 'Columbia', code: 'co' },
        { name: 'Cuba', code: 'cu' },
        { name: 'Czech Republic', code: 'cz' },
        { name: 'Egypt', code: 'eg' },
        { name: 'France', code: 'fr' },
        { name: 'Germany', code: 'de' },
        { name: 'Greece', code: 'gr' },
        { name: 'Hong Kong', code: 'hk' },
        { name: 'Hungary', code: 'hu' },
        { name: 'India', code: 'in' },
        { name: 'Indonesia', code: 'id' },
        { name: 'Ireland', code: 'ie' },
        { name: 'Isreal', code: 'is' },
        { name: 'Italy', code: 'it' },
        { name: 'Japan', code: 'jp' },
        { name: 'Latvia', code: 'lv' },
        { name: 'Lithuania', code: 'lt' },
        { name: 'Malaysia', code: 'my' },
        { name: 'Mexico', code: 'mx' },
        { name: 'Morocco', code: 'ma' },
        { name: 'Netherlands', code: 'nl' },
        { name: 'New Zealand', code: 'nz' },
        { name: 'Nigeria', code: 'ng' },
        { name: 'Norway', code: 'no' },
        { name: 'Philippines', code: 'ph' },
        { name: 'Poland', code: 'pl' },
        { name: 'Portugal', code: 'pt' },
        { name: 'Romania', code: 'ro' },
        { name: 'Russia', code: 'ru' },
        { name: 'Saudi Arabia', code: 'sa' },
        { name: 'Serbia', code: 'rs' },
        { name: 'Singapore', code: 'sg' },
        { name: 'Slovakia', code: 'sk' },
        { name: 'Slovenia', code: 'si' },
        { name: 'South Africa', code: 'za' },
        { name: 'South Korea', code: 'kr' },
        { name: 'Sweden', code: 'se' },
        { name: 'Switzerland', code: 'ch' },
        { name: 'Taiwan', code: 'tw' },
        { name: 'Thailand', code: 'th' },
        { name: 'Turkey', code: 'tr' },
        { name: 'Uae', code: 'ae' },
        { name: 'Ukraine', code: 'ua' },
        { name: 'United Kingdom', code: 'gb' },
        { name: 'United States', code: 'us' },
        { name: 'Venezuela', code: 've' }
      ]
    }
  }



  render() {
    const { countryList } = this.state;
    const { rootStore } = this.props;
    const { selectedCountry, chooseCountry } = this.props.rootStore.newsStore
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Choose Country:</Text>
        <Picker
          selectedValue={selectedCountry}
          style={{ height: 50, width: 300 }}
          onValueChange={(itemValue) => chooseCountry(itemValue)}
        >
          {
            countryList.map(country => (
              <Picker.Item key={country.code} label={country.name} value={country.code} />
            ))
          }
        </Picker>
        <Button title="Set Country" onPress={async () => await getData(selectedCountry, rootStore)} />
      </View>
    )
  }
}