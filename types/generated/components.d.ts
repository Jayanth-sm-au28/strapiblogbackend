import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_w_link_w_icon_buttons';
  info: {
    displayName: 'button-w-link-w-icon';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    text: Attribute.String;
    icon: Attribute.String;
    link: Attribute.Text;
  };
}

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    key: Attribute.String;
    CardleftHeader: Attribute.String;
    leftHeaderDescription: Attribute.Text;
    divider: Attribute.Boolean;
    leftDescripition: Attribute.Text;
    rightHeaderDescripition: Attribute.Text;
    rightFooterHeader: Attribute.String;
    rightFooterDescripition: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonLink: Attribute.String;
    ButtonIcon: Attribute.String;
  };
}

export interface ListOCard extends Schema.Component {
  collectionName: 'components_list_o_cards';
  info: {
    displayName: 'OCard';
    description: '';
  };
  attributes: {
    ListOCard: Attribute.Component<'card.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'card.card': CardCard;
      'list.o-card': ListOCard;
    }
  }
}
