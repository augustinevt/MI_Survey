DROP DATABASE IF EXISTS walmart_survey;
CREATE DATABASE walmart_survey;

\c walmart_survey;

CREATE TABLE blobs (
  ID SERIAL PRIMARY KEY,
  blob text
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name text,
  email text,
  company text
);

INSERT INTO users (company, name, email) VALUES ('Record Head','Brenda Arens','recordheadbrenda@yahoo.com');
INSERT INTO users (company, name, email) VALUES ('Warstore Com','Neal Catapano','Frontdesk@thewarstore.com');
INSERT INTO users (company, name, email) VALUES ('Fishandsave.com LLC','Dave McCombs','dave@fishandsave.com');
INSERT INTO users (company, name, email) VALUES ('The Wire Whisk','Mary Miller','mary@thewirewhisk.com');
INSERT INTO users (company, name, email) VALUES ('Progressive Pro Caterers','John Krol','jkrol@progressivepro.com');
INSERT INTO users (company, name, email) VALUES ('Winshare LLC','Heather Politzer','hpolitzer@brilliantpuzzles.com');
INSERT INTO users (company, name, email) VALUES ('Everywhere Chair LLC','Jim Ludwig','jim@everywherechair.com');
INSERT INTO users (company, name, email) VALUES ('elighters management inc','Gaurang Patel','elighters@yahoo.com');
INSERT INTO users (company, name, email) VALUES ('Delutti, Inc.','Cale Reeder','cale@delutti.com');
INSERT INTO users (company, name, email) VALUES ('Floor Covering Services & Consultants','Angela Henry','angela@floorconsult.com');
INSERT INTO users (company, name, email) VALUES ('Star City Books','Zak Moore','zak@starcitybooks.net');
INSERT INTO users (company, name, email) VALUES ('Stillbay Inc dba Toolplanet','Thomas Kreis','sales@toolplanet.com');
INSERT INTO users (company, name, email) VALUES ('hollywood MI inc','Ajang Sham','a@hollywooddj.com');
INSERT INTO users (company, name, email) VALUES ('Window Repair systems','Michael Fox','michael.fox@windowrepairsystems.com');
INSERT INTO users (company, name, email) VALUES ('Sole Provisions, Ltd.','Mark Udvadia','mark@soleprovisions.com');
INSERT INTO users (company, name, email) VALUES ('Sports Unlimited Inc.','Mike Neff','mneff@sportsunlimited.com');
INSERT INTO users (company, name, email) VALUES ('Spotix, Inc.','Aaron Verhorevoort','aaron@spotix.com');
INSERT INTO users (company, name, email) VALUES ('Monostereo inc','Jeff Berg','monostereo03@aol.com');
INSERT INTO users (company, name, email) VALUES ('Gramophone','Ed Gordon','gordon.edward@gmail.com');
INSERT INTO users (company, name, email) VALUES ('Accessory Export, LLC','Will Land','will@marketplacevalet.com');
INSERT INTO users (company, name, email) VALUES ('One Triathalon Gear, Inc','Alan Holt','aholt@onetri.com');
INSERT INTO users (company, name, email) VALUES ('Marco Enterprises, Inc.','Alan Martin','alan@martinstore.com');
INSERT INTO users (company, name, email) VALUES ('Car Toys, Inc.','Brandon Titmus','btitmus@cartoys.com');
INSERT INTO users (company, name, email) VALUES ('SquareDealRecordings&Supplies','Kjerstin Ferris','kjerstin@squaredealonline.com');
INSERT INTO users (company, name, email) VALUES ('In The Hole, Inc.','Michael Lynch','michael@intheholegolf.com');
INSERT INTO users (company, name, email) VALUES ('Liquid Sales LLC','Dan DeChiaro','Daniel@liquidsalesllc.com');
INSERT INTO users (company, name, email) VALUES ('Newtown Video Dist','Phil Forman','phil@newtownvideo.com');
INSERT INTO users (company, name, email) VALUES ('CSH Incorporated','Heather Atkinson','orders@cshincorporated.com');
INSERT INTO users (company, name, email) VALUES ('536M Corporation','David Salko','mail@536m.net');
INSERT INTO users (company, name, email) VALUES ('Ten Four LTD','Mike Dolan','mike.dolan@bdent.com');
INSERT INTO users (company, name, email) VALUES ('Naxos of America, Inc.','Jonathan Price','jprice@naxosusa.com');
INSERT INTO users (company, name, email) VALUES ('U-Spray, Inc.','Jonathan Schaefer','uspray@gmail.com');
INSERT INTO users (company, name, email) VALUES ('GMG Ventures','Jim Gauntlett','jim@go-fast-parts.com');
INSERT INTO users (company, name, email) VALUES ('Wayne Herndon Rare Coins','Wayne Herndon','wh@wayneherndon.com');
INSERT INTO users (company, name, email) VALUES ('Divine Lighting, LLC','Livingston McNeer','sales@divinelighting.com');
INSERT INTO users (company, name, email) VALUES ('Shed World Headquarters','John Hart','john@kayakshed.com');
INSERT INTO users (company, name, email) VALUES ('Bonitas International, LLC','Tracey Jemison','boojeetech@bonitasinternational.com');
INSERT INTO users (company, name, email) VALUES ('OLDIES.com','Joe Buesgen','buesgen@oldies.com');
INSERT INTO users (company, name, email) VALUES ('The WoodLand Group, LLC','Larry DeVuono','ldevuono@woodlandent.com');
INSERT INTO users (company, name, email) VALUES ('Family Fun Shoppe LTD','Louise McNulty','helpwithorder@gmail.com');
INSERT INTO users (company, name, email) VALUES ('RxClearance','Jason Whitten','jason@rxclearance.com');
INSERT INTO users (company, name, email) VALUES ('Complete Liquidators','Ken Gorman','mjoffice@mjentertainment.com');
INSERT INTO users (company, name, email) VALUES ('Supreme Media LLC','Peter Panagakos','ppanagakos88@gmail.com');
INSERT INTO users (company, name, email) VALUES ('Boater''s Outlet','Gary Freedman','gary@boatersoutlet.com');
INSERT INTO users (company, name, email) VALUES ('Zemko LLC','Brenda Caulk','brenda@zemkosupply.com');

CREATE USER nodeuser WITH PASSWORD 'abc123';
GRANT SELECT, UPDATE, INSERT, DELETE ON blobs TO nodeuser;
GRANT USAGE, SELECT ON SEQUENCE blobs_id_seq TO nodeuser;

GRANT SELECT, UPDATE, INSERT, DELETE ON users TO nodeuser;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO nodeuser;
