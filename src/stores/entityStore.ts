import { makeAutoObservable, runInAction } from 'mobx';
import { Entity } from '../models/entity';
import { entitiesData } from '../../entities';

export default class EntityStore {
  entityRegistry = new Map<string | number[], Entity>();
  footerMenuOpen = false;
  addEntityModalOpen = false;

  constructor() {
    //this function is going to be used when this class is called
    makeAutoObservable(this);
  }

  setFooterMenuOpen = (arg: boolean) => {
    this.footerMenuOpen = arg;
  };

  setAddEntityModalOpen = (arg: boolean) => {
    this.addEntityModalOpen = arg;
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

  get entities() {
    return Array.from(this.entityRegistry.values());
  }

  loadEntities = () => {
    entitiesData.forEach((entity) => {
      //run the helper function to set the current activity
      //to the activity map
      this.setEntity(entity);
    });
  };

  /**
   * @function addEntity
   * Function to add a new entity.
   */
  addEntity = (entity: Entity) => {
    this.entityRegistry.set(entity.key, entity);
  };

  // todo
  /**
   * @function copyRandomEntity
   * Function to get a random item from the entity array and adds it to the array again.
   */
  copyRandomEntity = () => {
    // finds a random item in the entities array
    // and adds it to the entity array.
    this.addEntity(this.entities[Math.floor(Math.random() * this.entities.length)]);
    this.footerMenuOpen = false;
  };

  /**
   * @function deleteEntity
   * @param id string
   * Function that deletes an entity from the array by id
   */
  deleteEntity = (id: string) => {
    this.entityRegistry.delete(id);
  };

  private getEntity = (id: string) => {
    return this.entityRegistry.get(id);
  };

  private setEntity = (entity: Entity) => {
    this.entityRegistry.set(entity.key, entity);
  };
}
