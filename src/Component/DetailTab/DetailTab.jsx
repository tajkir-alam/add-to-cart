import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './detailTab.css';

const DetailTab = () => {
    return (
        <section className='detail-tab'>
            <Tabs className='detail-tabs'>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>More Information</Tab>
                </TabList>

                {/* Details will be fetched  */}
                <TabPanel>
                    <p className='tab-panel'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </TabPanel>
                <TabPanel>
                    <p className='tab-panel'>
                        <b>Toad</b> (<i>Japanese:=</i>) is a fictional character who primarily
                        appears in Nintendo's Mario franchise. Created by Japanese video game designer
                        he Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, beatae.
                    </p>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default DetailTab;