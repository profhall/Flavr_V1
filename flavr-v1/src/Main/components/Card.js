
/* eslint-disable jsx-a11y/accessible-emoji, no-unused-vars, no-dupe-keys */
import '../../Fonts/Cinzel-400.js';
import '../../Fonts/Montserrat-400.js';
import Blueberries from '../../Svgs/Blueberries.view.js';
import Bowl1 from '../../Svgs/Bowl1.view.js';
import Bread2 from '../../Svgs/Bread2.view.js';
import Glass1 from '../../Svgs/Glass1.view.js';
import React from 'react';
import { css } from 'emotion';

const FlavCardItem1 = css({
    label: 'FlavCardItem1',
    flexDirection: 'row',
    width: '90%',
    height: 125,
    backgroundColor: '#e4ea8c',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    alignSelf: 'center',
    marginBottom: 105,
    marginTop: 10,
});
const FlavIconBox = css({
    label: 'FlavIconBox',
    flexDirection: 'row',
    flexBasis: 'auto',
    flexGrow: 0.5,
    flexShrink: 1,
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
});
const FlavCardContent = css({
    label: 'FlavCardContent',
    flexBasis: 'auto',
    flexGrow: 3,
    flexShrink: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 15,
    height: '90%',
    paddingTop: 15,
});
const Vertical = css({
    label: 'Vertical',
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 1,
});
const FlavName = css({
    label: 'FlavName',
    color: '#cb0000',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    alignSelf: 'flex-start',
});
const FlavDesc = css({
    label: 'FlavDesc',
    color: '#cb0000',
    fontFamily: 'Cinzel, serif',
    fontSize: 16,
    fontWeight: 400,
    marginTop: 15,
});
const InfoIcons = css({
    label: 'InfoIcons',
    flexDirection: 'row',
    height: 30,
    width: 100,
});

const Card = props => {
    return (
        <div
            data-test-id={`${props['data-test-id'] || 'FlavCardItem'}|`}
            className={`views-block ${FlavCardItem1}`}
        >
            <div
                data-test-id={`FlavCardItem.FlavIconBox|`}
                className={`views-block ${FlavIconBox}`}
            >
                <Blueberries
                    data-test-id={`FlavCardItem.Blueberries|`}
                    alignSelf="center"
                    height={80}
                    width={80}
                    backgroundColor="#e4ea8c"
                    borderTopRightRadius={15}
                    borderBottomRightRadius={15}
                    marginLeft={10}
                    marginTop={15}
                    justifyContent="center"
                    flexBasis="auto"
                    flexWrap="wrap"
                    flexGrow={3}
                    className="views-block"
                />
            </div>
            <div
                data-test-id={`FlavCardItem.FlavCardContent|`}
                className={`views-block ${FlavCardContent}`}
            >
                <div
                    data-test-id={`FlavCardItem.Vertical|`}
                    className={`views-block ${Vertical}`}
                >
          <span
              data-test-id={`FlavCardItem.FlavName|`}
              className={`views-text ${FlavName}`}
          >{props.name}



          </span>
                    <span
                        data-test-id={`FlavCardItem.FlavDesc|`}
                        className={`views-text ${FlavDesc}`}
                    >
            {(props.what ? props.what : " No Description" )}
          </span>
                </div>
                <div
                    data-test-id={`FlavCardItem.InfoIcons|`}
                    className={`views-block ${InfoIcons}`}
                >
                    <Bowl1
                        data-test-id={`FlavCardItem.Bowl1|`}
                        width={25}
                        height={25}
                        className="views-block"
                    />
                    <Glass1
                        data-test-id={`FlavCardItem.Glass1|`}
                        width={25}
                        width={45}
                        height={25}
                        className="views-block"
                    />
                    <Bread2
                        data-test-id={`FlavCardItem.Bread2|`}
                        width={25}
                        height={25}
                        className="views-block"
                    />
                </div>
            </div>
            {props.children}
        </div>
    );
};
// FlavCardItem.defaultProps = { name: 'Bluberries', what: 'Blueberries are...' };
export default Card;
