import React from 'react';
import RedLogo from '@/assets/SVG/RedLogo.svg';
import CustomText from '@/utils/CustomText';
import colors from '@/utils/color';
import {ScaleHeight, ScaleWidth, fontScale} from '@/utils/scale';
import {StyleSheet, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
const SectionBlockComponent = ({...item}) => {
  const source = {
    html: `${item.text}`,
  };

  return (
    <View>
      <View style={styles.subTitleWrapper}>
        <RedLogo />
        <CustomText style={styles.subTitleStyle} textType="Rubik-Bold">
          {item.title}
        </CustomText>
      </View>
      <View style={styles.pageTextStyle}>
        <RenderHtml contentWidth={326 * ScaleWidth} source={source} />
      </View>

      {/* <CustomText >{item.text}</CustomText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loremText: {
    fontSize: (22 * ScaleHeight) / fontScale,
    marginLeft: 24 * ScaleWidth,
    width: 328 * ScaleWidth,
    marginBottom: 70 * ScaleHeight,
    color: colors.NAVY_BLUE,
  },
  pageTextStyle: {
    fontSize: (18 * ScaleHeight) / fontScale,
    width: 326 * ScaleWidth,
    alignSelf: 'center',
    color: colors.BLUE,
    marginBottom: 43 * ScaleHeight,
  },
  subTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 327 * ScaleWidth,
  },
  subTitleStyle: {
    marginTop: 22 * ScaleHeight,
    fontSize: (18 * ScaleHeight) / fontScale,
    width: 300 * ScaleWidth,
    marginBottom: 24 * ScaleHeight,
    color: colors.NAVY_BLUE,
  },
});

export default SectionBlockComponent;
