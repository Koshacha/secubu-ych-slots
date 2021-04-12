import React, { Component } from 'react';
import { API_TOKEN } from '../consts';
import List from './List';
import ListItem from "./ListItem";
import ListItemSkeleton from "./ListItemSkeleton";
import Socials from "./Socials";
import _ from 'lodash';
import moment from "moment";
import Footer from "./Footer";
import Notify from "./Notify";

export default class App extends Component {
  state = {
      commissions: [],
      contentLoaded: false,
      notifyIsVisible: false
  }

  constructor(props) {
      super(props);
      this.discordRef = React.createRef();
  }

  componentDidMount() {
    fetch(`https://incubu.kyu.by/api/collections/get/commissions?token=${API_TOKEN}`)
        .then(res => res.json())
        .then((data) => {
            let items = _.filter(data.entries, ['is_complete', false]);
            items = _.orderBy(items, [({sort}) => (+sort)], ['asc']);
            items = _.sortBy(items, [({stage}) => {
                return stage === 'wait' ? -1 : 1;
            }]);
            this.setState({ commissions: items, contentLoaded: true });

            let lastModify = _.maxBy(items, '_modified');
            const timeBlock = document.getElementById('last-update');
            timeBlock.textContent = `Last update: ${moment(lastModify._modified * 1000).format('LLLL')}`;
        })
        .catch(console.log);
  }

  discordClickHandler = ({ currentTarget }) => {
      navigator.clipboard.writeText('secubu#2532');
      this.setState({
          notifyIsVisible: true
      });
      const timer = setTimeout(() => {
          this.setState({
              notifyIsVisible: false
          });
      }, 1500);
  }

  render() {
      const { contentLoaded, commissions, notifyIsVisible } = this.state;

      return (
          <>
              <section className="flex items-start justify-center py-16 bg-gray-50 min-w-screen">
                  <div className="max-w-6xl px-4 mx-auto md:px-16 xl:px-10">
                      <div className="flex flex-col items-start lg:flex-row">
                          <div
                              className="flex flex-col items-start justify-center w-full h-full pr-8 mb-5 lg:mb-0 lg:w-1/2 lg:sticky lg:top-4">
                              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">secubu's
                                  commission queue</h2>
                              <p id="last-update" className="mt-6 text-sm text-gray-600"></p>
                              <p className="mb-6 mt-3 text-xl text-gray-600 w-full">
                                  <Socials discordClick={this.discordClickHandler} discordRef={this.discordRef} />
                              </p>
                          </div>
                          <div className="w-full lg:w-1/2">
                              <div className="relative z-10 bg-white rounded-xl shadow-xl divide-y divide-gray-50 md:px-4">
                                  <List>
                                      {
                                          contentLoaded === true ? commissions.map((commission, i) => (
                                              <ListItem key={commission._id} index={i + 1} item={commission} />
                                          )) : Array(8).fill(null).map((el, i) => (
                                              <ListItemSkeleton key={`ListItemSkeleton${i}`} />
                                          ))
                                      }
                                  </List>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <Notify show={notifyIsVisible}/>
              <Footer/>
          </>
      );
  }
}