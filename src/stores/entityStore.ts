import { makeAutoObservable, runInAction } from 'mobx';
import { Entity } from '../models/entity';
import { entitiesData } from '../../entities';
import uuid from 'react-native-uuid';

export default class EntityStore {
  entityRegistry = new Set<Entity>();
  selectedEntity: Entity = { key: '', title: '', subtitle: '' };
  footerMenuOpen = false;
  addEntityModalOpen = false;
  entityModalOpen = false;

  constructor() {
    //this function is going to be used when this class is called
    makeAutoObservable(this);
  }

  /**
   * @funcion entities()
   * Getter function to return the current list of entities.
   * @return Array of entities
   */
  get entities() {
    return Array.from(this.entityRegistry.values());
  }

  /**
   * @function setSelectedEntity
   * Function to set the Selected Entity
   * @param item takes in a single Entity
   */
  setSelectedEntity = (item: Entity) => {
    this.selectedEntity = item;
  };

  /**
   * @function setEntityModalOpen
   * Function to open or close the Entity Details modal
   * @param arg takes in a boolean
   */
  setEntityModalOpen = (arg: boolean) => {
    this.entityModalOpen = arg;
  };

  /**
   * @function setFooterMenuOpen
   * Function to open or close the Footer Menu
   * @param arg takes in a boolean
   */
  setFooterMenuOpen = (arg: boolean) => {
    this.footerMenuOpen = arg;
  };

  /**
   * @function setAddEntityModalOpen
   * Function to open or close Add Entity Modal
   * @param arg takes in a boolean
   */
  setAddEntityModalOpen = (arg: boolean) => {
    this.addEntityModalOpen = arg;
  };

  /**
   * @function handleOpenOverlay
   * Function to Open the Entity Details modal and pass the data to the entity hook.
   * @param entity
   */
  handleOpenEntityModal = (entity: Entity) => {
    this.setSelectedEntity(entity);
    this.setEntityModalOpen(true);
  };

  /**
   * @function handleDelete
   * Function to pass on the deletion of an item from the modal window
   * and turn the modal window off
   * @param id the id of the item to be deleted.
   */
  handleDeleteEntity = (entity: Entity) => {
    this.deleteEntity(entity);
    this.setEntityModalOpen(false);
  };

  /**
   * @function handleAddModalOpen
   * Function to open the Add Entity Modal window
   * and close the footer menu
   */
  handleAddModalOpen = () => {
    this.addEntityModalOpen = true;
    this.footerMenuOpen = false;
  };

  /**
   * @function loadEntities
   * Function to load the list of entities from the database on startup
   */
  loadEntities = () => {
    entitiesData.forEach((entity) => {
      this.setEntity(entity);
    });
  };

  /**
   * @function addEntity
   * Function to add a new entity.
   */
  addEntity = (entity: Entity) => {
    this.entityRegistry.add(entity);
  };

  /**
   * @function copyRandomEntity
   * Function to get a random item from the entity array and adds it to the array again.
   */
  copyRandomEntity = () => {
    let randomEntity = this.entities[Math.floor(Math.random() * this.entities.length)];
    let newEntity: Entity = {
      key: uuid.v4(),
      title: randomEntity.title,
      subtitle: randomEntity.subtitle,
    };

    this.addEntity(newEntity);
    this.footerMenuOpen = false;
  };

  /**
   * @function deleteEntity
   * @param id string
   * Function that deletes an entity from the array by id
   */
  deleteEntity = (id: Entity) => {
    this.entityRegistry.delete(id);
  };

  /**
   * @function setEntity
   * Function to set a new entity to the Entity List
   * @param entity takes in a single Entity
   */
  private setEntity = (entity: Entity) => {
    this.entityRegistry.add(entity);
  };
}
