import React from 'react';
import FastImage from 'react-native-fast-image';
import CustomText from '@/utils/CustomText';
import Quote from '@/assets/SVG/Quote.svg';
import {ScaleHeight, ScaleWidth, fontScale} from '@/utils/scale';

// import {BlurView} from '@react-native-community/blur';
import {StyleSheet, View} from 'react-native';
import colors from '@/utils/color';

const QuoteBlockComponent = ({...item}) => {
  return (
    <View>
      <View style={styles.anyBlock}>
        <Quote />
        <View style={styles.anyBlockRight}>
          <FastImage
            style={{
              width: 74 * ScaleWidth,
              height: 96 * ScaleHeight,
            }}
            source={{uri: item.author_image}}
          />
          <View style={styles.aboutMemberBlock}>
            <CustomText
              textType="Rubik-Semibold"
              style={styles.aboutMemberTitle}>
              {item.author_name}
            </CustomText>
            <CustomText textType="Rubik-Regular" style={styles.aboutMemberText}>
              {item.author_details}
            </CustomText>
          </View>
        </View>
      </View>
      <CustomText textType="Rubik-LightItalic" style={styles.quoteText}>
        {item.author_quote}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteText: {
    width: 326 * ScaleWidth,
    fontSize: (31 * ScaleHeight) / fontScale,
    color: '#003366',
    alignSelf: 'center',
    marginBottom: 59 * ScaleHeight,
  },
  linesStyle: {
    alignSelf: 'flex-start',
    marginLeft: 190 * ScaleWidth,
    // marginTop: -10,
    marginBottom: 60 * ScaleHeight,
    width: 162 * ScaleWidth,
    heght: 2 * ScaleHeight,
  },
  aboutMemberTitle: {
    fontSize: (12 * ScaleHeight) / fontScale,
    color: '#003366',
    marginBottom: 8 * ScaleHeight,
  },
  aboutMemberText: {
    fontSize: (12 * ScaleHeight) / fontScale,
    width: 160 * ScaleWidth,
    color: '#003366',
    marginBottom: 38 * ScaleHeight,
  },
  aboutMemberBlock: {
    paddingTop: 8 * ScaleHeight,
    width: 158 * ScaleWidth,
    height: 90 * ScaleHeight,
    marginLeft: 10 * ScaleWidth,
    borderBottomColor: '#00DAEE',
    borderBottomWidth: 1,
    borderTopColor: '#00DAEE',
    borderTopWidth: 1,
  },
  anyBlockRight: {
    width: 242 * ScaleWidth,
    height: 96 * ScaleHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -10 * ScaleWidth,
    zIndex: -6,
  },
  anyBlock: {
    flexDirection: 'row',
    width: 326 * ScaleWidth,
    height: 96 * ScaleHeight,
    alignSelf: 'flex-end',
    marginBottom: 56 * ScaleHeight,
  },

  // loremText: {
  //   fontSize: (22 * ScaleHeight) / fontScale,
  //   marginLeft: 24 * ScaleWidth,
  //   width: 328 * ScaleWidth,
  //   marginBottom: 70 * ScaleHeight,
  //   color: '#003366',
  // },
  // articleWrapper: {
  //   width: '100%',
  //   backgroundColor: '#E6FFFF',
  //   paddingTop: 46 * ScaleHeight,
  // },
  // headlineWrapper: {
  //   width: 326 * ScaleWidth,
  //   marginLeft: 24 * ScaleWidth,
  //   // height: 188,
  //   marginBottom: 100 * ScaleHeight,
  // },
  // headlineText: {
  //   position: 'absolute',
  //   width: 320 * ScaleWidth,
  //   top: 50 * ScaleHeight,
  //   left: -170 * ScaleWidth,
  //   fontSize: (37 * ScaleHeight) / fontScale,
  //   color: '#E6FFFF',
  //   lineHeight: 46 * ScaleHeight,
  // },

  // scrollWrapper: {
  //   marginTop: 0 * ScaleHeight,
  // },
  // neptunWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: 300 * ScaleWidth,
  //   top: 47 * ScaleHeight,
  //   left: 24 * ScaleWidth,
  // },
  // goBackStyle: {
  //   alignSelf: 'center',
  // },
  // logoWrapper: {
  //   alignSelf: 'center',
  // },
  // upperLine: {
  //   height: 1 * ScaleHeight,
  //   width: 158 * ScaleWidth,
  //   backgroundColor: '#fff',
  //   marginLeft: 180 * ScaleWidth,
  // },

  // mainWrapper: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   with: 326 * ScaleWidth,
  //   marginLeft: 24 * ScaleHeight,
  //   marginRight: 24 * ScaleWidth,
  //   marginTop: 320 * ScaleHeight,
  //   marginBottom: 48 * ScaleHeight,
  // },
  // titleWrapper: {
  //   marginTop: 8 * ScaleHeight,
  //   marginBottom: 16 * ScaleHeight,
  // },
  // categoryStyle: {
  //   fontSize: (10 * ScaleHeight) / fontScale,
  //   color: '#FFEA00',
  // },
  // dateStyle: {
  //   fontSize: (12 * ScaleHeight) / fontScale,
  //   color: '#fff',
  // },
  // scroll: {
  //   backgroundColor: 'blue',
  //   height: 90 * ScaleHeight,
  //   marginBottom: 30 * ScaleHeight,
  // },
  // bg: {
  //   marginTop: -4 * ScaleHeight,
  //   width: 375 * ScaleWidth,
  //   height: 811 * ScaleHeight,
  // },

  // header: {
  //   zIndex: 10,
  //   height: 144 * ScaleHeight,
  //   // elevation: 10,
  //   position: 'absolute',
  //   top: 0 * ScaleHeight,
  //   left: 0 * ScaleWidth,
  //   bottom: 0 * ScaleHeight,
  //   right: 0 * ScaleWidth,
  //   backgroundColor: 'rgba(0,0,0,0.3)',
  // },
  // txt: {
  //   fontSize: (24 * ScaleHeight) / fontScale,
  //   color: '#fff',
  // },
  // ttl: {
  //   width: 130 * ScaleWidth,
  //   marginTop: 32 * ScaleHeight,
  //   marginLeft: 20 * ScaleWidth,
  //   fontSize: (24 * ScaleHeight) / fontScale,
  // },
});

export default QuoteBlockComponent;
