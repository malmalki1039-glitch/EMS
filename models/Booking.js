class Booking {
    constructor(userId, classroomId, startDate, endDate, purpose, status, participantCount) {
        this.userId = userId;          // ID of the user making the reservation
        this.classroomId = classroomId;  // ID of the classroom being reserved
        this.startDate = startDate;      // Start date and time of the reservation
        this.endDate = endDate;          // End date and time of the reservation
        this.purpose = purpose;          // Purpose of the reservation
        this.status = status;            // Status of the reservation (e.g. confirmed, cancelled)
        this.participantCount = participantCount; // Number of participants
    }

    // Method to check if the booking is valid
    isValid() {
        return this.startDate < this.endDate && this.participantCount > 0;
    }

    // Method to get booking summary
    getSummary() {
        return `Booking by User: ${this.userId}, Classroom: ${this.classroomId}, From: ${this.startDate} To: ${this.endDate}, Purpose: ${this.purpose}, Status: ${this.status}, Participants: ${this.participantCount}`;
    }
}

module.exports = Booking;