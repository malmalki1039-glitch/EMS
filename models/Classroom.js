class Classroom {
    constructor(name, location, capacity, equipment, description, availability) {
        this.name = name; // Name of the classroom
        this.location = location; // Location of the classroom
        this.capacity = capacity; // Max number of students
        this.equipment = equipment; // List of equipment available
        this.description = description; // Description of the classroom
        this.availability = availability; // Availability status (e.g., Available, Booked)
    }

    // Method to get classroom information
    getInfo() {
        return {
            name: this.name,
            location: this.location,
            capacity: this.capacity,
            equipment: this.equipment,
            description: this.description,
            availability: this.availability
        };
    }
}

module.exports = Classroom;